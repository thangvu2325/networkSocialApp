"use client";
import {
  IconAlertCircle,
  IconAlertOctagon,
  IconBookmark,
  IconDots,
  IconHeart,
  IconLock,
  IconMessageCircle2,
  IconShare,
  IconThumbUp,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FunctionComponent,
  useEffect,
  useCallback,
  useState,
  useRef,
} from "react";
import ImagePreview from "../Image/ImagePreview";
import CommentList from "../Comment/CommentList";
import PopupMenu from "../PopupMenu";
import PopupTemplate from "../PopupMenu/PopupTemple";

interface PostItemProps {
  postItem: postType;
  className?: string | undefined;
  fullHeight?: boolean;
}
const getUserById = (id: string) => {
  return {
    id: id,
    username: "Surfiya Zakir",
    avatar: "https://uitheme.net/sociala/images/user-7.png",
  };
};
const PostItem: FunctionComponent<PostItemProps> = ({
  postItem,
  fullHeight,
  className,
}) => {
  const [user, setUser] = useState<userType>({
    avatar: "",
    username: "",
    id: "",
  });
  const [emotion, setEmotion] = useState<emotionType[]>(postItem.likes ?? []);
  const commentListRef = useRef<HTMLDivElement>(null);
  const [showMoreText, setShowMoreText] = useState(false);
  const toggleShowMoreText = useCallback(() => {
    setShowMoreText((prev) => !prev);
  }, []);
  useEffect(() => {
    const fetchDataGetUser = (): void => {
      const user = getUserById(postItem.userId);
      setUser(user);
    };
    fetchDataGetUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div
      className={`px-[24px] pt-[24px] pb-[16px] w-[100%] bg-[#fff] flex flex-col rounded-[15px] ${
        fullHeight ? "h-[calc(100vh-56.8px)]" : "mb-[16px]"
      } ${className ?? ""}`}
    >
      <div className="flex">
        <figure className="rounded-[45px] w-[45px] h-[45px] mr-[16px] mb-[16px] ">
          <Image
            src={"https://uitheme.net/sociala/images/user-7.png"}
            width={45}
            height={45}
            alt="avatar"
          ></Image>
        </figure>
        <div className="flex flex-col mt-[4px] mb-[8px] text-[12px]">
          <span className="font-[700] text-[#212529]  leading-[1.2]">
            <h2>{user.username}</h2>
          </span>
          <span className="mt-[4px] font-[500] text-[#adb5bd] leading-[1.4]">
            <h3>{postItem.updateAt.toDateString()}</h3>
          </span>
        </div>
        <PopupMenu
          offset={[-5, 10]}
          popUpTemplate={
            <PopupTemplate>
              <div className="flex items-center cursor-pointer rounded-4px">
                <IconBookmark
                  width={25}
                  height={25}
                  className="mr-[16px] text-[#adb5bd]"
                ></IconBookmark>
                <span className="flex flex-col mr-[24px]  leading-[1.2] text-[12px]  text-[#212529]">
                  <h5 className="font-[600]">Save Link</h5>
                  <p className="mt-[4px] text-[#adb5bd] font-[500] text-[10px] leading-[1.4]">
                    Add this to your saved items
                  </p>
                </span>
              </div>
              <div className="flex items-center cursor-pointer rounded-4px mt-[16px] ">
                <IconAlertCircle
                  width={25}
                  height={25}
                  className="mr-[16px] text-[#adb5bd]"
                ></IconAlertCircle>
                <span className="flex flex-col mr-[24px]  leading-[1.2] text-[12px]  text-[#212529]">
                  <h5 className="font-[600]">Hide Post</h5>
                  <p className="mt-[4px] text-[#adb5bd] font-[500] text-[10px] leading-[1.4]">
                    Save to your saved items
                  </p>
                </span>
              </div>
              <div className="flex items-center cursor-pointer rounded-4px mt-[16px]">
                <IconAlertOctagon
                  width={25}
                  height={25}
                  className="mr-[16px] text-[#adb5bd]"
                ></IconAlertOctagon>
                <span className="flex flex-col mr-[24px]  leading-[1.2] text-[12px]  text-[#212529]">
                  <h5 className="font-[600]">Hide all from Group</h5>
                  <p className="mt-[4px] text-[#adb5bd] font-[500] text-[10px] leading-[1.4]">
                    Save to your saved items
                  </p>
                </span>
              </div>
              <div className="flex items-center cursor-pointer rounded-4px mt-[16px]">
                <IconLock
                  width={25}
                  height={25}
                  className="mr-[16px] text-[#adb5bd]"
                ></IconLock>
                <span className="flex flex-col mr-[24px]  leading-[1.2] text-[12px]  text-[#212529]">
                  <h5 className="font-[600]">Unfollow Group</h5>
                  <p className="mt-[4px] text-[#adb5bd] font-[500] text-[10px] leading-[1.4]">
                    Save to your saved items
                  </p>
                </span>
              </div>
            </PopupTemplate>
          }
        >
          <button className=" border-0 pr-[1.5rem] flex items-center ml-[auto] w-[45px] h-[45px] rounded-[45px] bg-[#f5f5f5] relative">
            <IconDots
              width={18}
              height={18}
              stroke={3}
              className="text-[#212529] absolute left-[50%] translate-x-[-50%]"
            ></IconDots>
          </button>
        </PopupMenu>
      </div>
      <div className="flex- mr-[3rem]">
        <span className="mb-[16px] font-[500] text-[#adb5bd] text-[12px] leading-[26px] overflow-hidden ">
          <p
            onClick={toggleShowMoreText}
            className={` cursor-pointer text-ellipsis ${
              showMoreText
                ? "line-clamp-none"
                : postItem.images?.length
                  ? "line-clamp-3"
                  : "line-clamp-6"
            } whitespace-pre-line `}
          >
            {postItem.text}
          </p>
        </span>
      </div>
      <div className="">
        <div className="mx-[-15px] flex flex-wrap justify-center">
          {postItem.images?.length
            ? postItem.images
                .slice(0, 3)
                .map((image: imageType, index, Array) => {
                  const isLastElement: boolean = index === Array.length - 1;
                  return (
                    <div
                      className="p-[4px] sm:flex-grow-0 sm:flex-shrink-0 sm:basis-[auto] sm:w-[calc(100%/3)] relative"
                      key={image.id}
                    >
                      <Link href={`/post/${postItem.id}`} className="relative">
                        <ImagePreview
                          imageData={image}
                          i={index}
                          imagesLength={postItem.images.length}
                        ></ImagePreview>
                        {isLastElement && postItem.images?.length > 3 ? (
                          <span className="w-[100%] h-[100%] absolute top-0 left-0 bg-[#00000099] rounded-[0.3rem]  font-[600] text-[#fff] text-[20px] ">
                            <span className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
                              +{postItem.images?.length - 3}
                            </span>
                          </span>
                        ) : (
                          ""
                        )}
                      </Link>
                    </div>
                  );
                })
            : ""}
        </div>
      </div>
      <div className=" mt-[16px] flex items-center">
        <motion.span
          whileTap={{ scale: 0.97 }}
          className="w-[25px] h-[25px] cursor-pointer rounded-[25px] relative bg-[linear-gradient(135deg,#05f,#09f)] mr-[4px]"
          onClick={() => {
            setEmotion((prev) => [...prev, { userId: "test", id: "test" }]);
          }}
        >
          <IconThumbUp
            width={20}
            height={20}
            className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-[#fff] "
          ></IconThumbUp>
        </motion.span>
        <motion.span
          whileTap={{ scale: 0.97 }}
          className="w-[25px] h-[25px] cursor-pointer rounded-[25px] relative bg-[linear-gradient(135deg,#e44d26,#f16529)] mr-[8px]"
        >
          <IconHeart
            width={20}
            height={20}
            className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-[#fff] "
          ></IconHeart>
        </motion.span>
        <span className=" mr-[4px]">
          <p className="font-[600] text-[#212529] leading-[26px] text-[12px]">
            {emotion.length}
          </p>
        </span>
        <span className="mr-[4px]">
          <motion.p
            whileTap={{ scale: 0.97 }}
            className="font-[600] text-[#212529] leading-[26px] text-[12px] flex items-center cursor-pointer"
            onClick={() => {
              const tab = commentListRef.current;
              if (tab) {
                const currentDisplay = tab.style.display;
                commentListRef.current.style.display =
                  currentDisplay === "none" ? "block" : "none";
              }
            }}
          >
            <span className="w-[35px] h-[35px] relative">
              <IconMessageCircle2
                width={25}
                height={25}
                className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
              ></IconMessageCircle2>
            </span>
            {postItem.comments?.length || 0} Comment
          </motion.p>
        </span>
        <span className=" mr-[4px] ml-[auto]">
          <p className="font-[600] text-[#212529] leading-[26px] text-[12px] flex items-center">
            <span className="w-[35px] h-[35px] relative">
              <IconShare
                width={25}
                height={25}
                className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
              ></IconShare>
            </span>
            Share
          </p>
        </span>
      </div>
      <CommentList
        className="flex-1"
        showAllComment={fullHeight ?? false}
        data={postItem?.comments}
        forwardedRef={commentListRef}
      ></CommentList>
    </div>
  );
};

export default PostItem;
