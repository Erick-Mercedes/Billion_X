import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const countries = [
    "United States",
    "Canada",
    "Mexico",
    "Germany",
    "France",
    "Australia",
    "Brazil",
    "India",
    "China",
    "Japan"
  ];

  res.status(200).json(countries);
}
