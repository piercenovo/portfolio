import type { Profile } from '@/types/content'
import { siGithub } from 'simple-icons'
import { linkedIn } from './icons'

export const profile: Profile = {
  name: 'Pierce Novoa',
  email: 'piercenovoah@gmail.com',
  cv: { es: '/curriculum-vitae.pdf', en: '/resume.pdf' },
  socials: [
    { name: 'GitHub', href: 'https://github.com/piercenovo', icon: siGithub },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/piercenovoa', icon: linkedIn }
  ]
}
