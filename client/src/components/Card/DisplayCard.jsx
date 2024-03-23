import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
} from "@material-tailwind/react";
import { ArrowUpRight } from 'lucide-react'

const cardItems = [
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/YouTube_play_button_square_%282013-2017%29.svg/240px-YouTube_play_button_square_%282013-2017%29.svg.png",
        title: "Youtube",
        desc: "Check your Youtube analytics",
        link: "/dashboard/youtube",
    },
    {
        img: "https://assets.dryicons.com/uploads/icon/svg/8337/a347cd89-1662-4421-be90-58e5e8004eae.svg",
        title: "LinkedIn",
        desc: "Check your LinkedIn Analytics",
        link: "/dashboard/linkedin"
    }
]

export default function DisplayCard() {
    return (
        <div className="flex flex-col w-full justify-center px-12 py-4">


            {
                cardItems.map((item, index) => (

                    <div className="border-2 w-full flex flex-col items-center rounded-2xl md:flex-row hover:shadow-2xl my-4 hover:border-0">
                        <div className="h-full w-full md:h-[300px] md:w-[300px] shrink-0">
                            <img
                                src={item.img}
                                alt="Laptop"
                                className="h-full w-full rounded-l-2xl object-cover"
                            />
                        </div>
                        <div className="w-full">
                            <div className="p-4 w-full mx-12">
                                <h1 className="inline-flex items-center text-lg font-semibold">
                                    {item.title} <ArrowUpRight className="ml-2 h-4 w-4" />
                                </h1>
                                <p className="mt-3 text-sm text-gray-600">
                                    {item.desc}
                                </p>
                                <div className="mt-4">
                                    <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                                        #Analytics
                                    </span>
                                    <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                                        #ConnectWithFans
                                    </span>
                                    {/* <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                                        #Laptop
                                    </span> */}
                                </div>
                                <div className="mt-3 flex items-center space-x-2">
                                    <img
                                        className="inline-block h-8 w-8 rounded-full"
                                        src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
                                        alt="Logo"
                                    />
                                    <span className="flex flex-col">
                                        <span className="text-[10px] font-medium text-gray-900">SocialPulse</span>
                                        <span className="text-[8px] font-medium text-gray-500">SocialPulse</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div >

    );
}