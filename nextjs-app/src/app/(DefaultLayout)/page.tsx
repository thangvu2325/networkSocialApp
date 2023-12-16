"use client";
import { FunctionComponent } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  IconCamera,
  IconDots,
  IconEdit,
  IconPhoto,
  IconVideo,
} from "@tabler/icons-react";
import Image from "next/image";
import Card from "../_components/Card";
import PostList from "../_components/Post/PostList";
import MenuList from "../_components/MenuList";
import { useQuery } from "@tanstack/react-query";
import { getPost } from "../_services/api";
import { createAxios } from "../_services/createInstance";
import { useSession } from "next-auth/react";
import Avatar from "../_components/Avatar";
interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const { data: session, status } = useSession();
  const axiosClient = createAxios();
  const { isLoading, error, data } = useQuery({
    queryKey: ["postData"],
    queryFn: () => getPost(axiosClient),
  });

  return (
    <div className="pt-[20px] pb-[200px] h-[2000px]">
      <div className="mx-[auto]">
        <div className="flex justify-center">
          <div className="w-[660px] max-lg:w-[100%] px-[15px] ">
            <div className=" overflow-hidden">
              <div
                className={` flex transition-all duration-0 ease-in cursor-pointer h-[200px] mb-[16px]`}
              >
                <Swiper
                  spaceBetween={0}
                  slidesPerView={"auto"}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                  className="shadow-sm"
                >
                  <SwiperSlide className="w-[fit-content]">
                    <Card type="add"></Card>
                  </SwiperSlide>
                  <SwiperSlide className="w-[fit-content]">
                    <Card></Card>
                  </SwiperSlide>
                  <SwiperSlide className="w-[fit-content]">
                    <Card></Card>
                  </SwiperSlide>
                  <SwiperSlide className="w-[fit-content]">
                    <Card></Card>
                  </SwiperSlide>
                  <SwiperSlide className="w-[fit-content]">
                    <Card></Card>
                  </SwiperSlide>
                  <SwiperSlide className="w-[fit-content]">
                    <Card></Card>
                  </SwiperSlide>
                  <SwiperSlide className="w-[fit-content]">
                    <Card></Card>
                  </SwiperSlide>
                  <SwiperSlide className="w-[fit-content]">
                    <Card></Card>
                  </SwiperSlide>
                  <SwiperSlide className="w-[fit-content]">
                    <Card></Card>
                  </SwiperSlide>
                  <SwiperSlide className="w-[fit-content]">
                    <Card></Card>
                  </SwiperSlide>
                  <SwiperSlide className="w-[fit-content]">
                    <Card></Card>
                  </SwiperSlide>
                  <SwiperSlide className="w-[fit-content]">
                    <Card></Card>
                  </SwiperSlide>
                  <SwiperSlide className="w-[fit-content]">
                    <Card></Card>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="px-[24px] pt-[24px] pb-[16px] mb-[16px] w-[100%] bg-[#fff] flex flex-col rounded-[15px]">
                <div className="flex-auto flex items-center h-[35px] cursor-pointer">
                  <span className="w-[35px] h-[35px] text-[#1e74fd] bg-[#f5f5f5] flex items-center justify-center rounded-[35px] mr-[8px]">
                    <IconEdit width={18} height={18}></IconEdit>
                  </span>
                  <span className="text-[#adb5bd] text-[12px] font-[600]">
                    Create Post
                  </span>
                </div>
                <div className="mt-[16px] flex  relative mb-[8.8px]">
                  <figure className="mt-[4px] ml-[8px] mb-[16px] absolute top-[3px]">
                    <Avatar
                      src={session?.user.image}
                      name={session?.user.nickName}
                    ></Avatar>
                  </figure>
                  <textarea
                    spellCheck={false}
                    name="message"
                    placeholder="What's on your mind?"
                    className=" h-[100px] w-[100%] font-[500] text-[12px] text-[#adb5bd] pl-[3rem] p-[0.5rem] rounded-[15px] resize-y border-[2px] border-solid border-[#f1f1f1] outline-none"
                  ></textarea>
                </div>
                <div className="flex items-center text-[12px] text-[#495057] font-[600] h-[45px]">
                  <button className=" border-0 pr-[1.5rem] flex items-center mr-[24px]">
                    <IconVideo
                      width={22}
                      height={22}
                      className="text-[#e50202] mr-[8px]"
                    ></IconVideo>
                    <span>Live Video</span>
                  </button>
                  <button className=" border-0 pr-[1.5rem] flex items-center">
                    <IconPhoto
                      width={22}
                      height={22}
                      className="text-[#10d876] mr-[8px]"
                    ></IconPhoto>
                    <span>Photo/Video</span>
                  </button>
                  <button className=" border-0 pr-[1.5rem] flex items-center">
                    <IconCamera
                      width={22}
                      height={22}
                      className="text-[#fe9431] mr-[8px]"
                    ></IconCamera>
                    <span>Feeling/Activity</span>
                  </button>
                  <button className=" border-0 pr-[1.5rem] flex items-center ml-[auto] w-[45px] h-[45px] rounded-[45px] bg-[#f5f5f5] relative">
                    <IconDots
                      width={18}
                      height={18}
                      stroke={3}
                      className="text-[#212529] absolute left-[50%] translate-x-[-50%]"
                    ></IconDots>
                  </button>
                </div>
              </div>
              {/* Post */}
              {!isLoading ? (
                <PostList data={data?.posts}></PostList>
              ) : error ? (
                <p>{error.message}</p>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="w-[330px] pr-[15px] h-[500px]  relative max-lg:hidden">
            <div className="mb-[16px]">
              <MenuList
                scrollMenu={false}
                type="user"
                className="mt-[0] pt-[0]"
                action={true}
                menuItemStyle="px-[4px] pt-[12px] scale-[1.1]"
                Header={
                  <div className="p-[24px]  flex justify-between items-center border-b-[1px] border-[#f3f3f3]">
                    <div className="text-[#212529] font-[700] text-[12px] leading-[1.2]">
                      Confirm Friend
                    </div>
                    <div className="text-[#1e74fd] font-[600] text-[12px] leading-[1.2]">
                      See all
                    </div>
                  </div>
                }
                data={[
                  {
                    navData: [
                      {
                        id: "9999910",
                        avatar: "https://uitheme.net/sociala/images/user-8.png",
                        title: "Hurin Seary",
                      },
                      {
                        id: "9999911",
                        avatar: "https://uitheme.net/sociala/images/user-8.png",
                        title: "Hurin Seary",
                      },
                      {
                        id: "9999912",
                        avatar: "https://uitheme.net/sociala/images/user-8.png",
                        title: "Hurin Seary",
                      },
                    ],
                  },
                ]}
              ></MenuList>
            </div>
            <div className="mb-[16px]">
              <MenuList
                scrollMenu={false}
                type="user"
                className="mt-[0] pt-[0] pb-[14px]"
                menuItemStyle=" bg-[#f5f5f5] relative py-[12px]  mt-[16px] !mx-[30px] scale-[1.1]"
                Header={
                  <div className="p-[24px]  flex justify-between items-center border-b-[1px] border-[#f3f3f3]">
                    <div className="text-[#212529] font-[700] text-[12px] leading-[1.2]">
                      Friend Request
                    </div>
                    <div className="text-[#1e74fd] font-[600] text-[12px] leading-[1.2]">
                      See all
                    </div>
                  </div>
                }
                data={[
                  {
                    navData: [
                      {
                        id: "9999921",
                        avatar: "https://uitheme.net/sociala/images/user-8.png",
                        title: "Hurin Seary",
                      },
                      {
                        id: "9999922",
                        avatar: "https://uitheme.net/sociala/images/user-8.png",
                        title: "Hurin Seary",
                      },
                      {
                        id: "9999923",
                        avatar: "https://uitheme.net/sociala/images/user-8.png",
                        title: "Hurin Seary",
                      },
                    ],
                  },
                ]}
              ></MenuList>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
