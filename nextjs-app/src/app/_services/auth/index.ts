import { AxiosInstance } from "axios";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
export const registerRequest = async (
  axiosClient: AxiosInstance,
  user: userRegisterType,
  router: AppRouterInstance
) => {
  try {
    await axiosClient.post("/auth/register", user);
    router.push("login");
    return true;
  } catch (error) {
    console.log("Err fetch data");
    return error;
  }
};
