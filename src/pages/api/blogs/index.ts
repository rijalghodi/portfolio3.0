import { NextApiRequest, NextApiResponse } from 'next';

import { fetchBlogs } from '@/utils/server/get-notion-blog';

// pages/api/blogs.js

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  try {
    const { page_size, start_cursor } = req.query;
    const response = await fetchBlogs({
      page_size: page_size ? Number(page_size) : undefined,
      start_cursor: start_cursor ? String(start_cursor) : undefined,
    });

    res.status(200).send(response);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch blogs' });
  }
}
