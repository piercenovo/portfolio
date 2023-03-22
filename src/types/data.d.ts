import { HeaderType, Section, SkillType } from './global'

export type HeaderSectionType = {
  navLinks: HeaderType[];
  cta: {
      name: string,
      title: string,
      url: string
  }
 };

export type HeroSectionType = {
  subtitle1: string;
  subtitle2: string;
  tagline: string;
  description: string;
} & Section;

export type AboutSectionType = {
  paragraphs: string[];
  img: string;
} & Section;

export type SkillsSectionType = {
  skills: SkillType[];
 } & Section;

export type ProjectsSectionType = {
  projects: ProjectType[];
} & Section;

export type SocialsSectionType = {
  name: string;
  href: string;
  svg: SVG;
  hover: {
      fill: string;
  };
};
