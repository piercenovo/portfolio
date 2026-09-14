import type { StaticImageData } from 'next/image'

export type SVG = {
  viewBox: string
  path: string
}

export type SkillType = {
  name: string
  technologies: {
    name: string
    svg: SVG
    hover: {
      fill: string
      text: string
    }
    active: {
      fill: string
      text: string
    }
  }[]
}

export type ProjectType = {
  name: string
  description: string
  url?: string
  repo?: string
  year: number
  img: StaticImageData
  tags: {
    name: string
    svg: SVG
    hover: {
      fill: string
    }
  }[]
}
