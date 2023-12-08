import { FunctionComponent, ReactNode, useEffect } from "react";
import { IconPointFilled } from "@tabler/icons-react";
interface StatusItemProps {
  count?: number;
  time?: string;
  type: string;
}

const StatusItem: FunctionComponent<StatusItemProps> = ({
  type = "default",
  count,
  time,
}) => {
  let Node: ReactNode = null;
  switch (type) {
    case "Badge-Orange":
      Node = (
        <span className=" text-[#fff] block bg-[#fe9431] font-semibold rounded-[7px] py-[1px] px-[6px] text-[13px] leading-7">
          {count}
        </span>
      );
      break;
    case "Badge-Blue":
      Node = (
        <span className=" text-[#fff] block whitespace-nowrap  bg-[#1e74fd] font-medium rounded-[10rem]  text-[12px] leading-[12px] px-[7.8px] py-[4.2px]">
          {count}
        </span>
      );
      break;
    case "Dot-Online":
      Node = (
        <span className=" text-[#10d876] block  py-[1px] px-[6px]   text-[12px]">
          <IconPointFilled width={19} height={19} />
        </span>
      );
      break;
    case "Dot-Offline":
      Node = (
        <div className=" text-[#fe9431]   py-[1px] px-[6px]  ">
          <IconPointFilled width={19} height={19} />
        </div>
      );
      break;
    case "Time":
      Node = (
        <div className=" py-[1px] px-[6px] ">
          <span className="text-[10px] text-[#adb5bd] font-bold whitespace-nowrap">
            {time}
          </span>
        </div>
      );
      break;
    default:
      break;
  }
  return Node;
};

export default StatusItem;
