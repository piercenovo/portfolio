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
