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

import {
  useShadowStyles,
  useTransformationnStyles,
  useTypoStyles,
} from '@/styles';

export function Experience() {
  const { classes: shadows } = useShadowStyles();
  const { colorScheme } = useMantineColorScheme();
  const { cx, classes: typo } = useTypoStyles();
  const { classes: transformation } = useTransformationnStyles();
  const theme = useMantineTheme();

  return (
    <SectionWrapper title="My Work Experience">
      <ul>
        <Grid gutter="xs" gutterMd="md">
          {experiences.slice(0, 4).map((v, i) => (
            <Grid.Col key={i} span={12} sm={6}>
              <li>
                <Paper
                  className={cx(
                    transformation.hoverUpTransformation,
                    shadows.hoveredDefaultShadow,
                  )}
                  bg={
                    colorScheme === 'dark'
                      ? theme.colors.dark[5]
                      : theme.colors.neutral[1]
                  }
                  p="sm"
                >
                  <Image
                    src={v.logo ?? '/next.svg'}
                    alt="company logo"
                    width={50}
                    height={50}
                    radius={1000}
                    fit="contain"
                  />
                  <Box mb="xs">
                    <Title order={2} className={typo.heading4} mb={8}>
                      {v.position}
                    </Title>
                    <Box mb="xs">
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
                        <Text className={typo.bodySm} mb="sm" span>
                          {v.company}
                        </Text>
                      )}{' '}
                      <IconPointFilled size={10} />{' '}
                      <Text className={typo.bodySm} span>
                        {v.experienceCategory}
                      </Text>
                    </Box>
                  </Box>
                  <Text className={typo.bodySm} mb="sm">
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
