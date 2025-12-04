import mongoose from "mongoose";

const ConnectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("database connected successfully");
  } catch (err) {
    console.log(err);
  }
};

export default ConnectDatabase;
