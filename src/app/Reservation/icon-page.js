import ServicesCard from "@/components/services";
import Image from "next/image";
import React from "react";

const IconPage = ({
  title,
  problem,
  category,
  ideaDescription,
  proposer,
  imageUrl,
  imageAlt,
  width = 400,
  height = 400,
}) => {
  const ideas = [
    {
      subTitle: "More like this",
      buttonDescription: "See More",
    },
  ]

  return (
    <div className="flex relative min-h-screen flex-col overflow-hidden items-start justify-start gap-10 p-14 px-10 lg:pb-24 2xl:pb-40 lg:px-40 2xl:px-52 bg-neutral-50 z-[0]"
    >
      <a href="/">
        <Image
          src="/caret-square-left.png"
          alt="panah kiri"
          width={60}
          height={60}
          className="w-[45px] h-[45px] lg:w-[60px] lg:h-[60px] z-[2] hover:cursor-pointer"
        ></Image>
      </a>

      <h1 className="text-black font-pt_sans text-[30px] lg:text-3xl font-normal">{title}</h1>

      <Image
        src={imageUrl}
        alt={imageAlt}
        width={width}
        height={height}
        className={`w-[300px] h-[300px] self-center lg:w-[${width}px] lg:h-[${height}px]`}
      />

      {/* PROBLEM */}
      <div className="flex flex-col gap-2">
        <h2 className="text-black font-pt_sans text-[16px] lg:text-2xl font-bold">Problem</h2>
        <p className="text-black font-pt_sans text-[16px] lg:text-2xl font-normal">{problem}</p>
      </div>

      {/* CATEGORY */}
      <div className="flex flex-col gap-2">
        <h2 className="text-black font-pt_sans text-[16px] lg:text-2xl font-bold">Category</h2>
        <p className="text-black font-pt_sans text-[16px] lg:text-2xl font-normal">{category}</p>
      </div>

      {/* IDEA DESCRIPTION */}
      <div className="flex flex-col gap-2">
        <h2 className="text-black font-pt_sans text-[16px] lg:text-2xl font-bold">Idea description</h2>
        <p className="text-black font-pt_sans text-[16px] lg:text-2xl font-normal">{ideaDescription}</p>
      </div>

      {/* PROPOSER */}
      <div className="flex flex-col gap-2 mb-12 lg:mb-24">
        <h2 className="text-black font-pt_sans text-[16px] lg:text-2xl font-bold">Proposer</h2>
        <p className="text-black font-pt_sans text-[16px] lg:text-2xl font-normal underline">{proposer}</p>
      </div>

      {ideas.map((idea, index) => (
        <ServicesCard
          key={index}
          subTitle={idea.subTitle}
          buttonDescription={idea.buttonDescription}
        />
      ))}
    </div >
  );
};

export default IconPage;
