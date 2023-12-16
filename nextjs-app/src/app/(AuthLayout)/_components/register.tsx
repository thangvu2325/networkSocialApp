"use client";
import { registerRequest } from "@/app/_services/auth";
import { createAxios } from "@/app/_services/createInstance";
import { IconLock, IconMail, IconUser } from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FunctionComponent, useState } from "react";
import { useForm } from "react-hook-form";
interface RegisterProps {}
type registerForm = {
  nickName: string;
  username: string;
  password: string;
  repassword: string;
  confirmRule: boolean;
};
const Register: FunctionComponent<RegisterProps> = () => {
  const initState: registerForm = {
    nickName: "",
    username: "",
    password: "",
    repassword: "",
    confirmRule: false,
  };
  const [initialValues, setInitialValues] = useState(initState);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onSubmit",
    // reValidateMode: "onChange",
    defaultValues: initialValues,
  });
  const axiosClient = createAxios();
  const router = useRouter();
  const onSubmit = async (values: registerForm) => {
    const { repassword, confirmRule, ...user } = values;
    try {
      await registerRequest(axiosClient, user, router);
      alert("Đăng Ký thành công!!");
    } catch (error) {
      console.log(error);
    }
  };
  const onError = (error: any): void => {
    console.log("ERROR:::", error);
  };
  return (
    <div className="w-[fit-content] mx-[auto] p-[16px] min-w-[380px] max-w-[400px]">
      <h2 className="text-[30px] font-[700] mb-[1rem] text-left">
        Create
        <br /> your account
      </h2>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div className="mb-[16px] relative w-[100%] border-none">
          <IconUser
            width={24}
            height={24}
            className="absolute left-[15px] top-[16px] text-[#9ca4b2]"
          ></IconUser>
          <input
            placeholder="Your Name"
            className="h-[60px] leading-[60px] w-[100%] rounded-[7px] outline-[#05f] block border-[2px] border-[#eee] border-solid py-[6px] pl-[48px] pr-[12px] text-[#212529] font-[600] text-[14px]"
            {...register("nickName", {
              required: "Field này là bắt buộc.",
            })}
          ></input>
          {errors.nickName ? (
            <span className="text-red text-[14px] pl-[16px] mb-[-12px] block">
              {errors.nickName?.message}
            </span>
          ) : (
            ""
          )}
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
            {...register("username", {
              required: "Field này là bắt buộc.",
            })}
          ></input>
          {errors.username ? (
            <span className="text-red text-[14px] pl-[16px] mb-[-12px] block">
              {errors.username?.message}
            </span>
          ) : (
            ""
          )}
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
            {...register("password", {
              required: "Field này là bắt buộc.",
            })}
          ></input>
          {errors.password ? (
            <span className="text-red text-[14px] pl-[16px] mb-[-12px] block">
              {errors.password?.message}
            </span>
          ) : (
            ""
          )}
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
            {...register("repassword", {
              required: "Field này là bắt buộc.",
            })}
          ></input>
          {errors.repassword ? (
            <span className="text-red text-[14px] pl-[16px] mb-[-12px] block">
              {errors.repassword?.message}
            </span>
          ) : (
            ""
          )}
        </div>
        <div className="flex justify-between w-[100%] mt-4px mb-[16px]">
          <span className="flex items-center ">
            <input
              id="exampleCheck5"
              type="checkbox"
              className=" cursor-pointer rounded-[0.25em] mr-[6px] w-[1em] h-[1em] align-top bg-[#fff] bg-no-repeat bg-center bg-contain border-[1px] border-solid border-[#00000040] block appearance-none checked:bg-[#1e74fd] checked:border-[#1e74fd] "
              {...register("confirmRule", {
                required: "Field này là bắt buộc.",
              })}
            ></input>

            <label
              htmlFor="exampleCheck5"
              className="text-[#adb5bd] text-[14px] cursor-pointer select-none"
            >
              Accept Term and Conditions
            </label>
          </span>
        </div>
        {errors.confirmRule ? (
          <span className="text-red text-[14px] pl-[16px] mt-[-10px] block">
            {errors.confirmRule?.message}
          </span>
        ) : (
          ""
        )}
        <div className="w-[100%]">
          <button
            type="submit"
            className="block h-[60px] leading-[60px] rounded-[7px] text-[14px] font-[600] bg-[#343a40] text-[#fff] text-center w-[100%] mb-[4px] "
          >
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
