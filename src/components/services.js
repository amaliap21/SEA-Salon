"use client";
import React, { useState, useEffect } from 'react';
import IconCard from "@/components/icon-card";
import { Button } from './ui/button';

const IdeasCard = ({
    subTitle,
    buttonDescription,
}) => {
    const [showAllEvents, setShowAllEvents] = useState(buttonDescription !== 'See More');

    const events = [
        {
            linkText: (
                <span>
                    Haircuts and Styling (Bob, Pixie, etc.)
                </span>
            ),
            linkUrl: "/",
            imageAlt: "Haircuts and Styling",
            imageUrl: "/service-1.jpg",
            width: 200,
            height: 200,
        },
        {
            linkText: (
                <span>
                    Manicure and Pedicure
                </span>
            ),
            linkUrl: "/",
            imageAlt: "Manicure and Pedicure",
            imageUrl: "/service-2.jpg",
            width: 200,
            height: 200,
        },
        {
            linkText: (
                <span>
                    Facial Treatments (Mask, Peel, etc.)
                </span>
            ),
            linkUrl: "/",
            imageAlt: "Facial Treatments",
            imageUrl: "/service-3.jpg",
            width: 200,
            height: 200,
        },
        {

            linkText: (
                <span>
                    Waxing (armpit, leg, etc.)
                </span>
            ),
            linkUrl: "/",
            imageAlt: "Waxing",
            imageUrl: "/service-4.jpg",
            width: 200,
            height: 200,
        },
        {
            linkText: (
                <span>
                    Body Spa (Massage, Scrub, etc.)
                </span>
            ),
            linkUrl: "/",
            imageAlt: "Body Spa",
            imageUrl: "/service-5.jpeg",
            width: 200,
            height: 200,
        },
        {
            linkText: (
                <span>
                    Reflexology (Foot, Hand, etc.)
                </span>
            ),
            linkUrl: "/",
            imageAlt: "Reflexology",
            imageUrl: "/service-6.jpeg",
            width: 200,
            height: 200,
        },
    ];

    const displayedEvents = showAllEvents ? events : events.slice(0, 3);

    const handleButtonClick = () => {
        setShowAllEvents(!showAllEvents);
    };

    useEffect(() => {
        // Automatically show all events if buttonDescription is not 'See More'
        if (buttonDescription !== 'See More') {
            setShowAllEvents(true);
        }
    }, [buttonDescription]);

    const renderButton = () => {
        if (buttonDescription === 'See More' || buttonDescription === 'See Less') {
            return (
                <Button
                    type="submit"
                    variant="outline"
                    onClick={handleButtonClick}
                    className="mt-auto w-[100px] h-[40px] lg:w-[170px] lg:h-[60px] bg-[#262626] text-white duration-300 transition font-montserrat text-md lg:text-[25px] font-semibold rounded-[5px] px-[20px]"
                >
                    {showAllEvents ? 'See Less' : buttonDescription}
                </Button>
            );
        }
        return null;
    };

    return (
        <div className="flex flex-col items-center justify-center">
            {events.length > 3 && (
                <div className="w-full flex flex-row items-between justify-between lg:items-between lg:flex-row lg:justify-between lg:gap-20 2xl:gap-[300px] mb-5 md:mb-8 lg:mb-10">
                    <h2 className="text-black font-pt_sans lg:leading-[70px] text-[25px] lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold">
                        {subTitle}
                    </h2>
                    {renderButton()}
                </div>
            )}

            <div className="flex flex-wrap items-center justify-center w-full gap-x-8 xl:gap-x-5 2xl:gap-x-24 gap-y-5 lg:gap-y-16">
                {/* Mapping and rendering each event */}
                {displayedEvents.map((event, index) => (
                    <IconCard
                        key={index}
                        linkText={event.linkText}
                        linkUrl={event.linkUrl}
                        imageAlt={event.imageAlt}
                        imageUrl={event.imageUrl}
                        width={event.width}
                        height={event.height}
                    />
                ))}
            </div>
        </div>
    );
};

export default IdeasCard;
