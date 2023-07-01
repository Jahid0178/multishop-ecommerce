import mongoose, { Document, Schema } from "mongoose";

interface User extends Document {
  email: string;
  name: string;
  password: string;
}

const UserSchema = new Schema<User>({
  email: { type: String, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
});

export const UserModel =
  mongoose.models.User || mongoose.model<User>("User", UserSchema);
