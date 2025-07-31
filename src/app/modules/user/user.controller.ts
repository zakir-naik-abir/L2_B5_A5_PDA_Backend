import httpStatus from 'http-status-codes';
import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { UserServices } from "./user.service";
import { sendResponse } from "../../utils/sendResponse";


// create user
const createUser = catchAsync(async (req: Request, res: Response, next: NextFunction) =>{
  const user = await UserServices.createUser(req.body)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "User Created Successfully",
    data: user,
  })
});

// get all user
const getAllUsers = catchAsync(async (req: Request, res: Response, next: NextFunction) =>{
  const query = req.body;
  const result = await UserServices.getAllUsers(query as Record<string, string>);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "All Users Retrieved Successfully",
    data: result.data,
    // meta: result.meta
  })
})

export const UserControllers = {
  createUser,
  getAllUsers,
};