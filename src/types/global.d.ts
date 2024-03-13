export type HeaderType = {
  section: string
  children: string
}

export type Section = {
  title: string
}

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
  }[]
}

export type ProjectType = {
  name: string
  description: string
  url?: string
  repo: string
  year: number
  img: string
  tags: {
    name: string
    svg: SVG
    hover: {
      fill: string
    }
  }[]
}
