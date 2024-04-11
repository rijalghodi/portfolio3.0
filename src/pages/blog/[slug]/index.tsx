// app/blog/[slug]/page.tsx

import { Box, Group, Stack, Title } from '@mantine/core';
import { Text } from '@mantine/core';
import bookmarkPlugin from '@notion-render/bookmark-plugin';
import { NotionRenderer } from '@notion-render/client';
//Plugins
import hljsPlugin from '@notion-render/hljs-plugin';
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { IconClock } from '@tabler/icons-react';
import dayjs from 'dayjs';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { notFound } from 'next/navigation';

import { DefaultLayout } from '@/components';
import Breadcrumbs from '@/components/ui/layouts/DefaultLayout/parts/Breadcrumbs';

import { useTypoStyles } from '@/styles';
import { notion } from '@/utils/server/notion';
import {
  fetchBlogBlocks,
  fetchBlogBySlug,
  fetchBlogs,
} from '@/utils/server/notion-blog';

type Params = {
  slug: string;
};

type Props = {
  data: PageObjectResponse | undefined;
  html: string;
};

export default function BlogDetailPage({ data, html }: Props) {
  const { classes: typo } = useTypoStyles();

  const title = (data?.properties.title as any).title
    ?.map((v: any) => v.plain_text)
    .join(' ');

  if (!data) {
    notFound();
  }

  return (
    <>
      <Head>
        <title> {title} | Rijal Ghodi</title>
      </Head>
      <Stack mt="md" spacing="lg">
        <Breadcrumbs
          breadcrumbs={[
            {
              label: 'Home',
              href: '/',
            },
            {
              label: 'Blog',
              href: '/blog',
            },
          ]}
        />
        <Stack spacing="sm">
          <Box>
            <Title order={1} mb="xs">
              {title}
            </Title>
            <Group spacing={8}>
              <IconClock size={14} />
              <Text className={typo.bodySm}>
                {dayjs(data.last_edited_time).format('MMM DD, YYYY')}
              </Text>
            </Group>
          </Box>
          <div dangerouslySetInnerHTML={{ __html: html }}></div>
        </Stack>
      </Stack>
    </>
  );
}

BlogDetailPage.getLayout = function getLayout(page: React.ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

// This function gets called at build time
export async function getStaticPaths() {
  const response = await fetchBlogs({});

  const slugs = response.results.map(
    ({ properties }: any) => (properties.slug as any).rich_text[0].plain_text,
  );

  const paths = slugs.map((slug) => ({
    params: { slug },
  }));

  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps<Props, Params> = async (
  context,
) => {
  const { params } = context;

  const { slug } = params as Params;

  const data = await fetchBlogBySlug(slug as string);

  let html = '';

  if (data) {
    const blocks = await fetchBlogBlocks(data.id);

    const notionRenderer = new NotionRenderer({
      client: notion,
    });

    notionRenderer.use(hljsPlugin({}));
    notionRenderer.use(bookmarkPlugin(undefined));
    html = await notionRenderer.render(...blocks);
  }

  return {
    props: {
      data,
      html,
    },
    revalidate: 60 * 20, // Re-generate page every 20 minutes
  };
};
