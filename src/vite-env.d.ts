/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DEV_URL: string;
  readonly VITE_YOUTUBE_URL: string;
  readonly VITE_YOUTUBE_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
