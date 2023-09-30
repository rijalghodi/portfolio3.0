import Head from 'next/head';

import { DefaultLayout } from '@/components';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>ZalCode | Home</title>
      </Head>
    </>
  );
}

HomePage.getLayout = function getLayout(page: React.ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
