import {
  CSSProperties,
  FunctionComponent,
  Ref,
  useState,
  Fragment,
} from "react";
import dynamic from "next/dynamic";
interface CommentListProps {
  data: Array<commentType>;
  forwardedRef: Ref<HTMLDivElement>;
  style?: CSSProperties;
  className?: string | undefined;
  showAllComment: boolean;
}
const DynamicCommentBoxComponent = dynamic(() => import("./CommentBox"), {
  ssr: false,
});
const COMMENTS_PER_LOAD = 10;

const CommentList: FunctionComponent<CommentListProps> = ({
  data,
  forwardedRef,
  style,
  className,
  showAllComment = false,
}) => {
  const [showMore, setShowMore] = useState<number>(0);
  const INITIAL_COMMENTS_TO_SHOW = showAllComment ? 10 : 2;
  const visibleComments = data.slice(
    0,
    INITIAL_COMMENTS_TO_SHOW + COMMENTS_PER_LOAD * showMore
  );
  const remainingComments =
    data.length - (INITIAL_COMMENTS_TO_SHOW + COMMENTS_PER_LOAD * showMore);
  const commentsToLoad =
    remainingComments > COMMENTS_PER_LOAD
      ? COMMENTS_PER_LOAD
      : remainingComments;
  return (
    <div
      ref={forwardedRef}
      style={style}
      className={`${
        showAllComment ? "h-[100vh]" : "max-h-[400px]"
      } overscroll-contain overflow-y-scroll scrollCustom scroll-[smooth] ${className}`}
    >
      {visibleComments.map((comment) => {
        const subCommentList = comment.commentList;
        return (
          <Fragment key={comment.id}>
            <DynamicCommentBoxComponent comment={comment} />
            <div className="ml-[48px] animate-dropdown">
              {subCommentList?.length
                ? subCommentList.map((subComment) => (
                    <DynamicCommentBoxComponent
                      key={subComment.id}
                      comment={subComment}
                    ></DynamicCommentBoxComponent>
                  ))
                : ""}
            </div>
          </Fragment>
        );
      })}
      {remainingComments > 0 ? (
        <span
          className="mt-[16px] mb-[8px] rounded-[4px] font-[600] text-[14px] hover:underline cursor-pointer"
          onClick={() => {
            setShowMore(showMore + 1);
          }}
        >
          Xem thêm {commentsToLoad} bình luận
        </span>
      ) : (
        <span
          className="mt-[16px] mb-[8px] rounded-[4px] font-[600] text-[14px] hover:underline cursor-pointer"
          onClick={() => {
            setShowMore(0);
          }}
        >
          Ẩn bình luận
        </span>
      )}
    </div>
  );
};

export default CommentList;
