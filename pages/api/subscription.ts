import { MongoClient } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

import { isValidEmail } from '../../lib/utils';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const email = req.body.email || "";
    if (!email || !isValidEmail(email)) {
      return res.status(422).json({
        message: "Email not valid, subscription failed",
        status: 422,
      });
    }
    const mongoURL = process.env.NEXT_MONGO_DB_URL;
    const client = await MongoClient.connect(mongoURL!);

    const db = client.db("nextjs-discovery");
   await db.collection("newsletter").insertOne({
      email,
    });
    await client.close();
    return res.status(201).json({
      message: "User subscription successfully completed",
      status: 201,
    });
  }
}
