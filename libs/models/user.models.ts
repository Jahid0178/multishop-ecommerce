import mongoose, { Document, Schema } from "mongoose";

export interface UserDocument extends Document {
  name: string;
  email: string;
  password: string;
  role: "user" | "admin" | "merchant";
  picture: string;
}

const UserSchema = new Schema<UserDocument>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["user", "admin", "merchant"],
      default: "user",
    },
    picture: String,
  },
  { timestamps: true }
);

export default mongoose.models.User ||
  mongoose.model<UserDocument>("User", UserSchema);
