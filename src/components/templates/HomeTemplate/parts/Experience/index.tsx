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
import React from 'react';

import { experiences } from '@/data';

import { SectionWrapper } from '@/components';

import { useTypoStyles } from '@/styles';

export function Experience() {
  const { colorScheme } = useMantineColorScheme();
  const { classes: typo } = useTypoStyles();
  const theme = useMantineTheme();

  return (
    <SectionWrapper title="My Work Experience">
      <ul>
        <Grid gutter="xs" gutterMd="md">
          {experiences.slice(0, 4).map((v, i) => (
            <Grid.Col key={i} span={12} sm={6}>
              <li>
                <Paper
                  bg={
                    colorScheme === 'dark'
                      ? theme.colors.dark[6]
                      : theme.colors.neutral[0]
                  }
                  p="md"
                  shadow="sm"
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
                  <Box my="xs">
                    <Title order={2} className={typo.heading4} mb={8}>
                      {v.position}
                    </Title>
                    <Box mb="xs">
                      {v.companyLink ? (
                        <Link href={v.companyLink}>
                          <Text
                            className={typo.bodyMd}
                            sx={{ '&:hover': { textDecoration: 'underline' } }}
                            span
                          >
                            {v.company}
                          </Text>
                        </Link>
                      ) : (
                        <Text className={typo.bodyMd} mb="sm" span>
                          {v.company}
                        </Text>
                      )}{' '}
                      <IconPointFilled size={10} />{' '}
                      <Text className={typo.bodyMd} span>
                        {v.experienceCategory}
                      </Text>
                    </Box>
                  </Box>
                  <Text className={typo.bodyMd} mb="sm">
                    {v.shortDesc}
                  </Text>
                </Paper>
              </li>
            </Grid.Col>
          ))}
        </Grid>
      </ul>
    </SectionWrapper>
  );
}
