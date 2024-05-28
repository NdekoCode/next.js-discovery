import { readFile } from 'fs/promises';
import { NextApiRequest, NextApiResponse } from 'next';
import { resolve, sep } from 'path';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const path = resolve(`utils${sep}data${sep}vocabulary.json`);
    const data = await readFile(path, { encoding: "utf-8" });
    return res.status(200).json(JSON.parse(data));
  }
}
