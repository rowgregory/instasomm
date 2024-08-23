import Image from "next/image";
import React, { FC } from "react";

interface PitureProps {
  src: string;
  alt: string;
  className: string;
  priority: boolean;
  imgRef?: any;
}

const Picture: FC<PitureProps> = ({
  src,
  alt,
  className,
  priority = false,
  imgRef,
}) => {
  return (
    <Image
      ref={imgRef}
      src={src}
      alt={alt}
      width="0"
      height="0"
      sizes="100vw"
      className={className}
      priority={priority}
    />
  );
};

export default Picture;
