import {
  DatabaseObjectResponse,
  QueryDatabaseResponse,
} from '@notionhq/client/build/src/api-endpoints';

import { apiClient } from './axios';

type GetClientBlogsRequest = {
  page_size?: number;
  start_cursor?: string | null;
};

type GetClientBlogsRequestResponse = Omit<QueryDatabaseResponse, 'results'> & {
  results: Array<DatabaseObjectResponse>;
};

export const readBlogs = async (params: GetClientBlogsRequest) => {
  const response = await apiClient.get<GetClientBlogsRequestResponse>(
    '/api/blogs',
    {
      params,
    },
  );
  return response.data;
};
