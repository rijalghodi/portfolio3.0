import {
  BlockObjectResponse,
  PageObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';

// import 'server-only';
import { notionHqApi } from './notion';

type MetaRequest = {
  page_size?: number;
  start_cursor?: string;
};

export const fetchBlogs = ({
  page_size,
  start_cursor = undefined,
}: MetaRequest) => {
  return notionHqApi.databases.query({
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
  return notionHqApi.databases
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
  return notionHqApi.blocks.children
    .list({ block_id: pageId })
    .then((res) => res.results as BlockObjectResponse[]);
};
