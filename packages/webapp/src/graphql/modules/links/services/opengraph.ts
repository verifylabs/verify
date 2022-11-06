import scrape from 'html-metadata';
import cache from 'memory-cache';

const ONE_WEEK = 604_800_000;

export async function opengraph(url: string) {
  const cachedResult = cache.get(url);
  if (cachedResult) return cachedResult;

  const data = await scrape(url);
  const parsed = {
    title: data.general.title,
    description: data.general.description,
    image: data.openGraph.image,
  };

  cache.put(url, parsed, ONE_WEEK);
  return parsed;
}
