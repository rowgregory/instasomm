export interface HeaderLinkProps {
  textKey: string;
  linkKey: string;
  active: boolean;
}

export interface MobileNavigationProps {
  toggleMobileNavigation: boolean;
  close: () => void;
}
