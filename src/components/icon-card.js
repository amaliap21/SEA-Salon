import Image from "next/image";
import Link from "next/link";
import React from "react";

const IconCard = ({
  linkText,
  linkUrl,
  imageUrl,
  imageAlt,
  width = 200,
  height = 200,
}) => {
  return (
    <div
      className="flex flex-col bg-[#D4D4D5] w-full sm:w-fit sm:max-w-[300px] lg:min-h-[300px] text-black px-9 pt-[20px] pb-6 lg:pt-[35px] lg:pb-10 font-sans items-center rounded-lg"
    >
      <div className="flex flex-row sm:flex-col items-start justify-between gap-5">
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={width}
          height={height}
          className={`w-[100px] h-[100px] lg:w-[175px] lg:h-[175px] xl:w-[200px] xl:h-[200px] self-center`}
        />
        <Link href={`${linkUrl}`} className="text-decoration-line: underline text-[18px] lg:text-xl xl:text-2xl">{linkText}</Link>
      </div>
    </div>
  );
};

export default IconCard;
