import Head from 'next/head';

import { DefaultLayout, HomeTemplate } from '@/components';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>ZalCode | Home</title>
      </Head>
      <HomeTemplate />
    </>
  );
}

HomePage.getLayout = function getLayout(page: React.ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
