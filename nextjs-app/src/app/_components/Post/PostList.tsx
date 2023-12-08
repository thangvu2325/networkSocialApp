import dynamic from "next/dynamic";
import { FunctionComponent, useState, useEffect, ReactNode } from "react";
import { useInView } from "react-intersection-observer";

interface PostListProps {
  data: Array<postType>;
}

const DynamicPost = dynamic(() => import("./PostItem"), {
  loading: () => <p>Loading...</p>,
});
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const PostList: FunctionComponent<PostListProps> = ({ data }) => {
  const [page, setPage] = useState(1);
  const [postList, setPostList] = useState<Array<postType>>([]);
  const { ref, inView } = useInView();

  const loadMoreDynamicPost = async () => {
    // Thực hiện delay 2 giây trước khi tải thêm dữ liệu
    await delay(500);
    // Tính toán trang tiếp theo
    const nextPage = (page % data.length) + 1;

    // Lấy bài viết mới từ mảng data
    const newPost = data[nextPage - 1]; // Điều chỉnh index để tránh lỗi ngoại lệ

    // Cập nhật state postList và page
    setPostList((prevPost: postType[]) => [...prevPost, newPost]);
    setPage(nextPage);
  };

  useEffect(() => {
    if (inView) {
      loadMoreDynamicPost();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <>
      {postList.length > 0 ? (
        postList.map((post, index, Array) => {
          const isLastPost = Array.length - 1 === index;
          const Post: ReactNode = isLastPost ? (
            <>
              <DynamicPost key={index} postItem={post} />
            </>
          ) : (
            <DynamicPost key={index} postItem={post} />
          );

          return Post;
        })
      ) : (
        <p>No posts to display.</p>
      )}
      <div ref={ref} className="mt-[20px] w-[100%] h-[50px] text-center">
        {" "}
        Loading...
      </div>
    </>
  );
};

export default PostList;
