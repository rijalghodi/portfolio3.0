// import 'server-only';

import {
  BlockObjectResponse,
  PageObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';

import { notion } from './notion';

type MetaRequest = {
  page_size?: number;
  start_cursor?: string;
};

export const fetchBlogs = ({
  page_size = 1,
  start_cursor = undefined,
}: MetaRequest) => {
  return notion.databases.query({
    database_id: process.env.NOTION_BLOG_DB_ID!,
    filter: {
      property: 'status',
      status: {
        equals: 'Published',
      },
    },
    page_size,
    start_cursor,
  });
};

export const fetchBlogBySlug = async (slug: string) => {
  return notion.databases
    .query({
      database_id: process.env.NOTION_BLOG_DB_ID!,
      filter: {
        property: 'slug',
        rich_text: {
          equals: slug,
        },
      },
    })
    .then((res) => res.results[0] as PageObjectResponse | undefined);
};

export const fetchBlogBlocks = async (pageId: string) => {
  return notion.blocks.children
    .list({ block_id: pageId })
    .then((res) => res.results as BlockObjectResponse[]);
};
