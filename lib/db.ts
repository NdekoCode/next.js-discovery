import { MongoClient } from 'mongodb';

export const connectDB = async (collectionName: string) => {
  const MONGO_URL = process.env.NEXT_MONGO_DB_URL!;
  try {
    const client = await MongoClient.connect(MONGO_URL);
    const db = client.db("nextjs-discovery");
    const mongoCollection = db.collection(collectionName);
    return { client, mongoCollection };
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
};
