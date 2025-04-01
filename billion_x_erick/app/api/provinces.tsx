import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { country } = req.query;

  if (!country) {
    res.status(400).json({ error: "Country is required" });
    return;
  }

  let provinces: string[] = [];

  switch (country) {
    case 'United States':
      provinces = ["California", "Texas", "New York", "Florida", "Illinois"];
      break;
    case 'Canada':
      provinces = ["Ontario", "Quebec", "British Columbia", "Alberta", "Nova Scotia"];
      break;
    case 'Mexico':
      provinces = ["Jalisco", "CDMX", "Nuevo León", "Chihuahua", "Yucatán"];
      break;
    default:
      provinces = [];
      break;
  }

  res.status(200).json(provinces);
}
