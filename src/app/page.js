import Hero from "@/components/hero";
import React from "react";

const Home = () => {
  return (
    <main className="flex relative min-h-screen flex-col overflow-hidden items-center justify-center gap-20 p-10 sm:px-20 md:px-24 lg:pb-24 2xl:pb-40 lg:px-20 2xl:px-32 bg-neutral-50 z-[0]">
      <Hero className="z-[-1]" />
    </main>
  )
}
export default Home;