"use client";
import { FunctionComponent, useEffect, useState } from "react";
import NextImage from "next/image";
import { AnimatePresence } from "framer-motion";
interface ImagePreviewProps {
  imageData: imageType;
  imagesPreview?: imageType[];
  imagesLength: number;
  i?: number;
}

const ImagePreview: FunctionComponent<ImagePreviewProps> = ({
  imageData,
  imagesLength,
  i,
}) => {
  return (
    <NextImage
      src={imageData?.url || ""}
      alt={`image ${i}`}
      width={0}
      height={0}
      sizes="100vw"
      style={{ width: "100%", height: "auto" }}
      loading="lazy"
      className="rounded-[0.3rem]"
    />
  );
};

export default ImagePreview;
