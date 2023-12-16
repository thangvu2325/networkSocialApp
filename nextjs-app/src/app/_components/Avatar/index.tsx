"use client";
import Image from "next/image";
import { Fragment, FunctionComponent, ReactNode, useState } from "react";

interface AvatarProps {
  src?: string;
  name?: string;
  icon?: ReactNode;
  height?: number;
  width?: number;
  className?: string;
  from?: string;
  to?: string;
}

const Avatar: FunctionComponent<AvatarProps> = ({
  src,
  name,
  icon,
  height = 35,
  width = 35,
  className,
  from = `#ee0979`,
  to = `#ff6a00`,
}) => {
  const [error, setError] = useState<boolean>(false);
  return (
    <Fragment>
      {error || !src ? (
        <div
          className={`w-[${width}px] h-[${height}px] bg-gradient-to-r from-[${from}] to-[${to}]  rounded-[${width}px] relative mr-4 font-bold ${
            className ?? ""
          }`}
        >
          <span className="text-[#fff] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-[12px]">
            {name
              ? name
                  ?.split(" ")
                  .map((word) => word.charAt(0))
                  .join("")
              : icon}
          </span>
        </div>
      ) : (
        <Image
          src={src ?? ""}
          alt="avatar user"
          width={height}
          height={width}
          className={className ?? ""}
          onError={() => {
            setError(true);
          }}
        ></Image>
      )}
    </Fragment>
  );
};

export default Avatar;
