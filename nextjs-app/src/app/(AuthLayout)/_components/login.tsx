"use client";
import { IconLock, IconMail } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { SignInResponse, signIn } from "next-auth/react";
import {
  FunctionComponent,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { UseFormGetValues, useForm } from "react-hook-form";
import { createAxios } from "@/app/_services/createInstance";
import { useRouter } from "next/navigation";
interface LoginProps {}
type loginForm = {
  username: string;
  password: string;
};
const remember = (
  rememberCheck: RefObject<HTMLInputElement>,
  getValues: UseFormGetValues<loginForm>
) => {
  if (rememberCheck.current) {
    if (rememberCheck.current.checked) {
      const loginData: loginForm = getValues();
      localStorage.setItem("myapp-username", loginData.username);
      localStorage.setItem("myapp-password", loginData.password);
    } else {
      localStorage.setItem("myapp-username", "");
      localStorage.setItem("myapp-password", "");
    }
  }
};
const Login: FunctionComponent<LoginProps> = () => {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onSubmit",
    // reValidateMode: "onChange",
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const rememberCheck = useRef<HTMLInputElement>(null);

  const axiosClient = createAxios();
  const router = useRouter();
  const onSubmit = async (values: loginForm) => {
    remember(rememberCheck, getValues);
    try {
      await signIn("credentials", {
        ...values,
        callbackUrl: "/",
      });
    } catch (error) {
      console.log(error);
    }
  };
  const onError = (error: any): void => {
    console.log("ERROR:::", error);
  };
  useEffect(() => {
    // Check if window is defined (client side)
    if (typeof window !== "undefined") {
      const usernameSaved = localStorage.getItem("myapp-username") || "";
      const password = localStorage.getItem("myapp-password") || "";
      setValue("username", usernameSaved);
      setValue("password", password);
      if (rememberCheck.current && usernameSaved && password) {
        rememberCheck.current.checked = true;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="w-[fit-content] mx-[auto] p-[16px] min-w-[380px] max-w-[400px]">
      <h2 className="text-[30px] font-[700] mb-[1rem] text-left">
        Login into
        <br /> your account
      </h2>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
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
        <div className="mb-[4px] relative w-[100%] border-none">
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
            <span className="text-red text-[14px] pl-[16px] block">
              {errors.password?.message}
            </span>
          ) : (
            ""
          )}
        </div>
        <div className="flex justify-between w-[100%] mt-4px mb-[16px]">
          <span className="flex items-center ">
            <input
              ref={rememberCheck}
              id="exampleCheck5"
              type="checkbox"
              className=" cursor-pointer rounded-[0.25em] mr-[6px] w-[1em] h-[1em] align-top bg-[#fff] bg-no-repeat bg-center bg-contain border-[1px] border-solid border-[#00000040] block appearance-none checked:bg-[#1e74fd] checked:border-[#1e74fd] "
            ></input>
            <label
              htmlFor="exampleCheck5"
              className="text-[#adb5bd] text-[14px] cursor-pointer select-none"
            >
              Remember me
            </label>
          </span>
          <Link href={"/"} className="font-[600] text-[14px] text-[#495057]">
            Forgot your Password?
          </Link>
        </div>
        <div className="w-[100%]">
          <button
            type="submit"
            className="block h-[60px] leading-[60px] rounded-[7px] text-[14px] font-[600] bg-[#343a40] text-[#fff] text-center w-[100%] mb-[4px] "
          >
            Login
          </button>
          <h6 className="font-[600] text-[#adb5bd] text-[14px] leading-[32px]">
            Dont have account
            <Link href={"/register"} className="font-[600] text-blue ml-[4px]">
              Register
            </Link>
          </h6>
        </div>
        <div className="w-[100%] text-center mt-[8px]">
          <h6 className="font-[600] text-[#adb5bd] text-[14px] leading-[32px]">
            Or, Sign in with your social account
          </h6>
          <button
            className="flex h-[60px] leading-[60px] rounded-[7px] text-[14px] font-[600] bg-blue text-[#fff] text-center w-[100%] mb-[8px] "
            type="button"
          >
            <span className="ml-[8px] mr-[48px]  my-[auto]">
              <Image
                src={"https://uitheme.net/sociala/images/icon-1.png"}
                width={40}
                height={40}
                alt="logo google"
              ></Image>
            </span>
            Sign in with Google
          </button>
          <button className="flex h-[60px] leading-[60px] rounded-[7px] text-[14px] font-[600] bg-[#3b5999] text-[#fff] text-center w-[100%] mb-[8px] ">
            <span className="ml-[8px] mr-[48px]  my-[auto]">
              <Image
                src={"https://uitheme.net/sociala/images/icon-3.png"}
                width={40}
                height={40}
                alt="logo facebook"
              ></Image>
            </span>
            Sign in with Facebook
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
