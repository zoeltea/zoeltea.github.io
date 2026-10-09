import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const notes = await getCollection('notes');
  return rss({
    title: 'Zul Yatman — Engineering Notes & Architecture Deep Dives',
    description: 'Technical essays, systems architecture reflections, and testing post-mortems by Zul Yatman.',
    site: context.site || 'https://zoeltea.github.io',
    items: notes.map((note) => ({
      title: note.data.title,
      pubDate: note.data.pubDate,
      description: note.data.description,
      link: `/notes/${note.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
