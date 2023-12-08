import { FunctionComponent, ReactNode } from "react";

interface PopupTemplateProps {
  children: ReactNode;
}

const PopupTemplate: FunctionComponent<PopupTemplateProps> = ({ children }) => {
  return children;
};

export default PopupTemplate;
