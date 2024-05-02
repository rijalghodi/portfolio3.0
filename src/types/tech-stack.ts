export type TechLevel = 'beginner' | 'intermediete' | 'advance';

export type Tech = {
  name: string;
  level?: TechLevel;
  color?: string;
  image: string;
  link?: string;
};

export type TechStack = {
  category: string;
  techs: Tech[];
};
