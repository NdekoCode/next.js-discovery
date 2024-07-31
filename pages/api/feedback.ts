import { readFileSync, writeFileSync } from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import { join } from 'path';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const feedback = {
      email: req.body.email || "",
      feedback: req.body.feedback || "",
    };
    const filePath = join(process.cwd(), "utils", "data", "feedback.json");
    const fileData = JSON.parse(
      readFileSync(filePath, {
        encoding: "utf-8",
      })
    );
    fileData.push(feedback);
    writeFileSync(filePath, JSON.stringify(fileData));
    return res.status(201).json({
      message: "Feedback submitted successfully",
      feedback,
    });
  } else {
    return res.status(200).json({ message: "GET request received" });
  }
}
