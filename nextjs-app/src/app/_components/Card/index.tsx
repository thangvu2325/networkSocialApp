"use client";
import { IconPlus } from "@tabler/icons-react";
import Image from "next/image";
import { FunctionComponent, useRef, useEffect } from "react";

interface CardProps {
  type?: string;
  name?: string;
  backgroundImageSrc?: string;
  avatarImageSrc?: string;
}

const Card: FunctionComponent<CardProps> = ({
  type = "default",
  backgroundImageSrc = "https://uitheme.net/sociala/images/s-1.jpg",
  avatarImageSrc = "https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p60x60&_nc_cat=1&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=yA87YnT4NJQAX8azMqd&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfB1C8zT5rvo72CgXXp_4l7QKcgFxh3XHjbMKGIKH3-xrw&oe=6578E4F8",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current && type === "default") {
      ref.current.style.backgroundImage = `url(${backgroundImageSrc})`;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="mr-[7px] py-[16px] bg-[#343a40] w-[125px] h-[200px] rounded-[10px] relative after:content-[''] after:w-[100%] after:h-[200px] after:bg-linear-gradient after:block overflow-hidden"
      ref={ref}
    >
      <div className="p-[1rem] absolute bottom-0 w-[100%]">
        <span className="flex flex-col text-center justify-center">
          <span className="mx-[auto] w-[50px] h-[50px] rounded-[50px] bg-[#fff] flex justify-center items-center">
            {type === "default" ? (
              <Image
                src={avatarImageSrc}
                alt="logo"
                width={50}
                height={50}
                className="rounded-[50px]"
              ></Image>
            ) : (
              <IconPlus
                className="text-[#1e74fd]"
                width={25}
                height={25}
              ></IconPlus>
            )}
          </span>
          <h4 className="mt-[8px] mb-[4px] text-[#fff] font-[700] text-[12px]">
            Add Story
          </h4>
        </span>
      </div>
    </div>
  );
};

export default Card;
