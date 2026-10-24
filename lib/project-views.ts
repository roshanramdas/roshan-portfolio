import { Redis } from "@upstash/redis";

export async function getProjectViews(
  slugs: string[],
): Promise<Record<string, number>> {
  if (slugs.length === 0) {
    return {};
  }

  try {
    const values = await Redis.fromEnv().mget<number[]>(
      ...slugs.map((slug) => ["pageviews", "projects", slug].join(":")),
    );

    return slugs.reduce<Record<string, number>>((views, slug, index) => {
      views[slug] = values[index] ?? 0;
      return views;
    }, {});
  } catch (error) {
    console.error(
      "Failed to load project view counts from Redis; using zero counts.",
      error,
    );

    return slugs.reduce<Record<string, number>>((views, slug) => {
      views[slug] = 0;
      return views;
    }, {});
  }
}
