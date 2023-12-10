import dynamic from "next/dynamic";
import {
  FunctionComponent,
  useState,
  useEffect,
  ReactNode,
  Fragment,
} from "react";
import { useInView } from "react-intersection-observer";

interface PostListProps {
  data: Array<postType>;
}

const DynamicPost = dynamic(() => import("./PostItem"), {
  loading: () => <p>Loading...</p>,
});
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const PostList: FunctionComponent<PostListProps> = ({ data }) => {
  const [page, setPage] = useState(0);
  const [postList, setPostList] = useState<Array<postType>>([]);
  const { ref, inView } = useInView();
  const loadMoreDynamicPost = async () => {
    // Thực hiện delay 2 giây trước khi tải thêm dữ liệu
    await delay(500);
    // Tính toán trang tiếp theo
    const nextPage = page + 1;

    // Lấy bài viết mới từ mảng data
    const newPost = nextPage <= data.length ? data[nextPage - 1] : null;
    // Cập nhật state postList và page
    setPostList((prevPost: postType[]) => {
      // Kiểm tra newPost có giá trị không null trước khi thêm vào mảng
      return newPost !== null ? [...prevPost, newPost] : prevPost;
    });
    setPage(nextPage);
  };

  useEffect(() => {
    if (inView) {
      // Kiểm tra xem đã hiển thị hết mảng data chưa
      if (page < data.length) {
        loadMoreDynamicPost();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);
  return (
    <>
      <Fragment>
        {postList.length > 0 ? (
          postList.map((post) => {
            return <DynamicPost key={post.id} postItem={post} />;
          })
        ) : (
          <p>No posts to display.</p>
        )}
        {!(page >= data.length) ? (
          <div ref={ref} className="mt-[20px] w-[100%] h-[50px] text-center">
            Loading...
          </div>
        ) : (
          ""
        )}
      </Fragment>
    </>
  );
};

export default PostList;
