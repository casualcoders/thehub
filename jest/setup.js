import { loadEnvConfig } from "@next/env";

process.env.NODE_ENV = "test";

loadEnvConfig(process.env.PWD);
