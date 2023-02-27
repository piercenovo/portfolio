export type HeaderType = {
  section: string;
  children: string;
}

export type Section = {
  title: string;
};

export type SVG = {
  viewBox: string
  path: string
}

export type SkillType = {
  name: string;
  technologies: TechnologiesType[]
}
