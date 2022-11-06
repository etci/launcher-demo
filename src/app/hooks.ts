import { useState, useCallback } from "react";

interface ReturnType<T> {
  data: T | undefined;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  isIdle: boolean;
  execute: (cb: () => Promise<T>) => void;
}

type PromiseStatus = "idle" | "loading" | "success" | "error";
export function useAsync<T>(): ReturnType<T> {
  const [data, setData] = useState<T>();
  const [status, setStatus] = useState<PromiseStatus>("idle");

  const execute = useCallback((cb: () => Promise<T>) => {
    setStatus("loading");
    (async () => {
      try {
        const responseData = await cb();
        setData(responseData);
        setStatus("success");
      } catch (e: unknown) {
        setStatus("error");
      }
    })();
  }, []);

  const isIdle = status === "idle";
  const isError = status === "error";
  const isSuccess = status === "success";
  const isLoading = status === "loading";

  return { data: isSuccess ? data : undefined, isIdle, isLoading, isError, isSuccess, execute };
}
