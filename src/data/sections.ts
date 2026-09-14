import {
  SocialsSectionType
} from '@/types/data'

import { gitHubOutline, linkedIn } from '@/data/svg'

// Socials Section
export const socials: SocialsSectionType[] = [
  {
    name: 'GitHub',
    href: 'https://github.com/piercenovo',
    svg: gitHubOutline,
    hover: {
      fill: 'group-hover:fill-github'
    }
  },
  {
    name: 'Linkedin',
    href: 'https://www.linkedin.com/in/piercenovoa',
    svg: linkedIn,
    hover: {
      fill: 'group-hover:fill-linkedin'
    }
  }
]
