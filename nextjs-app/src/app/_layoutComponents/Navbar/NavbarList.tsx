import Link from "next/link";
import { FunctionComponent, ReactNode } from "react";
interface NavbarListProps {
  label: string;
  navData: Array<{
    href: string;
    logo: ReactNode;
    title: string;
    count?: number;
  }>;
}

const NavbarList: FunctionComponent<NavbarListProps> = ({ label, navData }) => {
  return (
    <div className="my-2 pt-4 pb-1 bg-[#fff] rounded-[15px]">
      <div className="pl-[25px] mb-[5px] font-semibold whitespace-nowrap transition-[padding] duration-[250] text-[#adb5bd]  text-[12px]">
        <span>{label}</span>
      </div>
      <ul className="mb-1">
        {navData?.length
          ? navData.map((item) => (
              <li className="my-[1px] mx-[5px]" key={item.title}>
                <Link
                  href={item.href}
                  className="flex items-center py-3 px-[15px]  h-[54px] select-none text-[#888] hover:text-blue relative"
                >
                  {item.logo}
                  <span className="text-[15px] font-semibold  leading-7 mr-auto pr-[10px]">
                    {item.title}
                  </span>
                  {item.count ? (
                    <span className="absolute top-[50%] translate-y-[-50%] right-[13px] text-[#fff] block bg-[#fe9431] font-semibold rounded-[7px] py-[1px] px-[6px] text-[13px] leading-7">
                      {item.count}
                    </span>
                  ) : (
                    ""
                  )}
                </Link>
              </li>
            ))
          : ""}
      </ul>
    </div>
  );
};

export default NavbarList;
