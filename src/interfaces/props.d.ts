export interface ButtonProps {
  title: string;
  href: string;
  children: string;
}

export interface MenuProps {
  onClick: (event: React.MouseEvent) => void;
  navbarCollapsed: boolean;
}

export interface SlideUpProps {
  offset?: string
  children?: ReactNode
  // any props that come into the component
}

export interface SectionProps {
  id: string;
  title: string;
  number: string;
  children: JSX.Element;
}

export interface SideColumnProps {
  orientation: 'left' | 'right'
  children: JSX.Element
}
