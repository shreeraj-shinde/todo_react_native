import mongoose from "mongoose";

export const connectDatabase = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("Database Connected : ", connection.host);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
