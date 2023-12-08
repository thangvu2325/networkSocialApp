import { AxiosStatic } from "axios";
const getPost = async (axiosClient: AxiosStatic) => {
  try {
    const res = await axiosClient.get("/posts");
    return res.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
