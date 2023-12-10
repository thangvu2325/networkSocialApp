import { IconLock, IconMail, IconUser } from "@tabler/icons-react";
import Link from "next/link";
import { FunctionComponent } from "react";

interface RegisterProps {}

const Register: FunctionComponent<RegisterProps> = () => {
  return (
    <div className="w-[fit-content] mx-[auto] p-[16px] min-w-[380px] max-w-[400px]">
      <h2 className="text-[30px] font-[700] mb-[1rem] text-left">
        Create
        <br /> your account
      </h2>
      <form>
        <div className="mb-[16px] relative w-[100%] border-none">
          <IconUser
            width={24}
            height={24}
            className="absolute left-[15px] top-[16px] text-[#9ca4b2]"
          ></IconUser>
          <input
            placeholder="Your Name"
            className="h-[60px] leading-[60px] w-[100%] rounded-[7px] outline-[#05f] block border-[2px] border-[#eee] border-solid py-[6px] pl-[48px] pr-[12px] text-[#212529] font-[600] text-[14px]"
          ></input>
        </div>
        <div className="mb-[16px] relative w-[100%] border-none">
          <IconMail
            width={24}
            height={24}
            className="absolute left-[15px] top-[16px] text-[#9ca4b2]"
          ></IconMail>
          <input
            placeholder="Your Email Address"
            className="h-[60px] leading-[60px] w-[100%] rounded-[7px] outline-[#05f] block border-[2px] border-[#eee] border-solid py-[6px] pl-[48px] pr-[12px] text-[#212529] font-[600] text-[14px]"
          ></input>
        </div>
        <div className="mb-[16px]  relative w-[100%] border-none">
          <IconLock
            width={24}
            height={24}
            className="absolute left-[15px] top-[16px] text-[#9ca4b2]"
          ></IconLock>
          <input
            placeholder="Password"
            type="password"
            className="h-[60px] leading-[60px] w-[100%] rounded-[7px] outline-[#05f] block border-[2px] border-[#eee] border-solid py-[6px] pl-[48px] pr-[12px] text-[#212529] font-[600] text-[14px]"
          ></input>
        </div>
        <div className="mb-[16px]  relative w-[100%] border-none">
          <IconLock
            width={24}
            height={24}
            className="absolute left-[15px] top-[16px] text-[#9ca4b2]"
          ></IconLock>
          <input
            placeholder="Confirm Password"
            type="password"
            className="h-[60px] leading-[60px] w-[100%] rounded-[7px] outline-[#05f] block border-[2px] border-[#eee] border-solid py-[6px] pl-[48px] pr-[12px] text-[#212529] font-[600] text-[14px]"
          ></input>
        </div>
        <div className="flex justify-between w-[100%] mt-4px mb-[16px]">
          <span className="flex items-center ">
            <input
              id="exampleCheck5"
              type="checkbox"
              className=" cursor-pointer rounded-[0.25em] mr-[6px] w-[1em] h-[1em] align-top bg-[#fff] bg-no-repeat bg-center bg-contain border-[1px] border-solid border-[#00000040] block appearance-none checked:bg-[#1e74fd] checked:border-[#1e74fd] "
            ></input>
            <label
              htmlFor="exampleCheck5"
              className="text-[#adb5bd] text-[14px] cursor-pointer select-none"
            >
              Accept Term and Conditions
            </label>
          </span>
        </div>
        <div className="w-[100%]">
          <button className="block h-[60px] leading-[60px] rounded-[7px] text-[14px] font-[600] bg-[#343a40] text-[#fff] text-center w-[100%] mb-[4px] ">
            Register
          </button>
          <h6 className="font-[600] text-[#adb5bd] text-[14px] leading-[32px]">
            Already have account
            <Link href={"/login"} className="font-[600] text-blue ml-[4px]">
              Login
            </Link>
          </h6>
        </div>
      </form>
    </div>
  );
};

export default Register;
