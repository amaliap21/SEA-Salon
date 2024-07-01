import Image from "next/image";
import React from 'react';
import IdeasCard from "./services";

const Hero = () => {
    const ideas = [
        {
            subTitle: "Services",
            buttonDescription: "See More",
        },
    ]

    return (
        <div className="flex flex-col gap-10 lg:gap-5 xl:px-20">
            <div className="w-full flex flex-col-reverse items-center justify-center lg:items-start lg:flex-row lg:justify-start lg:gap-[225px] xl:gap-[150px] 2xl:gap-[275px]">
                <div className="flex-1 flex flex-col justify-start items-center lg:items-start my-auto">
                    <h1 className="text-black font-pt_sans lg:leading-[70px] text-[30px] lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold ">
                        SEA Salon
                    </h1>
                    <p className="text-slate-500 text-center lg:text-left italic mt-[15px] break-normal font-pt_sans text-[16px] lg:text-2xl xl:text-3xl font-[400] leading-[140%]">
                        Beauty and Elegance Redefined
                    </p>
                </div>
                <Image
                    src="/salon.jpeg"
                    alt="Salon"
                    width={600}
                    height={600}
                    className="w-[225px] h-[225px] lg:w-[300px] lg:h-[300px] xl:w-[350px] xl:h-[350px] 2xl:w-[400px] 2xl:h-[400px] drop-shadow-[2px_5px_4px_12px_#FFFFFF]  z-[2] object-center object-contain"
                ></Image>
            </div>

            {ideas.map((idea, index) => (
                <IdeasCard
                    key={index}
                    subTitle={idea.subTitle}
                    buttonDescription={idea.buttonDescription}
                />
            ))}
        </div>
    );
};

export default Hero;