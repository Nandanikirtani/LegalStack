import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js";
import { User } from "../models/User.model.js";
import { apiResponse } from "../utils/apiResponse.js";

const registerUser = asyncHandler(async (req, res) => {
  //get data from frontend
  const { name, email, password, role } = req.body;
  console.log(name);

  //validation
  if ([name, email, password, role].some((field) => field.trim() === "")) {
    throw new ApiError("All fields are required", 400);
  }

  if (
    !email ||
    !email.includes("@") ||
    email.startsWith("@") ||
    email.endsWith("@")
  ) {
    throw new ApiError(400, "Enter a valid email");
  }

  //check if user already exists
  const existedUser= await User.findOne({email})
  if(existedUser) {
    throw new ApiError("User already exists", 400);
  }

  //Make object to save in database

    const user = await User.create({
        name,
        email,
        password,
        role
    });

    //remove password and refreshToken from the response
    const createdUser = await User.findById(user._id).select("-password -refreshToken");

    if(!createdUser) {
        throw new ApiError("User registration failed", 500);
    }     
    
    //send response
    return res.status(201).json(
        new apiResponse(200,createdUser, "User registered successfully")
    )
});

export { registerUser };
