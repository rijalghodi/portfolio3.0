import Head from 'next/head';

import { DefaultLayout, EmptyPageMessage } from '@/components';

export default function NotFoundPage() {
  return (
    <>
      <Head>
        <title>Rijal Ghodi | Page Not Found</title>
      </Head>
      <EmptyPageMessage />
    </>
  );
}

NotFoundPage.getLayout = function getLayout(page: React.ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
