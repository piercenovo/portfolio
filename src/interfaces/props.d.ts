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
