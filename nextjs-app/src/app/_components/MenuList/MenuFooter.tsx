import { Fragment, FunctionComponent, ReactNode } from "react";

export type MenuFooterProps = {
  children: ReactNode;
};

const MenuFooter: FunctionComponent<MenuFooterProps> = ({ children }) => {
  return <Fragment>{children}</Fragment>;
};

export default MenuFooter;
