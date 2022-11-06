export function truncate(length: number, str?: string) {
  if (!str) return null;
  return `${str.slice(0, length)}${str.length > length ? '...' : ''}`;
}
