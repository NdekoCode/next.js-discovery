import { NextApiRequest, NextApiResponse } from 'next';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

import { IComment } from '../../../utils/types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    console.log("Body", req.query);
    const id = req.query.eventId;
    if (id) {
      const path = join(process.cwd(), "utils", "data", "comments.json");
      const data = await readFile(path, {
        encoding: "utf-8",
      });
      console.log(data);
      const comments = JSON.parse(data) as IComment[];
      const commentData = comments.filter((e) => e.eventId === id);
      if (commentData) {
        return res.status(200).json(commentData);
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
