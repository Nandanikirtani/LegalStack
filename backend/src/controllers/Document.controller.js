import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Document } from "../models/Document.model.js";
import { apiResponse } from "../utils/apiResponse.js";
import { uploadOnCloudinary } from "../utils/Cloudinary.js";
import { User } from "../models/User.model.js";

const createDocument = asyncHandler(async (req, res) => {
  //get data from frontend
  const documentLocalPath = req.files?.document[0].path;
  const file = req.files.document[0];

  //validate document
  if (!documentLocalPath) {
    throw new ApiError("Document is required", 400);
  }
  if (!documentLocalPath.endsWith(".pdf")) {
    throw new ApiError("Only PDF documents are allowed", 400);
  }
  if (req.files.document[0].size > 16 * 1024 * 1024) {
    //16MB
    throw new ApiError("Document size should be less than 16MB", 400);
  }

  //upload on cloudinary
  const cloudinaryResponse = await uploadOnCloudinary(documentLocalPath);
  if (!cloudinaryResponse) {
    throw new ApiError("Document upload failed", 500);
  }
  //Delete document from local storage
  //upload document to database
  const newDoc = await Document.create({
    // uploadedBy: req.user?._id || null, // If user is logged in
    fileName: file.originalname,
    fileUrl: cloudinaryResponse.secure_url,
    fileType: file.mimetype,
  });
  //return response
    if (!newDoc) {
        throw new ApiError("Document creation failed", 500);
    }
    return res.status(201).json( 
        new apiResponse(201, newDoc, "Document created successfully")
    );

});

export { createDocument };
