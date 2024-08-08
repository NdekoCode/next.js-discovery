import { MongoClient } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    console.log("Body", req.query);
    const id = req.query.eventId;
    if (id) {
      const MONGO_URL = process.env.NEXT_MONGO_DB_URL!;
      const client = await MongoClient.connect(MONGO_URL);
      const db = client.db("nextjs-discovery");
      const comments = await db
        .collection("comments")
        .find({ eventId: id })
        .toArray();
      console.log(comments);
      if (comments) {
        return res.status(200).json(comments);
      }

      return res.status(404).json({
        message: `Comment ${id} Not found`,
        status: 404,
      });
    }
    return res.status(404).json({
      message: `Comment Not found`,
      status: 404,
    });
  }
}
