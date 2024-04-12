import { Client } from '@notionhq/client';
import { NotionAPI } from 'notion-client';

export const notionHqApi = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const notionXApi = new NotionAPI({
  authToken: process.env.NOTION_TOKEN_V2,
  activeUser: process.env.NOTION_USER_ID,
});
