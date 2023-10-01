import { Grid } from '@mantine/core';
import React from 'react';

import { projects } from '@/data';

import { PaperWrapper } from '@/components';
import { ProjectCard } from '@/components/templates/ProjectTemplate/parts';

export function ProjectBook() {
  return (
    <PaperWrapper>
      <ul>
        <Grid gutter="xs" gutterMd="md">
          {projects.map((v) => (
            <Grid.Col key={v.name} span={12} sm={6}>
              <li>
                <ProjectCard {...v} />
              </li>
            </Grid.Col>
          ))}
        </Grid>
      </ul>
    </PaperWrapper>
  );
}
