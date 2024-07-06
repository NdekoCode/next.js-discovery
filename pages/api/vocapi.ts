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
    const parseData = JSON.parse(data) as {
      vocabulary: { en: string; fr: string }[];
    };
    console.log(parseData);
    return res
      .status(200)
      .json(
        parseData.vocabulary[
          parseInt((Math.random() * parseData.vocabulary.length).toString())
        ]
      );
  }
}
