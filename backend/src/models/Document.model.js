import mongoose, { Schema } from "mongoose";

const documentSchema = new Schema({
  // uploadedBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
  fileName: { type: String, required: true },
  fileUrl: { type: String, required: true },
  uploadDate: { type: Date, default: Date.now },
});

export const Document = mongoose.model("Document", documentSchema);
