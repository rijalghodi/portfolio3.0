import Head from 'next/head';

import { DefaultLayout, ProjectTemplate } from '@/components';

export default function ProjectPage() {
  return (
    <>
      <Head>
        <title>Rijal Ghodi | Projects</title>
      </Head>
      <ProjectTemplate />
    </>
  );
}

ProjectPage.getLayout = function getLayout(page: React.ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
