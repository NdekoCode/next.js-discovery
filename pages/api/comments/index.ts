import { MongoClient } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

import { IComment } from '../../../utils/types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const path = join(process.cwd(), "utils", "data", "comments.json");
  const data = await readFile(path, {
    encoding: "utf-8",
  });
  const comments = JSON.parse(data) as IComment[];
  if (req.method === "GET") {
    return res.status(200).json(comments);
  } else if (req.method === "POST") {
    const comment = req.body.comment as IComment;
    if (comment) {
      const MONGO_URL = process.env.NEXT_MONGO_DB_URL!;
      const client = await MongoClient.connect(MONGO_URL);
      const db = client.db("nextjs-discovery");
      db.collection("comments").insertOne(comment);
      return res.status(201).json({
        message: "Comment add successfully",
        status: 201,
      });
    }
  }
}
