import Head from 'next/head';

import { ComingSoonPageMessage, DefaultLayout } from '@/components';

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Rijal Ghodi | Blog</title>
      </Head>
      <ComingSoonPageMessage />
    </>
  );
}

BlogPage.getLayout = function getLayout(page: React.ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
