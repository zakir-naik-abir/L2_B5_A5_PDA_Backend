import { Request, Response } from "express";
import { envVars } from "../config/env";

export const globalErrorHandler = async (err: any, req: Request, res: Response, next: NewableFunction) => {
  if(envVars.NODE_ENV === "development"){
    console.log(err);
  }
}