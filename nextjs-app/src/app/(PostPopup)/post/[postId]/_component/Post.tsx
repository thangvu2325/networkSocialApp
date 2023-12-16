"use client";
import PostItem from "@/app/_components/Post/PostItem";
import { getPost } from "@/app/_services/api";
import { createAxios } from "@/app/_services/createInstance";
import { useQuery } from "@tanstack/react-query";
import { FunctionComponent } from "react";

interface PostProps {
  postId: string;
}
const Post: FunctionComponent<PostProps> = ({ postId }) => {
  const axiosClient = createAxios();
  const { isLoading, error, data } = useQuery({
    queryKey: ["postData"],
    queryFn: () => getPost(axiosClient),
    enabled: !!postId,
  });
  return (
    <PostItem
      className="flex-1 rounded-none"
      fullHeight
      imageShow={false}
      postItem={
        isLoading ? "" : data.posts.find((post: postType) => post.id === postId)
      }
    />
  );
};

export default Post;
