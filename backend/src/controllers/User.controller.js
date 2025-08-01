import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js";
import { User } from "../models/User.model.js";
import { apiResponse } from "../utils/apiResponse.js";
import jwt from "jsonwebtoken";

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

const generateAccessTokenandRefreshToken = async (userId) => {
  try {
    console.log("Generating tokens for userId:", userId);

    const user = await User.findById(userId);

    if (!user) {
      console.error("User not found for ID:", userId);
      throw new ApiError("User not found while generating tokens", 404);
    }

    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
     console.error(error);
    console.error("Token generation error:", error);
    throw new ApiError("Token generation failed", 500);
  }
};


const loginUser = asyncHandler(async (req, res) => {
  //Get data from frontend
  const {email,password}=req.body;
  //check if email and password are provided
  if(!email || !password){
    throw new ApiError("All fields are required",400);
  }
  //find user by email
  const user= await User.findOne({email})
  //if user not found 
  if(!user){
    throw new ApiError("User not found",404);
  }
  //password comparison
  const isPasswordValid=await user.isPasswordCorrect(password);
  if(!isPasswordValid){
    throw new ApiError("Invalid password",401);
  }
  //if user found, generate access token and refresh token
  const{accessToken,refreshToken}=await generateAccessTokenandRefreshToken(user._id)
  //send response with user data and tokens
  const loggedInUser = await User.findById(user._id).select("-password -refreshToken");
  const options={
    httpOnly:true,
    secure:true
  }
  return res.status(200)
  .cookie("refreshToken",refreshToken,options)
  .cookie("accessToken",accessToken,options)
  .json(
    new apiResponse(200,loggedInUser,accessToken,refreshToken,"User logged in successfully")
  )

})

const logoutUser = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(req.user._id, { refreshToken: null }, { new: true })
  const options={
    httpOnly:true,
    secure:true
  }
  return res.status(200)
    .cookie("refreshToken",null,options)
    .cookie("accessToken",null,options)
    .json(new apiResponse(200,null,"User logged out successfully"))
})

const refreshAccessToken = asyncHandler(async (req, res) => {
  const  incomingRefreshToken  = req.cookies.refreshToken || req.body.refreshToken;
  if (!incomingRefreshToken) {
    throw new ApiError("Refresh token is required", 401);
  }
  try {
    const decodedToken= jwt.verify(incomingRefreshToken, process.env.REFRESH_TOKEN_SECRET);
    const user = await User.findById(decodedToken._id);
    if(!user) {
      throw new ApiError("User not found", 404);
    }
    if(user.refreshToken !== incomingRefreshToken) {
      throw new ApiError("Invalid refresh token", 401);
    }
    const { accessToken, refreshToken } = await generateAccessTokenandRefreshToken(user._id);
    const options = {
      httpOnly: true,
      secure: true
    };
    return res.status(200)
      .cookie("refreshToken", refreshToken, options)
      .cookie("accessToken", accessToken, options)
      .json(new apiResponse(200, null, accessToken, refreshToken, "Access token refreshed successfully"));
  } catch (error) {
    console.error("Refresh token error:", error);
    throw new ApiError("Failed to refresh access token", 500);
    
  }
});

export { registerUser 
, loginUser,logoutUser, refreshAccessToken
};
