import {
  Box,
  Grid,
  Image,
  Paper,
  Text,
  Title,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import { IconPointFilled } from '@tabler/icons-react';
import Link from 'next/link';

import { experiences } from '@/data';

import { SectionWrapper } from '@/components';

import { useTypoStyles } from '@/styles';

export function Experience() {
  const { colorScheme } = useMantineColorScheme();
  const { classes: typo } = useTypoStyles();
  const theme = useMantineTheme();

  return (
    <SectionWrapper title="My Work Experience">
      <Grid gutter="xs" gutterMd="md">
        {experiences.slice(0, 4).map((v, i) => (
          <Grid.Col key={i} span={12} sm={12}>
            <Paper
              bg={
                colorScheme === 'dark'
                  ? theme.colors.dark[6]
                  : theme.colors.neutral[0]
              }
              p="md"
              shadow="sm"
              withBorder
            >
              {v.logo && (
                <Image
                  src={v.logo}
                  alt="company logo"
                  width={40}
                  height={40}
                  radius={1000}
                  fit="contain"
                />
              )}
              <Box mt="xs" mb={8}>
                <Title order={2} className={typo.heading4} mb={8}>
                  {v.position}
                </Title>
                <Box mb={0}>
                  {v.companyLink ? (
                    <Link href={v.companyLink}>
                      <Text
                        className={typo.bodySm}
                        sx={{ '&:hover': { textDecoration: 'underline' } }}
                        span
                      >
                        {v.company}
                      </Text>
                    </Link>
                  ) : (
                    <Text className={typo.bodySm} span>
                      {v.company}
                    </Text>
                  )}{' '}
                  <IconPointFilled size={10} />{' '}
                  <Text className={typo.bodySm} span>
                    {v.experienceCategory}
                  </Text>
                </Box>
              </Box>
              <Text className={typo.bodySm}>{v.shortDesc}</Text>
            </Paper>
          </Grid.Col>
        ))}
      </Grid>
    </SectionWrapper>
  );
}
