import { FunctionComponent, ReactNode } from "react";
import PostItem from "../../../_components/Post/PostItem";
import Header from "./_component/Header";
import Sidebar from "./_component/Sidebar";
import { useQuery } from "@tanstack/react-query";
import { getPost } from "@/app/_services/api";
import { createAxios } from "@/app/_services/createInstance";
import Post from "./_component/Post";
interface PostLayoutProps {
  children: ReactNode;
  params: { postId: string };
}

const PostLayout: FunctionComponent<PostLayoutProps> = ({
  children,
  params,
}) => {
  return (
    <div className="flex h-[100vh]">
      <div className="flex-1 relative overflow-hidden h-[100vh]">
        {children}
      </div>
      <div className="w-[440px] relative">
        <div className="h-[56.8px] border-b-[1px] border-gray">
          <Header></Header>
        </div>
        <div className="flex">
          <Post postId={params.postId}></Post>
          <Sidebar></Sidebar>
        </div>
      </div>
    </div>
  );
};

export default PostLayout;
