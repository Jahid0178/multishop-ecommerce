declare namespace NodeJS {
  interface ProcessEnv {
    // Add type definitions for your environment variables here
    GOOGLE_CLIENT_ID: string;
    GOOGLE_ClIENT_SECRET: string;
    MONGODB_URI: string;
    AUTH_SECRET: string;
    BASE_URL: string;
    GOOGLE_CLIENT_SECRET: string;
    APP_PUBLIC_API: string;

    //email send env
    HOST_EMAIL: string;
    HOST_PASSWORD: string;
    // Add more variables as needed
  }
}

declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.jpeg" {
  const value: string;
  export default value;
}

declare module "*.svg" {
  import { SVGProps } from "react";
  const value: React.FC<SVGProps<SVGSVGElement>>;
  export default value;
}
