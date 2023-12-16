"use client";
import Avatar from "@/app/_components/Avatar";
import {
  IconBell,
  IconBrandTwitter,
  IconChevronRight,
  IconCreditCard,
  IconHelp,
  IconHome,
  IconKey,
  IconLogout,
  IconMapPin,
} from "@tabler/icons-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Fragment, FunctionComponent, ReactNode } from "react";
type settingsNavType = {
  key: string;
  title: string;
  subNav: Array<{
    key: string;
    href?: string;
    icon: ReactNode;
    subTitle: string;
    onClick?: () => void;
  }>;
};
interface SettingPageProps {}
const settingsNav: Array<settingsNavType> = [
  {
    key: "nav1",
    title: "Genaral",
    subNav: [
      {
        key: "subnav1",
        icon: (
          <Avatar
            width={45}
            height={45}
            icon={<IconHome width={28} height={28}></IconHome>}
            from="#05f"
            to="#09f"
            className="mr-[16px]"
          ></Avatar>
        ),
        subTitle: "Acount Information",
        href: "/account",
      },
      {
        key: "subnav2",
        icon: (
          <Avatar
            width={45}
            height={45}
            icon={<IconMapPin width={28} height={28}></IconMapPin>}
            from="#f2994a"
            to="#f2c94c"
            className="mr-[16px]"
          ></Avatar>
        ),
        href: "/address",
        subTitle: "Saved Address",
      },
      {
        key: "subnav3",
        icon: (
          <Avatar
            width={45}
            height={45}
            icon={<IconBrandTwitter width={28} height={28}></IconBrandTwitter>}
            from="#e44d26"
            to="#f16529"
            className="mr-[16px]"
          ></Avatar>
        ),
        href: "/social",
        subTitle: "Social Acount",
      },
    ],
  },
  {
    key: "nav2",
    title: "Genaral",
    subNav: [
      {
        key: "subnav21",
        icon: (
          <Avatar
            width={45}
            height={45}
            icon={<IconCreditCard width={28} height={28}></IconCreditCard>}
            from="#ee0979"
            to="#ff6a00"
            className="mr-[16px]"
          ></Avatar>
        ),
        subTitle: "My Cards",
        href: "mycard",
      },
      {
        key: "subnav22",
        icon: (
          <Avatar
            width={45}
            height={45}
            icon={<IconKey width={28} height={28}></IconKey>}
            from="#f2994a"
            to="#f2c94c"
            className="mr-[16px]"
          ></Avatar>
        ),
        href: "password",
        subTitle: "Password",
      },
    ],
  },
  {
    key: "nav3",
    title: "Other",
    subNav: [
      {
        key: "subnav31",
        icon: (
          <Avatar
            width={45}
            height={45}
            icon={<IconBell width={28} height={28}></IconBell>}
            from="#f2994a"
            to="#f2c94c"
            className="mr-[16px]"
          ></Avatar>
        ),
        href: "/notification",
        subTitle: "Notification",
      },
      {
        key: "subnav32",
        icon: (
          <Avatar
            width={45}
            height={45}
            icon={<IconHelp width={28} height={28}></IconHelp>}
            from="#05f"
            to="#09f"
            className="mr-[16px]"
          ></Avatar>
        ),
        href: "/help",
        subTitle: "Help",
      },
      {
        key: "subnav33",
        icon: (
          <Avatar
            width={45}
            height={45}
            icon={<IconLogout width={28} height={28}></IconLogout>}
            from="#e44d26"
            to="#f16529"
            className="mr-[16px]"
          ></Avatar>
        ),
        subTitle: "Logout",
        onClick: () => {
          signOut();
        },
      },
    ],
  },
];
const SettingPage: FunctionComponent<SettingPageProps> = () => {
  const { data: session, status } = useSession();
  console.log(session, status);
  return (
    <div className=" pt-[20px] pb-[30px]">
      <div className="mx-[auto] max-w-[800px] rounded-[4px]  bg-[#fff]">
        <div className="py-[48px] px-[63px]">
          <h4 className="mb-[48px] font-[700] text-[#111] leading-[1.2] text-[32px]">
            Settings
          </h4>

          {settingsNav.map((nav) => (
            <Fragment key={nav.key}>
              <h6 className="mb-[8px] font-[600] text-[#adb5bd] text-[12px]">
                {nav.title}
              </h6>
              <ul className="mb-[1.5rem]">
                {nav.subNav.map((item, index, array) => {
                  return (
                    <li
                      key={item.key}
                      className={`${
                        index === array.length - 1
                          ? ""
                          : "border-b-[1px] border-solid border-[#e1e1f0]"
                      } `}
                    >
                      <Link
                        href={item.onClick ? "#" : item.href ?? "/"}
                        className="py-[8px] flex items-center"
                        onClick={item.onClick}
                      >
                        {item.icon}
                        <h4 className="font-[600] text-[14px]">
                          {item.subTitle}
                        </h4>
                        <IconChevronRight
                          width={24}
                          height={24}
                          stroke={1}
                          className="text-[#adb5bd] ml-[auto]"
                        ></IconChevronRight>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SettingPage;
