import {
  IconHome,
  IconPackage,
  IconLayoutCollage,
  IconStack2,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <footer className=" fixed bottom-0 w-[100%] bg-gradient-to-br from-iconColor to-[#09f] h-footerHeight bg-red flex items-center justify-between lg:hidden">
      <Link href={"/"} className="py-[6px] px-5 text-[#fff] ">
        <IconHome width={27} height={27} stroke={2} />
      </Link>
      <Link href={"/"} className="py-[6px] px-5 text-[#fff] ">
        <IconPackage width={27} height={27} stroke={2} />
      </Link>
      <Link href={"/"} className="py-[6px] px-5 text-[#fff] ">
        <IconLayoutCollage width={27} height={27} stroke={2} />
      </Link>
      <Link href={"/"} className="py-[6px] px-5 text-[#fff] ">
        <IconStack2 width={27} height={27} stroke={2} />
      </Link>
      <Link href={"/"} className="py-[6px] px-5 text-[#fff] ">
        <Image
          className="rounded-full"
          src={
            "https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p60x60&_nc_cat=1&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=x-5IH6VdBkQAX9cXvXo&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfDJWLJmZ7QFyae--v_SmuZRoCgdO6jtADAQWhclguo6fQ&oe=657447B8"
          }
          alt="avatar"
          width={30}
          height={30}
        />
      </Link>
    </footer>
  );
};

export default Footer;
