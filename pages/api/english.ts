import { readFile } from 'fs/promises';
import { NextApiRequest, NextApiResponse } from 'next';
import { resolve, sep } from 'path';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const path = resolve(`utils${sep}data${sep}english.json`);
    const data = await readFile(path, { encoding: "utf-8" });
    const parseData = JSON.parse(data);
    console.log(parseData);
    return res.status(200).json(parseData);
  }
}
