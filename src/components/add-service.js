import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"

export function AddIdeas() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Image
                    src="/plus-circle.png"
                    alt="background atas"
                    width={40}
                    height={40}
                    className="w-[20px] h-[20px] lg:w-[40px] lg:h-[40px] z-[2] object-center object-contain hover:cursor-pointer"
                ></Image>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle>Reservation</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-row justify-between gap-5">
                        {/* Email */}
                        <div className="flex flex-col justify-start items-start w-full gap-2">
                            <Label htmlFor="email" className="text-right">
                                Email
                            </Label>
                            <Input
                                id="email"
                                className="col-span-3"
                            />
                        </div>
                        {/* Name */}
                        <div className="flex flex-col justify-start items-start w-full gap-2">
                            <Label htmlFor="name" className="text-right">
                                Name
                            </Label>
                            <Input
                                id="name"
                                className="col-span-3"
                            />
                        </div>
                    </div>
                    {/* Type of service */}
                    <div className="flex flex-col justify-start items-start w-full gap-2">
                        <Label htmlFor="type-of-service" className="text-right">
                            Type of service
                        </Label>
                        <Input
                            id="type-of-service"
                            className="col-span-3"
                        />
                    </div>
                    {/* Date and Time */}
                    <div className="flex flex-col justify-start items-start w-full gap-2">
                        <Label htmlFor="date-and-time" className="text-right">
                            Date and Time
                        </Label>
                        <div className="flex flex-row w-full gap-1">

                            <Input
                                id="date-and-time"
                                className="col-span-3"
                            />
                            <Button
                                type="submit"
                                variant="outline"
                                className="text-white lg:text-xs bg-[#262626]"
                            >
                                Schedule
                            </Button>
                        </div>
                    </div>
                    {/* Any request (optional) */}
                    <div className="flex flex-col justify-start items-start w-full gap-2">
                        <Label htmlFor="request" className="text-right">
                            Any request (optional)
                        </Label>
                        <Input
                            id="request"
                            className="col-span-3 pb-24 pt-5"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit" className="w-full">Submit</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
