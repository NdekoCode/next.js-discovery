import { NextApiRequest, NextApiResponse } from 'next';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

import { Event } from '../../../utils/types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const path = join(process.cwd(), "utils", "data", "events.json");
    const data = await readFile(path, {
      encoding: "utf-8",
    });
    const { events } = JSON.parse(data) as { events: Event[] };
    return res.status(200).json(events);
  }
}
