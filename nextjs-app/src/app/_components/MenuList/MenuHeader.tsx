import { FunctionComponent, Fragment, ReactNode } from "react";

export type MenuHeaderProps = {
  children: ReactNode;
};

const MenuHeader: FunctionComponent<MenuHeaderProps> = ({ children }) => {
  return <Fragment>{children}</Fragment>;
};

export default MenuHeader;
