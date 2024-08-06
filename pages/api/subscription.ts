import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const email = req.body.email || "";
    if (email) {
      console.log("User is subscribe");
      return res.status(201).json({
        message: "User subscription successfully completed",
        status: 201,
      });
    }
    return res.status(403).json({
      message: "User subscription failed",
      status: 403,
    });
  }

  return res.status(403).json({
    message: "Add an appropriate HTTP method",
    status: 403,
  });
}
