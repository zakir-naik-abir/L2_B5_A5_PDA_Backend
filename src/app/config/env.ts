import dotenv from "dotenv"

dotenv.config()

interface EnvConfig {
  PORT: string,
  DB_URL: string,
  NODE_ENV: "development" | "production",
  BCRYPT_SALT_ROUND: string,
  JWT_ACCESS_SECRET: string,
  JWT_ACCESS_EXPIRES_IN: string,
  JWT_REFRESH_SECRET: string,
  JWT_REFRESH_EXPIRES_IN: string,
};


const loadEnvVariables = (): EnvConfig => {
  const requiredEnvVariables: string[] = [
    "PORT", "DB_URL", "NODE_ENV", "BCRYPT_SALT_ROUND", "JWT_ACCESS_SECRET", "JWT_REFRESH_SECRET", "JWT_ACCESS_EXPIRES_IN", "JWT_REFRESH_EXPIRES_IN",
  ];

  requiredEnvVariables.forEach(key => {
    if(!process.env[key]) {
      throw new Error(`Missing require environment variable ${key}`)
    }
  })

  return {
    PORT: process.env.PORT as string,
    DB_URL: process.env.DB_URL!,
    NODE_ENV: process.env.NODE_ENV as "development" | "production",
    BCRYPT_SALT_ROUND: process.env.BCRYPT_SALT_ROUND as string,
    JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET as string,
    JWT_ACCESS_EXPIRES_IN: process.env.JWT_ACCESS_EXPIRES_IN as string,
    JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET as string,
    JWT_REFRESH_EXPIRES_IN: process.env.JWT_REFRESH_EXPIRES_IN as string,
  }
};

export const envVars = loadEnvVariables()
