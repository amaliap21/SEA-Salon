"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import Image from "next/image";
import { Button } from "./ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { AddIdeas } from "./add-service";

const formSchema = z.object({
    websiteUrl: z.string(),
});

const SearchIdeas = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            websiteUrl: "",
        },
    });

    return (
        // sm:px-20 md:px-24 lg:pb-24 2xl:pb-40
        <Form {...form}>
            <form className="space-y-8 flex flex-col justify-center items-center w-full mb-10 lg:m-14">
                <h1 className="text-black text-center font-pt_sans lg:leading-[50px] text-[30px] lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold">
                    Reservation Form
                </h1>

                {/* Search Input */}
                <div className="flex flex-grow flex-row justify-center items-center gap-3 p-3 bg-[#D4D4D5] rounded-full lg:text-4xl md:w-3/4 lg:w-7/12 2xl:w-5/6">
                    <FormField
                        control={form.control}
                        name="Search"
                        render={({ field }) => (
                            <FormItem className="flex flex-grow justify-center bg-white rounded-full w-full">
                                <FormControl className=" rounded-full">
                                    <Input placeholder="Search" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Image
                        src="/search.png"
                        alt="background atas"
                        width={40}
                        height={40}
                        className="w-[20px] h-[20px] lg:w-[40px] lg:h-[40px] z-[2] object-center object-contain hover:cursor-pointer"
                    ></Image>
                    <AddIdeas />
                </div>

                {/* Categories */}
                <div className="grid grid-cols-2 gap-x-10 gap-y-5 lg:flex lg:flex-row justify-around items-center lg:gap-2 xl:gap-16 2xl:gap-28">
                    <Button
                        type="submit"
                        variant="outline"
                        className="text-black lg:text-lg bg-[#D4D4D5] lg:w-[180px] font-semibold rounded-full py-5"
                    >
                        Hair
                    </Button>
                    <Button
                        type="submit"
                        variant="outline"
                        className="text-black lg:text-lg bg-[#D4D4D5] lg:w-[180px] font-semibold rounded-full py-5"
                    >
                        Foot & Hand
                    </Button>
                    <Button
                        type="submit"
                        variant="outline"
                        className="text-black lg:text-lg bg-[#D4D4D5] lg:w-[180px] font-semibold rounded-full py-5"
                    >
                        Facial
                    </Button>
                    <Button
                        type="submit"
                        variant="outline"
                        className="text-black lg:text-lg bg-[#D4D4D5] lg:w-[180px] font-semibold rounded-full py-5"
                    >
                        Body
                    </Button>
                </div>
            </form>
        </Form>
    );
};

export default SearchIdeas;
