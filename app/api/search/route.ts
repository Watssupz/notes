import { sources } from '@/lib/source';
import { createSearchAPI } from 'fumadocs-core/search/server';

export const revalidate = false;

export const { staticGET: GET } = createSearchAPI('advanced', {
  indexes: async () => {
    const indexes: any[] = [];
    for (const [tag, source] of Object.entries(sources)) {
      for (const page of source.getPages()) {
        let structuredData = page.data.structuredData;
        if (typeof (structuredData as unknown) === 'function') {
          structuredData = await (structuredData as unknown as () => Promise<any>)();
        } else if (!structuredData && 'load' in page.data && typeof (page.data as any).load === 'function') {
          structuredData = (await (page.data as any).load()).structuredData;
        }

        indexes.push({
          id: page.url,
          title: page.data.title,
          description: page.data.description,
          url: page.url,
          tag,
          structuredData,
        });
      }
    }
    return indexes;
  },
});

