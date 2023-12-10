import { AxiosInstance } from "axios";
export const getPost = async (axiosClient: AxiosInstance) => {
  try {
    const res = await axiosClient.get("/posts");
    return res.data;
  } catch (error) {
    console.log("Err fetch data");
    return error;
  }
};
export const getCommentfromPostId = async (
  axiosClient: AxiosInstance,
  postId: string
) => {
  try {
    const res = await axiosClient.get(`/posts/${postId}/comments`);
    return res.data;
  } catch (error) {
    console.log("Err fetch data");
    return error;
  }
};
