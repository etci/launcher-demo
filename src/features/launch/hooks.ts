import { useEffect } from "react";
import { useAsync } from "../../app/hooks";
import { fetchAllLaunches, Launch } from "./api";

export function useLaunches() {
  const { execute, ...rest } = useAsync<Launch[]>();

  useEffect(() => {
    execute(() => fetchAllLaunches(new Date()));
  }, [execute]);

  return { ...rest };
}
