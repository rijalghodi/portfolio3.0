import { TechStack } from '@/types';

export const techStacks: TechStack[] = [
  // Frontend
  {
    category: 'Front End & Design',
    techs: [
      {
        name: 'NextJS',
        level: 'advance',
        color: 'dark',
      },
      {
        name: 'NuxtJS',
        level: 'intermediete',
        color: 'green',
      },
      {
        name: 'React',
        level: 'advance',
        color: 'blue',
      },
      {
        name: 'Vue',
        level: 'advance',
        color: 'lime',
      },
      {
        name: 'Mantine UI',
        level: 'advance',
        color: 'blue',
      },
      {
        name: 'Tailwind',
        level: 'advance',
        color: 'indigo',
      },
    ],
  },
  // Backend
  {
    category: 'Backend End & Database',
    techs: [
      {
        name: 'NestJS',
        level: 'advance',
        color: 'red',
      },
      { name: 'ExpressJS', level: 'advance', color: 'gray' },
      { name: 'PostgreSQL', level: 'advance', color: 'teal' },
      { name: 'SQLite', level: 'advance', color: 'teal' },
    ],
  },
  // Others
  {
    category: 'Others',
    techs: [
      {
        name: 'Git',
        level: 'advance',
        color: 'orange',
      },
      {
        name: 'CI/CD',
        level: 'advance',
        color: 'dark',
      },
      {
        name: 'Docker',
        level: 'advance',
        color: 'blue',
      },
    ],
  },
];
