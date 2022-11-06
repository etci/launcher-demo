/// <reference types="react-scripts" />
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test";
    PUBLIC_URL: string;
    REACT_APP_GOOGLE_MAPS_API_KEY: string;
    REACT_APP_API_BASE_URL: string;
  }
}
