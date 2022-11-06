import { randomBytes } from 'crypto';

function generateLink() {
  const random = randomBytes(6);
  return random.toString('hex');
}

export function createData(address: string, url: string) {
  return {
    address,
    redirect: url.startsWith('https://') ? url : `https://${url}`,
    short: generateLink(),
  };
}
