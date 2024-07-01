import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Image from "next/image";
import Link from 'next/link';

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  Name: z.string(),
  Email: z.string().email(),
  Message: z.string(),
});

const ContactUs = React.forwardRef((props, ref) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Name: "",
      Email: "",
      Message: "",
    },
  });

  return (
    <Form {...form}>
      <form className="space-y-4 bg-[#D4D4D5] pt-[50px] pb-[40px] sm:pb-[60px] lg:pb-[120px] lg:py-20 xl:py-28">
        <div className="flex flex-row justify-between sm:justify-center items-stretch px-10 lg:px-32 xl:px-52 gap-6 sm:gap-28 xl:gap-40">
          {/* Contact Us */}
          <div className="flex flex-col justify-start px-25 gap-4 w-[200px] sm:w-[225px] lg:w-[500px]">
            <div>
              <h1 className="text-black font-pt_sans lg:leading-[50px] text-[18px] lg:text-2xl xl:text-3xl font-bold ">
                Contact Us
              </h1>
              <p className="text-slate-500 italic flex break-normal font-pt_sans text-[14px] lg:text-lg xl:text-xl font-[400] leading-[140%]">
                Send us a message
              </p>
            </div>
            <FormField
              control={form.control}
              name="Name"
              render={({ field }) => (
                <FormItem>
                  <FormControl className="bg-white rounded-none lg:py-3 xl:py-6">
                    <Input placeholder="Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="Email"
              render={({ field }) => (
                <FormItem>
                  <FormControl className="bg-white rounded-none lg:py-3 xl:py-6">
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="Message"
              render={({ field }) => (
                <FormItem>
                  <FormControl className="bg-white rounded-none py-8 xl:py-14">
                    <Input placeholder="Message" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              variant="outline"
              className="text-white bg-[#262626] font-semibold rounded-none px-5 lg:mt-5 xl:mt-10"
            >
              Submit
            </Button>
          </div>

          {/* Social Media */}
          <div className="flex flex-col text-black gap-2 xl:gap-8 lg:w-[500px]">
            <div>
              <h1 className="text-black font-pt_sans lg:leading-[50px] text-[18px] lg:text-2xl xl:text-3xl font-bold ">
                Social Media
              </h1>
              <p className="text-slate-500 italic flex break-normal font-pt_sans text-[14px] lg:text-lg xl:text-xl font-[400]  leading-[140%]">
                Reach us on here
              </p>
            </div>

            {/* The Media */}
            <div className="flex flex-wrap gap-5 lg:gap-8">
              <Link href="https://www.instagram.com">
                <Image
                  src="/instagram.png"
                  alt="instagram"
                  width={100}
                  height={100}
                  className="w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] lg:w-[50px] lg:h-[50px] xl:w-[80px] xl:h-[80px] z-[2] object-center object-contain"
                ></Image>
              </Link>

              <Link href="https://www.twitter.com">
                <Image
                  src="/twitter-1.png"
                  alt="twitter"
                  width={100}
                  height={100}
                  className="w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] lg:w-[50px] lg:h-[50px] xl:w-[80px] xl:h-[80px] z-[2] object-center object-contain"
                ></Image>
              </Link>
            </div>

            {/* Dashboard */}
            <div>
              <p className="text-sm lg:text-lg text-[#666666]">
                Menteng Island, Jakarta, ID 10004, Indonesia.
              </p>
              <p className="text-sm lg:text-lg text-[#666666]">
                09.00 - 19.00 WIB
              </p>

            </div>

            {/* Contact */}
            <div className="flex flex-col justify-center gap-5">
              <div className="flex flex-row items-center gap-2 lg:gap-5">
                <Image
                  src="/phone-alt.png"
                  alt="background atas"
                  width={50}
                  height={50}
                  className="w-[25px] h-[25px] lg:w-[30px] lg:h-[30px] xl:w-[50px] xl:h-[50px] z-[2] object-center object-contain"
                ></Image>

                <div className="flex flex-wrap gap-2 lg:gap-5">
                  <Link href="https://wa.me/+628123456789">
                    <span className="text-sm lg:text-lg text-black">Thomas</span><p className="text-[#666666] underline text-[12px] lg:text-lg">+628123456789</p>
                  </Link>
                  <Link href="https://wa.me/+628164829372">
                    <span className="text-sm lg:text-lg text-black">Sekar</span><p className="text-[#666666] underline text-[12px] lg:text-lg">+628164829372</p>
                  </Link>
                </div>
              </div>
              <div className="flex flex-row items-center gap-2 lg:gap-5">
                <Image
                  src="/envelope.png"
                  alt="background atas"
                  width={50}
                  height={50}
                  className="w-[25px] h-[25px] lg:w-[30px] lg:h-[30px] xl:w-[50px] xl:h-[50px] z-[2] object-center object-contain"
                ></Image>

                <Link href="mailto: thomas.n@compfest.id">
                  <p className="text-[#666666] underline text-[12px] lg:text-lg"> thomas.n@compfest.id</p>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </form>
    </Form>
  );
});

ContactUs.displayName = 'ContactUs';
export default ContactUs;
