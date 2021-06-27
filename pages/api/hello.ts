// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === "POST") {
    //@ts-expect-error
    res.status(200).json({ name: process.env.API_KEY });
  } else {
    res.status(200).json({ name: "John Doe" });
  }
};
