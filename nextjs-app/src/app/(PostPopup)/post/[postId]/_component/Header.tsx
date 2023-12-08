"use client";
import PopupMenu from "@/app/_components/PopupMenu";
import PopupTemplate from "@/app/_components/PopupMenu/PopupTemple";
import {
  IconBell,
  IconCheck,
  IconMessageCircle2,
  IconPointFilled,
  IconSettings2,
} from "@tabler/icons-react";
import Image from "next/image";
import { Fragment, FunctionComponent, useState } from "react";
import { dataColorTheme } from "@/app/_layoutComponents/Header";
import { useAppDispatch, useAppSelector } from "@/app/_hooks";
import { settingAction } from "@/app/_redux/slice/settingsSlice";
import { settingsSelector } from "@/app/_redux/selectors";
import MenuList from "@/app/_components/MenuList";
interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  const [colorTheme, setColorTheme] = useState<{
    value: string;
    color: string;
  }>({ value: "blue", color: "#05f" });
  const dispatch = useAppDispatch();
  const SidebarShow: boolean = useAppSelector(settingsSelector).sidebar;
  const handleToggleShowSidebar = () => {
    dispatch(settingAction.ToggleShowSidebar(!SidebarShow));
  };
  return (
    <header className="flex justify-end">
      <PopupMenu
        className="p-[12px]"
        offset={[60, 6]}
        popUpTemplate={
          <Fragment>
            <MenuList
              type="user"
              maxHeight="400px"
              data={[
                {
                  label: (
                    <h3 className="font-[700] text-[#000] text-[16px] ">
                      Notification
                    </h3>
                  ),
                  navData: [
                    {
                      type: "Dot-Offline",
                      id: "10",
                      avatar: "https://uitheme.net/sociala/images/user-8.png",
                      title: (
                        <span className="text-[12px] text-[#6c757d]">
                          Hurin Seary
                        </span>
                      ),
                    },
                  ],
                },
              ]}
              className="pt-[0] w-[300px]"
            ></MenuList>
            <div className=" pt-[8px] px-[16px] mx-[-12px] border-t-[1px] border-[#e7e7e7] text-center  text-[12px] font-[600] text-blue">
              <span className="hover:underline select-none  cursor-pointer">
                Xem tất cả thông báo
              </span>
            </div>
          </Fragment>
        }
      >
        <span className="p-2 ml-[16px] cursor-pointer text-iconColor relative ">
          <IconBell width={30} height={30} stroke={1.5} />
          <IconPointFilled
            width={14}
            height={14}
            stroke={1.5}
            className="absolute top-1 right-1 text-warnColor"
          />
        </span>
      </PopupMenu>
      <PopupMenu
        className="p-[12px]"
        offset={[60, 6]}
        popUpTemplate={
          <Fragment>
            <MenuList
              type="user"
              maxHeight="400px"
              data={[
                {
                  label: (
                    <h3 className="font-[700] text-[#000] text-[16px] ">
                      Chat
                    </h3>
                  ),
                  navData: [
                    {
                      type: "Dot-Offline",
                      id: "10",
                      avatar: "https://uitheme.net/sociala/images/user-8.png",
                      title: (
                        <span className="text-[12px] text-[#6c757d]">
                          Hurin Seary
                        </span>
                      ),
                    },
                    {
                      time: "4:09 pm",
                      type: "Time",
                      id: "11",
                      avatar: "https://uitheme.net/sociala/images/user-8.png",
                      title: (
                        <span className="text-[12px] text-[#6c757d]">
                          Hurin Seary
                        </span>
                      ),
                    },
                    {
                      type: "Badge-Blue",
                      count: 20,
                      id: "12",
                      avatar: "https://uitheme.net/sociala/images/user-8.png",
                      title: (
                        <span className="text-[12px] text-[#6c757d]">
                          Hurin Seary
                        </span>
                      ),
                    },
                    {
                      type: "Dot-Online",
                      id: "13",
                      avatar: "https://uitheme.net/sociala/images/user-8.png",
                      title: (
                        <span className="text-[12px] text-[#6c757d]">
                          Hurin Seary
                        </span>
                      ),
                    },
                  ],
                },
              ]}
              className="pt-[0] w-[240px]"
            ></MenuList>
            <div className=" pt-[8px] px-[16px] mx-[-12px] border-t-[1px] border-[#e7e7e7] text-center  text-[12px] font-[600] text-blue">
              <span className="hover:underline select-none  cursor-pointer">
                Xem tất cả tin nhắn
              </span>
            </div>
          </Fragment>
        }
      >
        <span
          className="p-2 ml-[16px] cursor-pointer text-iconColor  rounded-[50px] "
          onClick={handleToggleShowSidebar}
        >
          <IconMessageCircle2 width={30} height={30} stroke={1.5} />
        </span>
      </PopupMenu>
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
        <span className="p-2 ml-[16px] cursor-pointer text-iconColor hidden lg:inline">
          <IconSettings2
            className="animate-spin"
            width={30}
            height={30}
            stroke={1.5}
          />
        </span>
      </PopupMenu>
      <span className="p-2 ml-[16px] cursor-pointer mr-[16px] hidden lg:inline ">
        <Image
          className="rounded-full"
          src={
            "https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p60x60&_nc_cat=1&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=x-5IH6VdBkQAX9cXvXo&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfDJWLJmZ7QFyae--v_SmuZRoCgdO6jtADAQWhclguo6fQ&oe=657447B8"
          }
          alt="avatar"
          width={30}
          height={30}
        />
      </span>
    </header>
  );
};

export default Header;
