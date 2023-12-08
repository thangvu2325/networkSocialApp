import { FunctionComponent } from "react";
import { IconX } from "@tabler/icons-react";
interface HeaderSearchBoxProps {
  show: boolean;
  handleHiddenSearchBox: () => void;
}

const HeaderSearchBox: FunctionComponent<HeaderSearchBoxProps> = ({
  show,
  handleHiddenSearchBox,
}) => {
  return (
    <div
      className={`fixed top-0 w-full h-navHeightLg  shadow-full z-30 bg-[#fff]  animate-dropdown  ${
        show ? "" : "hidden"
      }`}
    >
      <div className="p-1 relative">
        <input
          type="text"
          className=" focus-within: outline-hidden bg-transparent py-[6px] pr-3 pl-5 h-[55px] leading-[55px] text-[14px] text-[#515184] w-full font-[500] outline-none "
          placeholder="Search..."
        />
        <IconX
          width={30}
          height={30}
          stroke={1}
          className="absolute top-[50%] right-4 translate-y-[-50%] text-[#999] cursor-pointer"
          onClick={handleHiddenSearchBox}
        ></IconX>
      </div>
    </div>
  );
};

export default HeaderSearchBox;
