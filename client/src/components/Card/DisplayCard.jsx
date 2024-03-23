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
        img: "https://img.freepik.com/free-vector/instagram-logo_1199-122.jpg?1&w=740&t=st=1711191202~exp=1711191802~hmac=79dd9b9e6f201e523d0fa7e234eecd67bfe6db35228d09827cf0881992481955",
        title: "Instagram",
        desc: "Check your Instagram analytics",
        link: "/dashboard/instagram",
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
                //         cardItems.map((item, index) => (
                //             <Card
                //                 key={index}
                //                 shadow={false}
                //                 className="relative m-8 grid h-[28rem] w-[28rem] max-w-[28rem] items-end justify-center overflow-hidden text-center rounded-3xl"
                //             >
                //                 <CardHeader
                //                     floated={false}
                //                     shadow={false}
                //                     color="transparent"
                //                     className='absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center'
                //                     style={{ backgroundImage: `url(${item.img})` }}
                //                 >
                //                     <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gray-800">
                //                         <Avatar
                //                             size="xl"
                //                             variant="circular"
                //                             alt="img"
                //                             className="border-2 border-white"
                //                             src={item.img}
                //                         />
                //                     </div>

                //                 </CardHeader>
                //                 <CardBody className="relative py-14 px-6 md:px-12">

                //                     <Typography
                //                         variant="h2"
                //                         color="white"
                //                         className="mb-6 font-medium leading-[1.5]"
                //                     >
                //                         {item.title}
                //                     </Typography>
                //                     <Typography variant="h5" className="mb-4 text-gray-400">
                //                         {item.desc}
                //                     </Typography>

                //                 </CardBody>
                //             </Card>
                //         ))
            }

            {
                cardItems.map((item, index) => (
                    // <div className="relative h-[400px] w-[400px] rounded-3xl m-6">
                    //     <img
                    //         src={item.img}
                    //         alt={item.title}
                    //         className="z-0 h-full w-full rounded-md object-cover"
                    //     />
                    //     <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent to-50%"></div>
                    //     <div className="absolute bottom-4 left-4 text-left">
                    //         <h1 className="text-lg font-semibold text-white">{item.title}</h1>
                    //         <p className="mt-2 text-sm text-gray-300">
                    //             {item.desc}
                    //         </p>
                    //         <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                    //             View Profile &rarr;
                    //         </button>
                    //     </div>
                    // </div>
                    <div className="border-2 w-full flex flex-col items-center rounded-2xl md:flex-row hover:scale-105 hover:shadow-2xl my-4 hover:border-0">
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
                                        #Macbook
                                    </span>
                                    <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                                        #Apple
                                    </span>
                                    <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                                        #Laptop
                                    </span>
                                </div>
                                <div className="mt-3 flex items-center space-x-2">
                                    <img
                                        className="inline-block h-8 w-8 rounded-full"
                                        src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
                                        alt="Dan_Abromov"
                                    />
                                    <span className="flex flex-col">
                                        <span className="text-[10px] font-medium text-gray-900">Dan Abromov</span>
                                        <span className="text-[8px] font-medium text-gray-500">@dan_abromov</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }



            {/* <div className="relative h-[400px] w-[400px] rounded-md m-6">
                <img
                    src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                    alt="AirMax Pro"
                    className="z-0 h-full w-full rounded-md object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-left">
                    <h1 className="text-lg font-semibold text-white">Delba</h1>
                    <p className="mt-2 text-sm text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
                    </p>
                    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                        View Profile &rarr;
                    </button>
                </div>
            </div> */}

            {/* <Card
                shadow={false}
                className="relative grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
            >
                <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center"
                >
                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                </CardHeader>
                <CardBody className="relative py-14 px-6 md:px-12">
                    <Typography
                        variant="h2"
                        color="white"
                        className="mb-6 font-medium leading-[1.5]"
                    >
                        How we design and code open-source projects?
                    </Typography>
                    <Typography variant="h5" className="mb-4 text-gray-400">
                        Tania Andrew
                    </Typography>
                    <Avatar
                        size="xl"
                        variant="circular"
                        alt="tania andrew"
                        className="border-2 border-white"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                    />
                </CardBody>
            </Card> */}
        </div >

    );
}