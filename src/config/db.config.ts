import { ConnectionStringNotFoundError } from "@/errors/connectionStringNotFound.error";
import { DBConnectionError } from "@/errors/dbConnection.error";
import dotenv from 'dotenv';
import mongoose from "mongoose";

// Running dotend listening
dotenv.config();

const connectionString = process.env.MONGO_URI;

if (!connectionString) throw new ConnectionStringNotFoundError();

export const connectDB = async (): Promise<void> => {
    try {
        await mongoose.connect(connectionString);
    } catch (error) {
        throw new DBConnectionError(error);
    }
}