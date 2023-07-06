import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    console.log("READY TO CONNECT");
    await mongoose.connect(
      "mongodb://abbas:Fkoi3CIZxbDxKJWw@ac-ztkqnvi-shard-00-00.whoksax.mongodb.net:27017,ac-ztkqnvi-shard-00-01.whoksax.mongodb.net:27017,ac-ztkqnvi-shard-00-02.whoksax.mongodb.net:27017/multy_shop?ssl=true&replicaSet=atlas-ifmze4-shard-0&authSource=admin&retryWrites=true&w=majority"
    );
    console.log("CONNECT DB>>>>>>>>>>");
  } catch (error) {
    console.error(error);
  }
};
