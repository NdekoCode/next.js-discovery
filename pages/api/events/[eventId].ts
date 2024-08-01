import { NextApiRequest, NextApiResponse } from 'next';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

import { Event } from '../../../utils/types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    console.log("Body", req.query);
    const id = req.query.eventId;
    if (id) {
      const path = join(process.cwd(), "utils", "data", "events.json");
      const data = await readFile(path, {
        encoding: "utf-8",
      });
      const { events } = JSON.parse(data) as { events: Event[] };
      const event = events.find((e) => e.id === id);
      if (event) {
        return res.status(200).json(event);
      }

      return res.status(404).json({
        message: `Event ${id} Not found`,
      });
    }
    return res.status(404).json({
      message: `Event Not found`,
    });
  }
}
