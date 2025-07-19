import { asyncHandler } from "../utils/asyncHandler.js";
import apiError from "../utils/apiError.js";
import { User } from "../models/User.model.js";
import { apiResponse } from "../utils/apiResponse.js";

const registerUser = asyncHandler(async (req, res) => {
  //get data from frontend
  const { name, email, password, role } = req.body;
  console.log(name);

  //validation
  if ([name, email, password, role].some((field) => field.trim() === "")) {
    throw new apiError("All fields are required", 400);
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
  const existedUser=User.findOne({email})
  if(existedUser) {
    throw new apiError("User already exists", 400);
  }

  //Make object to save in database

    const user = await new User({
        name,
        email,
        password,
        role
    });

    //remove password and refreshToken from the response
    const createdUser = await user.findById(user._id).select("-password -refreshToken");

    if(!createdUser) {
        throw new apiError("User registration failed", 500);
    }     
    
    //send response
    return res.status(201).json(
        new apiResponse(200,createdUser, "User registered successfully")
    )
});

export { registerUser };
