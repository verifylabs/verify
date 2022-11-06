import { urlJoin } from "url-join-ts";

const { NEXT_PUBLIC_VERIFY_DOMAIN } = process.env;

export function verifyUrl(...paths: string[]) {
  return urlJoin(NEXT_PUBLIC_VERIFY_DOMAIN, ...paths);
}
