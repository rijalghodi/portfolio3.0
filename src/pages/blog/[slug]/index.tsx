// app/blog/[slug]/page.tsx

import { Box, Group, Stack, Title, useMantineColorScheme } from '@mantine/core';
import { Text } from '@mantine/core';
import bookmarkPlugin from '@notion-render/bookmark-plugin';
import { NotionRenderer } from '@notion-render/client';
//Plugins
import hljsPlugin from '@notion-render/hljs-plugin';
import { IconClock } from '@tabler/icons-react';
import dayjs from 'dayjs';
import hljs from 'highlight.js';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { notFound } from 'next/navigation';
import { useEffect } from 'react';

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
  data: {
    title?: string;
    last_edited_time?: string;
  };
  html: string;
};

export default function BlogDetailPage({ data, html }: Props) {
  const { classes: typo } = useTypoStyles();
  const { colorScheme } = useMantineColorScheme();

  useEffect(() => {
    const themeLink = document.querySelector('#highlight-theme-link');
    if (colorScheme === 'dark') {
      themeLink?.setAttribute('href', 'obsidian.css');
    } else {
      themeLink?.setAttribute('href', 'github.css');
    }

    hljs.highlightAll();
  }, [colorScheme]);

  if (!data) {
    notFound();
  }

  return (
    <>
      <Head>
        <title>{data?.title} | Rijal Ghodi</title>
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
              {data.title}
            </Title>
            <Group spacing={8}>
              <IconClock size={14} />
              <Text className={typo.bodySm}>
                {dayjs(data.last_edited_time).format('MMM DD, YYYY')}
              </Text>
            </Group>
          </Box>
          <div
            className="notion-render"
            dangerouslySetInnerHTML={{ __html: html }}
          ></div>
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
      data: {
        title: (data?.properties.title as any).title
          ?.map((v: any) => v.plain_text)
          .join(' '),
        last_edited_time: data?.last_edited_time ?? '',
      },
      html,
    },
    revalidate: 60 * 20, // Re-generate page every 20 minutes
  };
};
