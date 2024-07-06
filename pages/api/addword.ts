import { readFile, writeFile } from 'fs/promises';
import { NextApiRequest, NextApiResponse } from 'next';
import { resolve, sep } from 'path';

import { ITranslation } from '../../utils/types';

interface NextRequestLang extends NextApiRequest {
  body: ITranslation;
}
export default async function handler(
  req: NextRequestLang,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const path = resolve(`utils${sep}data${sep}vocabulary.json`);
    const data = await readFile(path, {
      encoding: "utf-8",
    });

    const englishPath = resolve(`utils${sep}data${sep}english.json`);
    const englishData = await readFile(englishPath, { encoding: "utf-8" });
    const englishParseData = JSON.parse(englishData);
    const parseData = JSON.parse(data) as {
      vocabulary: ITranslation[];
    };
    console.log(parseData);
    console.log(req.body);
    parseData.vocabulary.push(req.body);
    englishParseData.englishList[0].words.push(req.body);
    await writeFile(path, JSON.stringify(parseData, null, 2));
    await writeFile(englishPath, JSON.stringify(englishParseData, null, 2));
    return res.status(201).json(parseData);
  }
}
