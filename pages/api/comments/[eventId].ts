import { NextApiRequest, NextApiResponse } from 'next';

import { connectDB } from '../../../lib/db';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    console.log("Body", req.query);
    const id = req.query.eventId;
    if (id) {
      const result = await connectDB("comments");
      if (result) {
        const { client, mongoCollection } = result;
        const comments = await mongoCollection
          .find({ eventId: id })
          .sort({ _id: -1 })
          .toArray();
        client.close();
        console.log(comments);
        if (comments) {
          return res.status(200).json(comments);
        }
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
