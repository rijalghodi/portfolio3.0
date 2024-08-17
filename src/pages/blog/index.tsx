import { Box, Stack, Title } from '@mantine/core';
import Head from 'next/head';

import { DefaultLayout } from '@/components';
import BlogBook from '@/components/templates/BlogListTemplate/parts/BlogBook';

import { useTypoStyles } from '@/styles';

export default function BlogPage() {
  const { classes: typo } = useTypoStyles();

  return (
    <>
      <Head>
        <title>Rijal Ghodi | Blog</title>
      </Head>

      <Stack spacing={64}>
        <Box pt={48}>
          <Title order={1} className={typo.heading2} mb="xl">
            Blog
          </Title>
          <BlogBook />
        </Box>
      </Stack>
    </>
  );
}

BlogPage.getLayout = function getLayout(page: React.ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
