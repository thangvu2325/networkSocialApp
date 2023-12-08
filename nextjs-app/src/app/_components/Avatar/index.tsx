"use clien";
import Image from "next/image";
import { Fragment, FunctionComponent, useRef, useState } from "react";

interface AvatarProps {
  src?: string;
  name?: string;
}

const Avatar: FunctionComponent<AvatarProps> = ({ src, name }) => {
  const [error, setError] = useState<boolean>(false);
  return (
    <Fragment>
      {error && !src ? (
        <div className="w-[35px] h-[35px] bg-gradient-to-r from-[#ee0979] to-[#ff6a00] rounded-[35px] relative mr-4 font-bold ">
          <span className="text-[#fff] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-[12px]">
            {name
              ?.split(" ")
              .map((word) => word.charAt(0))
              .join("")}
          </span>
        </div>
      ) : (
        <Image
          src={src ?? ""}
          alt="avatar user"
          width={35}
          height={35}
          onError={() => {
            setError(true);
          }}
        ></Image>
      )}
    </Fragment>
  );
};

export default Avatar;
