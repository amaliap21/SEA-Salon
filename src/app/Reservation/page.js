import IdeasCard from "@/components/services";
import SearchIdeas from "@/components/search-service";
import React from "react";

const Reservation = () => {
    return (
        <main className="flex relative min-h-screen flex-col overflow-hidden items-center justify-center p-10 lg:pb-24 2xl:pb-40 sm:px-20 md:px-24 lg:px-20 2xl:px-52 bg-neutral-50 z-[0]">
            <SearchIdeas />
            <IdeasCard />
        </main>
    )
}
export default Reservation;