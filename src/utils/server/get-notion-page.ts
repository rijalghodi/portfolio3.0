import { ExtendedRecordMap } from 'notion-types';

import { notionXApi } from './notion';

export async function getNotionPage(
  pageId: string,
): Promise<ExtendedRecordMap> {
  const recordMap = await notionXApi.getPage(pageId);
  return recordMap;
}
