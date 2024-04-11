import Head from 'next/head';

import { DefaultLayout } from '@/components';
import { BlogListTemplate } from '@/components/templates/BlogListTemplate';

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Rijal Ghodi | Blog</title>
      </Head>

      <BlogListTemplate />
    </>
  );
}

BlogPage.getLayout = function getLayout(page: React.ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
