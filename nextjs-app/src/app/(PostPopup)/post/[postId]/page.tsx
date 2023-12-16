"use client";
import { motion, useAnimation } from "framer-motion";
import {
  IconArrowsDiagonal,
  IconBolt,
  IconX,
  IconZoomIn,
  IconZoomOut,
} from "@tabler/icons-react";
import Tippy from "@tippyjs/react/headless";
import { FunctionComponent, useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { createAxios } from "@/app/_services/createInstance";
import { getPost } from "@/app/_services/api";

interface PostPageProps {
  params: { postId: string };
}

const PostPage: FunctionComponent<PostPageProps> = ({ params }) => {
  const [zoom, setZoom] = useState<number>(1);
  const [fullScreen, setFullScreen] = useState<boolean>(false);
  const router = useRouter();
  const controls = useAnimation();
  const ref = useRef<HTMLImageElement>(null);
  const axiosClient = createAxios();
  const { isLoading, error, data } = useQuery({
    queryKey: ["postData"],
    queryFn: () => getPost(axiosClient),
    enabled: !!params.postId,
  });
  const handleZoom = (newZoom: number) => {
    if (newZoom >= 0.5 && newZoom <= 2) {
      setZoom(newZoom);
      controls.start({ scale: newZoom });
    }
  };
  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (fullScreen && event.key === "ESC") {
        if (document.fullscreenElement && document.exitFullscreen) {
          document.exitFullscreen();
        }
        setFullScreen(!fullScreen);
      }
    };
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fullScreen]);
  const toggleFullScreen = () => {
    if (!fullScreen) {
      // Enter fullscreen
      if (ref.current && ref.current.requestFullscreen) {
        setZoom(1);
        ref.current.requestFullscreen();
      }
    } else {
      // Exit fullscreen
      if (document.fullscreenElement) {
        // Check if the document is in fullscreen mode
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
      setFullScreen(!fullScreen);
    }
  };

  if (ref.current) {
    ref.current.style.scale = zoom.toString();
  }

  return (
    <div className={`overflow-hidden h-[100vh] bg-[black] relative z-10 `}>
      <motion.div
        className="absolute top-0 left-0 right-0 bottom-0 z-[-1]"
        animate={controls}
      >
        <Swiper
          slidesPerView={1}
          navigation={true}
          keyboard={{
            enabled: true,
          }}
          modules={[Navigation, Keyboard]}
        >
          {!isLoading
            ? data.posts
                .find((post: postType) => post.id === params.postId)
                .images.map((image: imageType) => (
                  <SwiperSlide key={image.id}>
                    <Image
                      ref={ref}
                      src={image.src}
                      width={0}
                      height={0}
                      loading="lazy"
                      sizes="100vw"
                      className="object-contain h-[100vh] w-[100vw] scale-100"
                      alt=""
                    ></Image>
                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                  </SwiperSlide>
                ))
            : ""}
        </Swiper>
      </motion.div>
      <div className="flex justify-between">
        <div className="flex items-center mt-[16px]">
          <Tippy
            render={(attrs) => {
              return (
                <div
                  className={`bg-[#000] shadow-full  rounded-[0.3rem] text-[11px] font-[600] p-[8px] text-[#ccc]`}
                  tabIndex={-1}
                  {...attrs}
                >
                  Nhấn ESC để đóng
                </div>
              );
            }}
          >
            <IconX
              width={30}
              height={30}
              className="text-[#ccc]  cursor-pointer outline-none ml-[16px]"
              onClick={() => {
                router.back();
              }}
            ></IconX>
          </Tippy>
          <span className="bg-[#ccc] ml-[16px] rounded-[30px] p-[8px] cursor-pointer">
            <IconBolt
              width={30}
              height={30}
              className="  text-[#10d876] "
              stroke={2}
            ></IconBolt>
          </span>
        </div>
        <div className="flex items-center mt-[16px]">
          <span
            className="bg-[#1f1e1e] mr-[16px] rounded-[30px] p-[6px] cursor-pointer"
            onClick={() => handleZoom(zoom + 0.5)}
          >
            <IconZoomIn
              width={25}
              height={25}
              className="  text-[#ccc] "
              stroke={2}
            ></IconZoomIn>
          </span>
          <span
            className="bg-[#1f1e1e] mr-[16px] rounded-[30px] p-[6px] cursor-pointer"
            onClick={() => handleZoom(zoom - 0.5)}
          >
            <IconZoomOut
              width={25}
              height={25}
              className="text-[#ccc] "
              stroke={2}
            ></IconZoomOut>
          </span>
          <span
            className="bg-[#1f1e1e] mr-[16px] rounded-[30px] p-[6px] cursor-pointer"
            onClick={toggleFullScreen}
          >
            <IconArrowsDiagonal
              width={25}
              height={25}
              className="text-[#ccc] "
              stroke={2}
            ></IconArrowsDiagonal>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
