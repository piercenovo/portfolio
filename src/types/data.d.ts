import { HeaderType } from './global'

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
