import { Grid } from '@mantine/core';
import React from 'react';

import { projects } from '@/data';

import { PaperWrapper } from '@/components';
import { ProjectCard } from '@/components/templates/ProjectTemplate/parts';

export function ProjectBook() {
  return (
    <PaperWrapper>
      <Grid gutter="xs" gutterMd="md">
        {projects.map((v) => (
          <Grid.Col key={v.name} span={12} sm={6}>
            <ProjectCard {...v} />
          </Grid.Col>
        ))}
      </Grid>
    </PaperWrapper>
  );
}
