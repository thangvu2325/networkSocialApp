"use client";
import { FunctionComponent, ReactNode, useEffect } from "react";
import "@/app/_layoutComponents/globalsLayout.css";
import MenuList from "@/app/_components/MenuList";
import {
  IconAward,
  IconDeviceTv,
  IconWorld,
  IconBolt,
  IconUser,
  IconInbox,
  IconHome,
  IconMapPin,
  IconBrandYoutube,
  IconSettings,
  IconChartPie2,
  IconMessageCircle,
} from "@tabler/icons-react";
import { useAppSelector } from "@/app/_hooks";
import { settingsSelector } from "@/app/_redux/selectors";
interface NavbarProps {}
export type navData = {
  id: string;
  href?: string;
  avatar: ReactNode | string;
  title: string | ReactNode;
  count?: number;
  type?: string;
  time?: string;
};
const navDataNewFeeds: Array<navData> = [
  {
    id: "1",
    href: "newsfeed",
    avatar: (
      <div className="w-[45px] h-[45px] bg-gradient-to-r from-[#0575e6] to-[#021b79] rounded-[45px] relative">
        <IconDeviceTv
          width={24}
          height={24}
          stroke={2}
          className="text-[#fff] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
        />
      </div>
    ),
    title: "Newsfeed",
  },
  {
    id: "2",
    href: "badges",
    avatar: (
      <div className="w-[45px] h-[45px] bg-gradient-to-r from-[#e44d26] to-[#f16529] rounded-[45px] relative ">
        <IconAward
          width={24}
          height={24}
          stroke={2}
          className="text-[#fff] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
        />
      </div>
    ),
    title: "Badges",
  },
  {
    id: "3",
    href: "stories",
    avatar: (
      <div className="w-[45px] h-[45px] bg-gradient-to-r from-[#f2994a] to-[#f2c94c] rounded-[45px] relative">
        <IconWorld
          width={24}
          height={24}
          stroke={2}
          className="text-[#fff] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
        />
      </div>
    ),
    title: "Explore Stories",
  },
  {
    id: "4",
    href: "group",
    avatar: (
      <div className="w-[45px] h-[45px] bg-gradient-to-r from-[#ee0979] to-[#ff6a00] rounded-[45px] relative ">
        <IconBolt
          width={24}
          height={24}
          stroke={2}
          className="text-[#fff] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
        />
      </div>
    ),
    title: "Popular Groups",
  },
  {
    id: "5",
    href: "user-page",
    avatar: (
      <div className="w-[45px] h-[45px] bg-gradient-to-r from-iconColor to-[#09f] rounded-[45px] relative">
        <IconUser
          width={24}
          height={24}
          stroke={2}
          className="text-[#fff] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
        />
      </div>
    ),
    title: "Author Profile",
  },
];
const navDataMorePages: Array<navData> = [
  {
    type: "Badge-Orange",
    id: "6",
    href: "email-box",
    avatar: (
      <div className="w-[45px] h-[45px]  rounded-[45px] relative  mr-[16px]">
        <IconInbox
          width={28}
          height={28}
          stroke={2}
          className="text-iconColor absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
        />
      </div>
    ),
    title: "Email Box",
    count: 584,
  },
  {
    id: "7",
    href: "hotel",
    avatar: (
      <div className="w-[45px] h-[45px]  rounded-[45px] relative  mr-[16px]">
        <IconHome
          width={24}
          height={24}
          stroke={2}
          className="text-iconColor absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
        />
      </div>
    ),
    title: "Near Hotel",
  },
  {
    id: "8",
    href: "event",
    avatar: (
      <div className="w-[45px] h-[45px]  rounded-[45px] relative  mr-[16px]">
        <IconMapPin
          width={24}
          height={24}
          stroke={2}
          className="text-iconColor absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
        />
      </div>
    ),
    title: "Lastest Event",
  },
  {
    id: "9",
    href: "live-stream",
    avatar: (
      <div className="w-[45px] h-[45px]  rounded-[45px] relative  mr-[16px]">
        <IconBrandYoutube
          width={24}
          height={24}
          stroke={2}
          className="text-iconColor absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
        />
      </div>
    ),
    title: "Live Stream",
  },
];
const navDataMoreAccount: Array<navData> = [
  {
    id: "21",
    href: "settings",
    avatar: (
      <div className="w-[45px] h-[45px]  rounded-[45px] relative  mr-[16px]">
        <IconSettings
          width={24}
          height={24}
          stroke={2}
          className="text-[#adb5bd] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
        />
      </div>
    ),
    title: "Settings",
  },
  {
    id: "22",
    href: "analytics",
    avatar: (
      <div className="w-[45px] h-[45px]  rounded-[45px] relative  mr-[16px]">
        <IconChartPie2
          width={24}
          height={24}
          stroke={2}
          className="text-[#adb5bd] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
        />
      </div>
    ),
    title: "Analytics",
  },
  {
    id: "23",
    type: "Badge-Orange",
    href: "message",
    avatar: (
      <div className="w-[45px] h-[45px]  rounded-[45px] relative  mr-[16px]">
        <IconMessageCircle
          width={24}
          height={24}
          stroke={2}
          className="text-[#adb5bd] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
        />
      </div>
    ),
    title: "Chat",
    count: 23,
  },
];
const Navbar: FunctionComponent<NavbarProps> = () => {
  const isNavBarShow: boolean = useAppSelector(settingsSelector).navbar;
  return (
    <nav
      className={`pt-24 overflow-hidden overflow-y-scroll fixed top-0 sm:w-[280px] h-[100vh] transition-all ease-out scrollCustom bg-[#f4f5f7] max-lg:z-20 max-lg:pt-0 lg:left-0 ${
        isNavBarShow ? "left-0 animate-navbarShow" : "left-[-280px]"
      }`}
    >
      <div className="px-[15px] sm:w-[280px]  mt-[8px] ">
        <MenuList data={[{ label: "New Feeds", navData: navDataNewFeeds }]} />
        <MenuList data={[{ label: "More Pages", navData: navDataMorePages }]} />
        <MenuList data={[{ label: "Account", navData: navDataMoreAccount }]} />
      </div>
    </nav>
  );
};

export default Navbar;
