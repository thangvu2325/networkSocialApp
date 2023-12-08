import Link from "next/link";
import { Fragment, FunctionComponent, ReactNode } from "react";
import StatusItem from "./StatusItem";
import Avatar from "../Avatar";
interface MenuListProps {
  data: Array<{
    label?: string | ReactNode;
    navData: Array<{
      id: string;
      href?: string;
      avatar: ReactNode | string;
      title: string | ReactNode;
      count?: number;
      type?: string;
      time?: string;
    }>;
  }>;
  className?: string;
  Header?: ReactNode;
  action?: boolean;
  maxHeight?: string;
  menuItemStyle?: string;
  scrollMenu?: boolean;
  type?: "default" | "user";
}
const CreateNode = ({
  children,
  href = "",
}: {
  children: ReactNode;
  href: string;
}): ReactNode => {
  const Node: ReactNode = href ? (
    <Link
      href={href}
      className="flex items-center py-3 px-[15px]  h-[54px] select-none text-[#888] hover:text-blue relative"
    >
      {children}
    </Link>
  ) : (
    <div className="flex items-center py-3 px-[15px]  h-[54px] select-none text-[#888] hover:text-blue relative cursor-pointer">
      {children}
    </div>
  );
  return Node;
};
const MenuList: FunctionComponent<MenuListProps> = ({
  data,
  className,
  maxHeight,
  type,
  Header,
  action = false,
  menuItemStyle,
  scrollMenu = true,
}) => {
  return (
    <div
      className={`my-[8px] pt-4 pb-1 bg-[#fff] rounded-[15px] ${
        className ?? ""
      }`}
    >
      {Header ?? ""}
      {data?.length
        ? data.map((list, index) => (
            <span key={index}>
              {list.label ? (
                <div className="pl-[25px] mb-[5px] font-semibold whitespace-nowrap transition-[padding] duration-[250] text-[#adb5bd]  text-[12px]">
                  <span>{list.label}</span>
                </div>
              ) : (
                ""
              )}
              <ul
                className={`mb-[4px] ${
                  maxHeight ? `max-h-[${maxHeight}]` : ""
                } ${
                  scrollMenu
                    ? "scrollCustom  overflow-y-auto"
                    : " overflow-y-hidden"
                }  overflow-x-hidden`}
              >
                {list.navData?.length
                  ? list.navData.map((item) => {
                      return (
                        <li
                          className={`my-[1px] mx-[5px]  rounded-md transition-all duration-100 ease-linear ${
                            menuItemStyle ?? ""
                          }`}
                          key={item.id}
                        >
                          <Fragment>
                            <CreateNode href={item.href ? item.href : ""}>
                              <div
                                className={`w-[45px] h-[45px] flex items-center  rounded-[45px] relative mr-[16px]`}
                              >
                                {typeof item.avatar === "string" ? (
                                  <Avatar
                                    src={item.avatar}
                                    name={
                                      typeof item.title === "string"
                                        ? item.title
                                        : ""
                                    }
                                  ></Avatar>
                                ) : (
                                  item.avatar
                                )}
                              </div>
                              <div className="flex flex-col  w-[100%] justify-start items-center">
                                <div
                                  className={`text-[15px] font-semibold ${
                                    type === "user" ? "" : "leading-7"
                                  }  mr-[auto] w-[100%] flex justify-between items-center`}
                                >
                                  <span className="text-[12px] text-[#6c757d]">
                                    {item.title}
                                  </span>
                                  <StatusItem
                                    type={item.type ? item.type : ""}
                                    count={item.count ? item.count : 0}
                                    time={item.time ? item.time : ""}
                                  ></StatusItem>
                                </div>
                                {type === "user" ? (
                                  <span className=" text-[#adb5bd] font-[500] leading-[1.4] text-[12px] text-left  text-ellipsis line-clamp-1">
                                    test một chúts sadasd asdsadas asdasd
                                  </span>
                                ) : (
                                  ""
                                )}
                              </div>
                            </CreateNode>
                            {action ? (
                              <div className="px-[24px] pb-[24px] mt-[4px] flex">
                                <button className="outline-none block p-[6px] font-[600] text-[10px] w-[80px] text-[#fff] text-center mr-[8px] rounded-[30px] leading-[16px] bg-gradient-to-tl from-[#05f] to-[#09f]">
                                  Confirm
                                </button>
                                <button className="outline-none block p-[6px] font-[600] text-[10px] w-[80px] text-[#343a40] text-center mr-[8px] rounded-[30px] leading-[16px] bg-[#eee]">
                                  Delete
                                </button>
                              </div>
                            ) : (
                              ""
                            )}
                          </Fragment>
                        </li>
                      );
                    })
                  : ""}
              </ul>
            </span>
          ))
        : ""}
    </div>
  );
};

export default MenuList;
