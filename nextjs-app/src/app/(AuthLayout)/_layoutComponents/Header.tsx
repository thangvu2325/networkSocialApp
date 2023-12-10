import { IconBolt } from "@tabler/icons-react";
import Link from "next/link";
import { FunctionComponent } from "react";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <header className="fixed top-0 left-0 right-0 w-[100vw] h-[96px] flex items-center ">
      <div className="px-[15px] bg-transparent flex items-center h-[90px] my-[auto]">
        <Link
          className="flex items-center sm:w-[280px] pl-[10px] select-hidden"
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
      </div>
    </header>
  );
};

export default Header;
