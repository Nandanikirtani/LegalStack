import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import jwt from "jsonwebtoken";
import { User } from "../models/User.model.js";

export const verifyJWT = asyncHandler(async (req, res, next) => {
  
  try {
    const token =
    req.cookies?.accessToken ||
    req.headers("Authorization")?.replace("Bearer ", "");
    if (!token) {
      throw new ApiError("Access token is required", 401);
    }
    const decodeToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user = await User.findById(decodeToken._id).select(
      "-password -refreshToken"
    );
    if (!user) {
      throw new ApiError("User not found", 404);
    }
    req.user = user;
    next();
  } catch (error) {
    throw new ApiError("Invalid or expired token", 401);
  }
});
