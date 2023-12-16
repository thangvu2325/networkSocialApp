"use client";
import {
  IconBell,
  IconMessageCircle2,
  IconSettings,
  IconPointFilled,
  IconBolt,
  IconSearch,
  IconHome,
  IconVideo,
  IconUser,
  IconShoppingBag,
  IconCheck,
  IconMenuDeep,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent, useState } from "react";
import { usePathname } from "next/navigation";
import PopupMenu from "@/app/_components/PopupMenu";
import PopupTemplate from "@/app/_components/PopupMenu/PopupTemple";
import HeaderSearchBox from "./HeaderSearchBox";
import { useAppDispatch, useAppSelector } from "@/app/_hooks";
import { settingAction } from "@/app/_redux/slice/settingsSlice";
import { settingsSelector } from "@/app/_redux/selectors";
import Avatar from "@/app/_components/Avatar";
import { useSession } from "next-auth/react";
interface HeaderProps {}
export const dataColorTheme: Array<{ value: string; color: string }> = [
  { value: "red", color: "#ff3b30" },
  { value: "green", color: "#4cd964" },
  { value: "blue", color: "#05f" },
  { value: "pink", color: "#ff2d55" },
  { value: "yellow", color: "#ffcc00" },
  { value: "orange", color: "#ff9500" },
  { value: "gray", color: "#8e8e93" },
  { value: "brown", color: "#D2691E" },
  { value: "darkgreen", color: "#228B22" },
  { value: "deeppink", color: "#FFC0CB" },
  { value: "cadetblue", color: "#5f9ea0" },
  { value: "darkorchid", color: "#9932cc" },
];
const Header: FunctionComponent<HeaderProps> = () => {
  const [colorTheme, setColorTheme] = useState<{
    value: string;
    color: string;
  }>({ value: "blue", color: "#05f" });
  const { data: session, status } = useSession();
  const [showSearchBox, setShowSearchBox] = useState<boolean>(false);
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const SidebarShow: boolean = useAppSelector(settingsSelector).sidebar;
  const NavbarShow: boolean = useAppSelector(settingsSelector).navbar;
  const handleToggleShowSidebar = () => {
    dispatch(settingAction.ToggleShowSidebar(!SidebarShow));
  };
  const handleToggleShowNavbar = () => {
    dispatch(settingAction.ToggleShowNavbar(!NavbarShow));
  };
  return (
    <div className="shadow-sm fixed top-0 left-0 right-0 z-10 bg-[#fff]">
      <div className="px-4 py-2 flex items-center h-navHeightLg lg:h-navHeight">
        <div className="flex flex-1">
          <Link
            className="flex items-center sm:w-[280px] select-hidden"
            href={"/"}
          >
            <IconBolt
              width={36}
              height={36.4}
              stroke={2}
              className="text-[#10d876] mr-[4px]"
            />
            <span className="font-fredokaOneRegular text-iconColor font-bold text-[32px]">
              Sociala.
            </span>
          </Link>
          <div className="flex">
            <div className="w-[350px] h-[48] rounded-[30px] bg-searchBgColor hidden items-center relative lg:flex">
              <IconSearch
                width={20}
                height={20}
                className="font-[400] text-[#b0a5b1] absolute top-[14px] bottom-[14px] left-[15px]"
              />
              <input
                type="text"
                className=" focus-within: outline-hidden bg-transparent py-2 pl-[48px] pr-[16px] text-[12px] w-[350px] font-[500] outline-none "
                placeholder="Start typing to search..."
              />
            </div>
            <div className="hidden justify-around xl:flex">
              <Link
                className={`p-2 ml-[16px] text-[#b0a5b1] rounded-[50px] ${
                  pathname === "/"
                    ? "bg-[#d2e3ff] text-iconColor"
                    : "bg-searchBgColor"
                }`}
                href={"/"}
              >
                <IconHome width={30} height={30} stroke={1.5} />
              </Link>
              <Link
                className={`p-2 ml-[16px] text-[#b0a5b1]  rounded-[50px] ${
                  pathname === "/b"
                    ? "bg-[#d2e3ff] text-iconColor"
                    : "bg-searchBgColor"
                }`}
                href={"/b"}
              >
                <IconBolt width={30} height={30} stroke={1.5} />
              </Link>
              <Link
                className={`p-2 ml-[16px] text-[#b0a5b1]  rounded-[50px] ${
                  pathname === "/c"
                    ? "bg-[#d2e3ff] text-iconColor"
                    : "bg-searchBgColor"
                }`}
                href={"/c"}
              >
                <IconVideo width={30} height={30} stroke={1.5} />
              </Link>
              <Link
                className={`p-2 ml-[16px] text-[#b0a5b1]   rounded-[50px] ${
                  pathname === "/d"
                    ? "bg-[#d2e3ff] text-iconColor"
                    : "bg-searchBgColor"
                }`}
                href={"/d"}
              >
                <IconUser width={30} height={30} stroke={1.5} />
              </Link>
              <Link
                className={`p-2 ml-[16px] text-[#b0a5b1]  rounded-[50px] ${
                  pathname === "/e"
                    ? "bg-[#d2e3ff] text-iconColor"
                    : "bg-searchBgColor"
                }`}
                href={"/e"}
              >
                <IconShoppingBag width={30} height={30} stroke={1.5} />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-around">
          <PopupMenu
            popUpTemplate={
              <PopupTemplate>
                <h3 className="font-bold text-base mb-[24px]">Notification</h3>
                <div className="flex relative left-0">
                  <Image
                    src={
                      "https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p60x60&_nc_cat=1&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=x-5IH6VdBkQAX9cXvXo&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfDJWLJmZ7QFyae--v_SmuZRoCgdO6jtADAQWhclguo6fQ&oe=657447B8"
                    }
                    alt="logo"
                    width={40}
                    height={40}
                    className="rounded-[50px] absolute "
                  />
                  <div className="flex-1 pl-12 h-[40px]">
                    <div className="flex mb-[4px]  ">
                      <span className="text-[#212529] font-bold text-[14px] min-w-[176px] leading-[1.2]">
                        Hendrix Stamp
                      </span>
                      <span className="font-semibold text-[#ced4da] mt-[4px] text-[10px] text-right">
                        3 min
                      </span>
                    </div>
                    <div className="text-[12px] text-[#adb5bd] font-medium leading-[1.6] pb-2 translate-y-[-4px] text-ellipsis whitespace-nowrap overflow-hidden w-[205px]">
                      There are many variations of passsdsdds
                    </div>
                  </div>
                </div>
              </PopupTemplate>
            }
          >
            <span className="p-2 ml-[16px] cursor-pointer text-iconColor relative hidden lg:inline">
              <IconBell width={30} height={30} stroke={1.5} />
              <IconPointFilled
                width={14}
                height={14}
                stroke={1.5}
                className="absolute top-1 right-1 text-warnColor"
              />
            </span>
          </PopupMenu>

          <span
            className="p-2 ml-[16px] cursor-pointer text-iconColor  rounded-[50px] bg-searchBgColor lg:bg-[#fff] max-[500px]:hidden"
            onClick={handleToggleShowSidebar}
          >
            <IconMessageCircle2 width={30} height={30} stroke={1.5} />
          </span>
          <PopupMenu
            popUpTemplate={
              <PopupTemplate>
                <h3 className="font-bold text-xl mb-[24px]">Settings</h3>
                <h6 className="text-[12px] text-[#adb5bd] font-bold mb-[24px]">
                  Choose Color Theme
                </h6>
                <ul className="w-60 min-h-[70px] flex flex-wrap">
                  {dataColorTheme.length
                    ? dataColorTheme.map((theme) => (
                        <li className="inline-block mr-[8px]" key={theme.value}>
                          <label className="inline pl-0 group relative">
                            <input
                              type="radio"
                              name="radio-checked"
                              value={theme.value}
                              className="hidden peer" // Apply styles when the radio is checked or when the parent is hovered/focused
                              onChange={() => {
                                setColorTheme(theme);
                              }}
                              checked={theme.color === colorTheme.color}
                            />
                            <span
                              className={`w-8 min-h-[2rem] rounded-[50px] inline-block cursor-pointer `}
                              style={{
                                background: theme.color,
                              }}
                            ></span>
                            <IconCheck
                              width={14}
                              height={14}
                              className="absolute left-[50%] top-[0] translate-x-[-50%] opacity-0 translate-y-[-50%] text-[#fff] peer-checked:opacity-100"
                            />
                          </label>
                        </li>
                      ))
                    : ""}
                </ul>
                <div className="flex justify-between mt-[16px]">
                  <div className="text-[12px] font-bold text-['#111']">
                    <h4>Header Background</h4>
                  </div>
                  <div>
                    <label className="relative  items-center cursor-pointer block">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 min-h-[1.5rem] bg-[#eee]  rounded-full  dark:bg-gray peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[#fff] after:border-gray after:border after:rounded-full after:min-h-[1.25rem] after:w-5 after:transition-all peer-checked:bg-red"></div>
                    </label>
                  </div>
                </div>
                <div className="flex justify-between mt-[16px]">
                  <div className="text-[12px] font-bold text-['#111']">
                    <h4>Menu Position</h4>
                  </div>
                  <div>
                    <label className="relative  items-center cursor-pointer block">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 min-h-[1.5rem] bg-[#eee]  rounded-full  dark:bg-gray peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[#fff] after:border-gray after:border after:rounded-full after:min-h-[1.25rem] after:w-5 after:transition-all peer-checked:bg-red"></div>
                    </label>
                  </div>
                </div>
                <div className="flex justify-between mt-[16px]">
                  <div className="text-[12px] font-bold text-['#111']">
                    <h4>Dark Mode</h4>
                  </div>
                  <div>
                    <label className="relative  items-center cursor-pointer block">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 min-h-[1.5rem] bg-[#eee]  rounded-full  dark:bg-gray peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[#fff] after:border-gray after:border after:rounded-full after:min-h-[1.25rem] after:w-5 after:transition-all peer-checked:bg-red"></div>
                    </label>
                  </div>
                </div>
              </PopupTemplate>
            }
          >
            <span className="p-2 ml-[16px] cursor-pointer text-iconColor hidden lg:inline  ">
              <IconSettings
                className="animate-spin"
                width={30}
                height={30}
                stroke={1.5}
              />
            </span>
          </PopupMenu>
          <Link
            className={`p-2 ml-[16px] text-iconColor  rounded-[50px] bg-searchBgColor block lg:hidden max-[500px]:hidden`}
            href={"/c"}
          >
            <IconVideo width={30} height={30} stroke={1.5} />
          </Link>
          <span
            className={`p-2 ml-[16px] text-iconColor  rounded-[50px] bg-searchBgColor  block lg:hidden cursor-pointer max-[300px]:hidden`}
            onClick={() => setShowSearchBox(true)}
          >
            <IconSearch width={30} height={30} stroke={1.5} />
          </span>
          <span
            className={`p-2 ml-[16px] text-iconColor  rounded-[50px]  block lg:hidden cursor-pointer `}
            onClick={handleToggleShowNavbar}
          >
            <IconMenuDeep width={30} height={30} stroke={1.5} />
          </span>
          <Link
            href={"/settings"}
            className="p-2 ml-[16px] cursor-pointer mr-[16px] hidden lg:inline "
          >
            <Avatar
              src={session?.user.image}
              name={session?.user.nickName}
            ></Avatar>
          </Link>
        </div>
      </div>
      <HeaderSearchBox
        show={showSearchBox}
        handleHiddenSearchBox={() => setShowSearchBox(false)}
      ></HeaderSearchBox>
    </div>
  );
};

export default Header;
