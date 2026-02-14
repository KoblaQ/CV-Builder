import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

function getEnvVariable(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Environment variable: ${name} is missing`);
  }
  return value;
}

export const PORT = getEnvVariable('PORT');
export const MONGODB_URI = getEnvVariable('MONGODB_URI');

export const connectDB = async (dbName: string) => {
  try {
    await mongoose.connect(dbName);
    console.log('Connected to MongoDB');
  } catch (error: unknown) {
    console.log('MongoDB connection error:', error);
    process.exit(1); // Exit the process with an error code
  }
};
