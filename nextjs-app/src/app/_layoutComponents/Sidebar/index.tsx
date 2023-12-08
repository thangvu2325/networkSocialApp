"use client";
import { FunctionComponent } from "react";
import "@/app/_layoutComponents/globalsLayout.css";
import MenuList from "@/app/_components/MenuList";
import { useAppSelector } from "@/app/_hooks";
import Image from "next/image";
import { navData } from "../Navbar";
import { settingsSelector } from "@/app/_redux/selectors";
interface SidebarProps {}

const sidebarDataContacts: Array<navData> = [
  {
    type: "Dot-Offline",
    id: "10",
    avatar: "https://uitheme.net/sociala/images/user-8.png",
    title: "Hurin Seary",
  },
  {
    time: "4:09 pm",
    type: "Time",
    id: "11",
    avatar: "https://uitheme.net/sociala/images/user-8.png",
    title: "Hurin Seary",
  },
  {
    type: "Badge-Blue",
    count: 20,
    id: "12",
    avatar: "https://uitheme.net/sociala/images/user-8.png",
    title: "Hurin Seary",
  },
  {
    type: "Dot-Online",
    id: "13",
    avatar: "https://uitheme.net/sociala/images/user-8.png",
    title: "Hurin Seary",
  },
];
const sidebarDataGroups: Array<navData> = [
  {
    type: "Dot-Offline",
    id: "21",
    avatar: "",
    title: "Studio Express",
  },
  {
    type: "Dot-Offline",
    id: "22",
    avatar: "",
    title: "Armany Design",
  },
  {
    time: "4:09 pm",
    type: "Time",
    id: "23",
    avatar: "",

    title: "De fabous",
  },
];
const sidebarDataPages: Array<navData> = [
  {
    type: "Dot-Offline",
    id: "31",
    avatar: "",
    title: "Armany Seary",
  },
  {
    type: "Dot-Offline",
    id: "32",
    avatar: "",
    title: "Armany Seary",
  },
];
const Sidebar: FunctionComponent<SidebarProps> = () => {
  const SidebarShow: boolean = useAppSelector(settingsSelector).sidebar;
  return (
    <nav
      className={`pt-24 max-lg:pt-[63px] overflow-hidden overflow-y-scroll fixed top-0 z-[1]  w-[280px]  h-[100vh] transition-all ease-out scrollCustom bg-[#f4f5f7] ${
        SidebarShow ? "right-0 animate-sidebarShow" : "right-[-280px]"
      }`}
    >
      <div className="px-[15px] w-[280px] ">
        <MenuList
          data={[
            { label: "CONTACTS", navData: sidebarDataContacts },
            { label: "GROUPS", navData: sidebarDataGroups },
            { label: "PAGES", navData: sidebarDataPages },
          ]}
        />
      </div>
    </nav>
  );
};

export default Sidebar;
