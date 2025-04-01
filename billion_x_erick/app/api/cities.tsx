import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { country, region } = req.query;

  if (!country || !region) {
    res.status(400).json({ error: "Country and region are required" });
    return;
  }

  let cities: string[] = [];

  if (country === 'United States' && region === 'California') {
    cities = ["Los Angeles", "San Francisco", "San Diego", "Sacramento", "Fresno"];
  } else if (country === 'Canada' && region === 'Ontario') {
    cities = ["Toronto", "Ottawa", "Hamilton", "London", "Mississauga"];
  } else if (country === 'Mexico' && region === 'Jalisco') {
    cities = ["Guadalajara", "Puerto Vallarta", "Zapopan", "Tlaquepaque", "Tlajomulco"];
  }

  res.status(200).json(cities);
}
