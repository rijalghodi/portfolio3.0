// pages/api/blog/[id].js

import { NextApiRequest, NextApiResponse } from 'next';

import { fetchBlogBySlug } from '@/utils/server/notion-blog';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  // Extract the id parameter from the request
  const { slug } = req.query;

  // Assuming you have a function to fetch the blog post by ID
  const blogPost = fetchBlogBySlug(slug as string);

  if (!blogPost) {
    return res.status(404).json({ message: 'Blog post not found' });
  }

  // If the blog post is found, send it as the response
  res.status(200).json(blogPost);
}
