import type { SVG } from '@/types/global'

export type SocialsSectionType = {
  name: string;
  href: string;
  svg: SVG;
  hover: {
    fill: string;
  };
};
