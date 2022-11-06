import type { NextApiRequest, NextApiResponse } from 'next';

export interface Context {
  req: NextApiRequest;
  res: NextApiResponse;
}

interface Params {
  req: NextApiRequest;
  res: NextApiResponse;
}

export function createContext({ req, res }: Params) {
  return {
    req,
    res,
  };
}
