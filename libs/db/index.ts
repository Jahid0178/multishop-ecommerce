import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    console.log("READY TO CONNECT");
    await mongoose.connect(process.env.MONGODB_URI ?? "");
    console.log("CONNECT DB>>>>>>>>>>");
  } catch (error) {
    console.error(error);
  }
};
