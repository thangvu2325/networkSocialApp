import { FunctionComponent, ReactNode } from "react";
import PostItem from "../../../_components/Post/PostItem";
import Header from "./_component/Header";
import Sidebar from "./_component/Sidebar";
interface PostLayoutProps {
  children: ReactNode;
}

const PostLayout: FunctionComponent<PostLayoutProps> = ({ children }) => {
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
          <PostItem
            className="flex-1 rounded-none "
            fullHeight
            postItem={{
              id: "postId",
              userId: "userId",
              text: "",
              images: [],
              videos: [],
              comments: [
                {
                  id: "1",
                  text: "test",
                  userId: "2",
                  postId: "string",
                  likes: [],
                  disLikes: [],
                  commentList: [],
                },
                {
                  id: "2",
                  text: "test",
                  userId: "3",
                  postId: "string",
                  likes: [],
                  disLikes: [],
                  commentList: [],
                },
                {
                  id: "3",
                  text: "test",
                  userId: "4",
                  postId: "string",
                  likes: [],
                  disLikes: [],
                  commentList: [],
                },
                {
                  id: "4",
                  text: "test",
                  userId: "5",
                  postId: "string",
                  likes: [],
                  disLikes: [],
                  commentList: [],
                },
                {
                  id: "5",
                  text: "test",
                  userId: "6",
                  postId: "string",
                  likes: [],
                  disLikes: [],
                  commentList: [],
                },
                {
                  id: "6",
                  text: "test",
                  userId: "7",
                  postId: "string",
                  likes: [],
                  disLikes: [],
                  commentList: [],
                },
                {
                  id: "7",
                  text: "test",
                  userId: "8",
                  postId: "string",
                  likes: [],
                  disLikes: [],
                  commentList: [],
                },
                {
                  id: "8",
                  text: "test",
                  userId: "9",
                  postId: "string",
                  likes: [],
                  disLikes: [],
                  commentList: [],
                },
                {
                  id: "9",
                  text: "test",
                  userId: "10",
                  postId: "string",
                  likes: [],
                  disLikes: [],
                  commentList: [],
                },
                {
                  id: "10",
                  text: "test",
                  userId: "string",
                  postId: "string",
                  likes: [],
                  disLikes: [],
                  commentList: [],
                },
                {
                  id: "11",
                  text: "test",
                  userId: "string",
                  postId: "string",
                  likes: [],
                  disLikes: [],
                  commentList: [],
                },
                {
                  id: "12",
                  text: "test",
                  userId: "string",
                  postId: "string",
                  likes: [],
                  disLikes: [],
                  commentList: [],
                },
                {
                  id: "13",
                  text: "test",
                  userId: "string",
                  postId: "string",
                  likes: [],
                  disLikes: [],
                  commentList: [],
                },
              ],
              shares: [],
              likes: [],
              disLikes: [],
              createdAt: new Date("2023-11-13"),
              updateAt: new Date("2023-11-13"),
            }}
          ></PostItem>
          <Sidebar></Sidebar>
        </div>
      </div>
    </div>
  );
};

export default PostLayout;
