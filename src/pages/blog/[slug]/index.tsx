// app/blog/[slug]/page.tsx

import {
  Divider,
  Group,
  Stack,
  Title,
  useMantineColorScheme,
} from '@mantine/core';
import { Text } from '@mantine/core';
//Plugins
import { IconCalendar } from '@tabler/icons-react';
import dayjs from 'dayjs';
import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ExtendedRecordMap } from 'notion-types';
import { NotionRenderer as NotionXRenderer } from 'react-notion-x';

import { DefaultLayout } from '@/components';
import Breadcrumbs from '@/components/ui/layouts/DefaultLayout/parts/Breadcrumbs';

import { useTypoStyles } from '@/styles';
import { fetchBlogBySlug, fetchBlogs } from '@/utils/server/get-notion-blog';
import { getNotionPage } from '@/utils/server/get-notion-page';

const Code = dynamic(() =>
  import('react-notion-x/build/third-party/code').then(async (m) => {
    // add / remove any prism syntaxes here
    await Promise.allSettled([
      import('prismjs/components/prism-bash.js'),
      import('prismjs/components/prism-c.js'),
      import('prismjs/components/prism-cpp.js'),
      import('prismjs/components/prism-docker.js'),
      import('prismjs/components/prism-java.js'),
      import('prismjs/components/prism-js-templates.js'),
      import('prismjs/components/prism-git.js'),
      import('prismjs/components/prism-go.js'),
      import('prismjs/components/prism-graphql.js'),
      import('prismjs/components/prism-markdown.js'),
      import('prismjs/components/prism-python.js'),
      import('prismjs/components/prism-rust.js'),
      import('prismjs/components/prism-sass.js'),
      import('prismjs/components/prism-scss.js'),
      import('prismjs/components/prism-sql.js'),
      import('prismjs/components/prism-yaml.js'),
    ]);
    return m.Code;
  }),
);

const Equation = dynamic(() =>
  import('react-notion-x/build/third-party/equation').then((m) => m.Equation),
);

type Params = {
  slug: string;
};

type Props = {
  data: {
    title?: string;
    last_edited_time?: string;
  };
  recordMap: ExtendedRecordMap | null;
};

export default function BlogDetailPage({ data, recordMap }: Props) {
  const { classes: typo } = useTypoStyles();
  const { colorScheme } = useMantineColorScheme();

  if (!data) {
    notFound();
  }

  return (
    <>
      <Head>
        <title>{data?.title} | Rijal Ghodi</title>
      </Head>
      <Stack mt="lg" spacing="xs">
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
        <Stack spacing="xs">
          <Title order={1} className={typo.heading0} fw={600} mb="xl" mt="xl">
            {data.title}
          </Title>
          <Divider></Divider>
          <Group spacing={8}>
            <IconCalendar size={16} />
            <Text className={typo.bodySm}>
              {dayjs(data.last_edited_time).format('MMM DD, YYYY')}
            </Text>
          </Group>
          <Divider></Divider>
        </Stack>
        {recordMap && (
          <NotionXRenderer
            showTableOfContents={true}
            recordMap={recordMap}
            fullPage={false}
            darkMode={colorScheme === 'dark'}
            minTableOfContentsItems={3}
            components={{
              Code,
              Equation,
              nextImage: Image,
              nextLink: Link,
            }}
          />
        )}
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

  let recordMap: ExtendedRecordMap | null = null;

  if (data) {
    recordMap = await getNotionPage(data.id);
  }

  return {
    props: {
      data: {
        title: (data?.properties.title as any).title
          ?.map((v: any) => v.plain_text)
          .join(' '),
        last_edited_time: data?.last_edited_time ?? '',
      },
      recordMap,
    },
    revalidate: 60 * 5, // Re-generate page every 5 minutes
  };
};
