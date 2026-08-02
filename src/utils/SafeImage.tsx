"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";
import { default_image } from "@/assets";
import { getSafeImageUrl } from "@/utils/getSafeImageUrl";

type SafeImageProps = ImageProps & {
  src: any;
};

const SafeImage = ({ src, ...props }: SafeImageProps) => {
  const [imgSrc, setImgSrc] = useState(getSafeImageUrl(src));

  return (
    <Image
      {...props}
      src={imgSrc}
      onError={() => setImgSrc(default_image)}
    />
  );
};

export default SafeImage;
