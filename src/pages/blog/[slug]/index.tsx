// app/blog/[slug]/page.tsx

import { notFound } from 'next/navigation';

import { fetchPageBySlug } from '@/utils/server/notion-blog';

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await fetchPageBySlug(params.slug);
  if (!post) notFound();

  return <>Hello</>;
}

// export async function getServerSideProps(params: { params: { slug: string } }) {
//   try {
//     const post = await fetchPageBySlug(params.slug);

//     const blogs = post?.data?.results;

//     return {
//       props: {
//         blogs,
//       },
//     };
//   } catch (error) {
//     return {
//       props: {
//         blogs: [],
//       },
//     };
//   }
// }
