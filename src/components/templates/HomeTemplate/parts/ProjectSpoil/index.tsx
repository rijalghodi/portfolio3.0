import { Grid } from '@mantine/core';
import React from 'react';

import { SectionWrapper } from '@/components';
import { ProjectCard } from '@/components/templates/ProjectTemplate/parts';

import { Project } from '@/types';

type Props = {
  projects: Project[];
};

export function ProjectSpoil(props: Props) {
  return (
    <SectionWrapper title="My Projects" viewAllLink="/project">
      <ul>
        <Grid gutter="xs" gutterMd="md">
          {props.projects.map((v) => (
            <Grid.Col key={v.name} span={12} sm={6}>
              <li>
                <ProjectCard {...v} />
              </li>
            </Grid.Col>
          ))}
        </Grid>
      </ul>
    </SectionWrapper>
  );
}
