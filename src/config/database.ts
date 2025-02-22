import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const mongoURI = process.env.MONGO_URI || "mongodb+srv://sumitbaudh2205:yUkHfLNv5DWsz6zy@sarakari-tender.neegz.mongodb.net/scrapper?retryWrites=true&w=majority&appName=sarakari-tender";

export const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            
            serverSelectionTimeoutMS: 5000, // ✅ Timeout fix
        });
        console.log("✅ Connected to MongoDB");
    } catch (error) {
        console.error("❌ MongoDB Connection Error:", error);
        process.exit(1);
    }
};
