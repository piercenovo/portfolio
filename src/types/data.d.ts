import { ProjectType, SkillType } from '@/types/global'

export type SkillsSectionType = {
  skills: SkillType[];
};

export type ProjectsSectionType = {
  projects: ProjectType[];
};

export type SocialsSectionType = {
  name: string;
  href: string;
  svg: SVG;
  hover: {
    fill: string;
  };
};
