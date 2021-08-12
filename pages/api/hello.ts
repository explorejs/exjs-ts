// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  console.log(req.query)
  const hasAnimal = req.query["animal"]

  if(hasAnimal){
    send other mailchimp
  }
  // if (req.method === "POST") {
  //   //@ts-expect-error
  //   res.status(200).json({ name: process.env.API_KEY });
  // } else {
    res.status(200).json({ name: JSON.stringify(req.query) });
  // }
};
