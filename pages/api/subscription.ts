import { NextApiRequest, NextApiResponse } from 'next';

import { connectDB } from '../../lib/db';
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

    const result = await connectDB("newsletter");
    if (result) {
      const { client, mongoCollection } = result;
      await mongoCollection.insertOne({
        email,
      });
      await client.close();
      return res.status(201).json({
        message: "User subscription successfully completed",
        status: 201,
      });
    }

    return res.status(403).json({
      message: "Email not valid, subscription failed (Bad request)",
      status: 403,
    });
  }
}
