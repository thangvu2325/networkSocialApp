import { Fragment, FunctionComponent, ReactElement, ReactNode } from "react";
import React from "react";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
interface PopupMenuProps {
  children: ReactElement;
  popUpTemplate: ReactNode;
  className?: string | undefined;
  offset?: [number, number];
  trigger?: string;
}

const PopupMenu: FunctionComponent<PopupMenuProps> = ({
  children,
  popUpTemplate,
  className,
  offset,
  trigger = "click",
}) => {
  return (
    <Fragment>
      <Tippy
        hideOnClick="toggle"
        trigger={trigger}
        placement="bottom-end"
        interactive={true}
        onClickOutside={(instance) => {
          instance.hide();
        }}
        offset={offset ?? [-10, 0]}
        render={(attrs) => {
          return (
            <div
              className={`bg-[#fff] border-0 shadow-full p-6 rounded-[0.3rem] outline-none ${
                className ?? ""
              }`}
              tabIndex={-1}
              {...attrs}
            >
              {popUpTemplate}
            </div>
          );
        }}
      >
        {children}
      </Tippy>
    </Fragment>
  );
};

export default PopupMenu;
