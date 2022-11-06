/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextApiRequest, NextApiResponse } from 'next';

export function sortKeys<T>(data: T) {
  return Object.keys(data)
    .sort((a, b) => a.localeCompare(b))
    .reduce(
      (result: any, k) => ({
        ...result,
        [k]: (data as any)[k],
      }),
      {}
    ) as T;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: Function) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}
