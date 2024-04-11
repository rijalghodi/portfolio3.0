// app/blog/[slug]/page.tsx

import { Group, Stack, Title } from '@mantine/core';
import { Text } from '@mantine/core';
import bookmarkPlugin from '@notion-render/bookmark-plugin';
import { NotionRenderer } from '@notion-render/client';
//Plugins
import hljsPlugin from '@notion-render/hljs-plugin';
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { IconClock } from '@tabler/icons-react';
import dayjs from 'dayjs';
import { GetServerSideProps } from 'next';
import { notFound } from 'next/navigation';

import { DefaultLayout } from '@/components';

import { useTypoStyles } from '@/styles';
import { notion } from '@/utils/server/notion';
import { fetchBlogBlocks, fetchBlogBySlug } from '@/utils/server/notion-blog';

type Params = {
  slug: string;
};

type Props = {
  data: PageObjectResponse | undefined;
  html: string;
};

export default function BlogDetailPage({ data, html }: Props) {
  const { classes: typo } = useTypoStyles();
  if (!data) {
    notFound();
  }

  return (
    <Stack>
      <Title>
        {(data?.properties.title as any).title
          ?.map((v: any) => v.plain_text)
          .join(' ')}
      </Title>
      <Group spacing={8}>
        <IconClock size={14} />
        <Text className={typo.bodySm}>
          {dayjs(data.last_edited_time).format('MMM DD, YYYY')}
        </Text>
      </Group>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </Stack>
  );
}

BlogDetailPage.getLayout = function getLayout(page: React.ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export const getServerSideProps: GetServerSideProps<Props, Params> = async (
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
  };
};
