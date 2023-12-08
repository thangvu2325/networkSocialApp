"use client";
import { IconDots, IconDotsVertical } from "@tabler/icons-react";
import Image from "next/image";
import { FunctionComponent } from "react";

interface CommentBoxProps {
  comment: commentType;
}
const CommentBox: FunctionComponent<CommentBoxProps> = ({ comment }) => {
  return (
    <div className="pt-[16px] pb-[8px] pr-[8px] flex justify-start">
      <figure className="mt-[4px] ">
        <Image
          src={"https://uitheme.net/sociala/images/user-6.png"}
          alt="avatar user"
          width={35}
          height={35}
        ></Image>
      </figure>
      <div className="p-[16px] bg-[#f5f5f5] w-[100%] rounded-[15px]  ml-[6px]">
        <h4 className="mb-[4px] text-[#212529] font-[700] text-[12px] leading-[1.2] flex justify-between">
          Vũ Đức Thắng
          <span className="text-right">
            <IconDots
              width={16}
              height={16}
              stroke={4}
              className="text-[#343a40] cursor-pointer"
            ></IconDots>
          </span>
        </h4>
        <p className="mt-[8px] leading-[20px] text-[12px] text-[#adb5bd] font-[500]">
          {comment.text}
        </p>
      </div>
    </div>
  );
};

export default CommentBox;
