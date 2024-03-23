// import { ApexOptions } from 'apexcharts';
// import React, { useState } from 'react';
// import ReactApexChart from 'react-apexcharts';
// import Sidebar from '../components/Sidebar/Sidebar';

// const options = {
//     legend: {
//         show: false,
//         position: 'top',
//         horizontalAlign: 'left',
//     },
//     colors: ['#3C50E0', '#80CAEE'],
//     chart: {
//         fontFamily: 'Satoshi, sans-serif',
//         height: 335,
//         type: 'area',
//         dropShadow: {
//             enabled: true,
//             color: '#623CEA14',
//             top: 10,
//             blur: 4,
//             left: 0,
//             opacity: 0.1,
//         },

//         toolbar: {
//             show: false,
//         },
//     },
//     responsive: [
//         {
//             breakpoint: 1024,
//             options: {
//                 chart: {
//                     height: 300,
//                 },
//             },
//         },
//         {
//             breakpoint: 1366,
//             options: {
//                 chart: {
//                     height: 350,
//                 },
//             },
//         },
//     ],
//     stroke: {
//         width: [2, 2],
//         curve: 'straight',
//     },
//     // labels: {
//     //   show: false,
//     //   position: "top",
//     // },
//     grid: {
//         xaxis: {
//             lines: {
//                 show: true,
//             },
//         },
//         yaxis: {
//             lines: {
//                 show: true,
//             },
//         },
//     },
//     dataLabels: {
//         enabled: false,
//     },
//     markers: {
//         size: 4,
//         colors: '#fff',
//         strokeColors: ['#3056D3', '#80CAEE'],
//         strokeWidth: 3,
//         strokeOpacity: 0.9,
//         strokeDashArray: 0,
//         fillOpacity: 1,
//         discrete: [],
//         hover: {
//             size: undefined,
//             sizeOffset: 5,
//         },
//     },
//     xaxis: {
//         type: 'category',
//         categories: [
//             'Sep',
//             'Oct',
//             'Nov',
//             'Dec',
//             'Jan',
//             'Feb',
//             'Mar',
//             'Apr',
//             'May',
//             'Jun',
//             'Jul',
//             'Aug',
//         ],
//         axisBorder: {
//             show: false,
//         },
//         axisTicks: {
//             show: false,
//         },
//     },
//     yaxis: {
//         title: {
//             style: {
//                 fontSize: '0px',
//             },
//         },
//         min: 0,
//         max: 100,
//     },
// };



// const Analytics = () => {
//     const [state, setState] = useState({
//         series: [
//             {
//                 name: 'Product One',
//                 data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 45],
//             },

//             {
//                 name: 'Product Two',
//                 data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 51],
//             },
//         ],
//     });

//     const handleReset = () => {
//         setState((prevState) => ({
//             ...prevState,
//         }));
//     };
//     handleReset;



//     return (
//         <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
//             <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
//                 <div className="flex w-full flex-wrap gap-3 sm:gap-5">
//                     <div className="flex min-w-47.5">
//                         <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-primary">
//                             <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-primary"></span>
//                         </span>
//                         <div className="w-full">
//                             <p className="font-semibold text-primary">Total Revenue</p>
//                             <p className="text-sm font-medium">12.04.2022 - 12.05.2022</p>
//                         </div>
//                     </div>
//                     <div className="flex min-w-47.5">
//                         <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-secondary">
//                             <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-secondary"></span>
//                         </span>
//                         <div className="w-full">
//                             <p className="font-semibold text-secondary">Total Sales</p>
//                             <p className="text-sm font-medium">12.04.2022 - 12.05.2022</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="flex w-full max-w-45 justify-end">
//                     <div className="inline-flex items-center rounded-md bg-whiter p-1.5 dark:bg-meta-4">
//                         <button className="rounded bg-white py-1 px-3 text-xs font-medium text-black shadow-card hover:bg-white hover:shadow-card dark:bg-boxdark dark:text-white dark:hover:bg-boxdark">
//                             Day
//                         </button>
//                         <button className="rounded py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark">
//                             Week
//                         </button>
//                         <button className="rounded py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark">
//                             Month
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             <div>
//                 <div id="chartOne" className="-ml-5">
//                     <ReactApexChart
//                         options={options}
//                         series={state.series}
//                         type="area"
//                         height={350}
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// };

import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";
import { useState } from "react";

import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";
ChartJS.defaults.backgroundColor = '#9BD0F5';
ChartJS.defaults.borderColor = 'rgba(206, 206, 206, 1)';
ChartJS.defaults.color = '#000';

const data = [
    {
        label: "January",
        totalViews: 400,
        subscribers: 10,
        retentionRate: 20,
        age: 30,
        videoTitle: "Video 1 Updated",
    },
    {
        label: "February",
        totalViews: 380,
        subscribers: 20,
        retentionRate: 30,
        age: 40,
        videoTitle: "Video 2 Updated",
    },
    {
        label: "March",
        totalViews: 350,
        subscribers: 10,
        retentionRate: 80,
        age: 20,
        videoTitle: "Video 3 Updated",
    },
    {
        label: "April",
        totalViews: 600, // Adjusted peak
        subscribers: 60,
        retentionRate: 60,
        age: 15,
        videoTitle: "Video 4 Updated",
    },
    {
        label: "May",
        totalViews: 200, // Adjusted peak
        subscribers: 40,
        retentionRate: 20,
        age: 20,
        videoTitle: "Video 5 Updated",
    },
    {
        label: "June",
        totalViews: 300, // Adjusted peak
        subscribers: 32,
        retentionRate: 30,
        age: 30,
        videoTitle: "Video 6 Updated",
    },
];

// console.log(data);

const Analytics = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };



    return (
        <div className="flex">
            <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className='overflow-y-auto w-full overflow-hidden'>
                <div className='flex flex-col flex-wrap bg-gray-100 w-full h-screen items-center'>
                    <div className='h-[60%] w-full flex justify-evenly mt-4'>
                        <div className='w-[38%] h-[96%] bg-gray-200 p-8 rounded-2xl'>

                            {/* Doughnut age */}
                            <Doughnut
                                data={{
                                    labels: data.map((item) => item.age),
                                    datasets: [
                                        {
                                            label: "Age",
                                            data: data.map((item) => item.age),
                                            backgroundColor: [
                                                "rgba(255, 99, 132, 0.6)",
                                                "rgba(54, 162, 235, 0.6)",
                                                "rgba(255, 206, 86, 0.6)",
                                                "rgba(75, 192, 192, 0.6)",
                                                "rgba(153, 102, 255, 0.6)",
                                                "rgba(255, 159, 64, 0.6)",
                                            ],
                                            borderColor: [
                                                "rgba(255, 99, 132, 1)",
                                                "rgba(54, 162, 235, 1)",
                                                "rgba(255, 206, 86, 1)",
                                                "rgba(75, 192, 192, 1)",
                                                "rgba(153, 102, 255, 1)",
                                                "rgba(255, 159, 64, 1)",
                                            ],
                                            borderWidth: 1,
                                        },
                                    ],
                                }}
                                height={400}
                                width={600}
                                options={{
                                    maintainAspectRatio: false,
                                    responsive: true,
                                    plugins: {
                                        title: {
                                            text: "Age",
                                            display: true,
                                            align: "center",
                                            font: {
                                                size: 20,
                                                color: "black",
                                            },
                                        },
                                    },
                                }}
                            />

                        </div>
                        <div className='w-[58%] h-[96%] bg-gray-200 p-8 rounded-2xl'>
                            <Bar
                                data={{
                                    labels: data.map((item) => item.label),
                                    datasets: [
                                        {
                                            label: "Total Views",
                                            data: data.map((item) => item.totalViews),
                                            backgroundColor: "rgba(108, 108, 255, 1)",
                                            borderColor: "rgba(0, 0, 190, 1)",
                                            borderWidth: 1,
                                            borderRadius: 10,
                                            color: "black",
                                        },
                                    ],
                                }}
                                height={400}
                                width={600}
                                options={{
                                    maintainAspectRatio: false,
                                    responsive: true,
                                    scales: {
                                        y: {
                                            beginAtZero: true,
                                        },
                                    },
                                    plugins: {
                                        title: {
                                            text: "Highest Views in a Month",
                                            display: true,
                                            align: "center",
                                            font: {
                                                size: 20,
                                                color: "black",
                                            },

                                        },
                                    },
                                }}
                            />
                        </div>
                    </div>
                    <div className='h-[36%] w-[98%] bg-gray-200 p-8 my-2 mt-1 rounded-2xl'>
                        <Line
                            data={{
                                labels: data.map((item) => item.videoTitle),
                                datasets: [
                                    {
                                        label: "Likes",
                                        data: data.map((item) => item.subscribers),
                                        fill: false,
                                        backgroundColor: "rgba(0, 173, 3, 1)",
                                        borderColor: "rgba(0, 173, 3, 1)",
                                    },
                                ],
                            }}
                            height={400}
                            width={600}
                            options={{
                                maintainAspectRatio: false,
                                responsive: true,
                                scales: {
                                    y: {
                                        beginAtZero: true,
                                    },
                                },
                                plugins: {
                                    title: {
                                        text: "Like Count for last 6 Videos",
                                        align: "center",
                                        display: true,
                                        font: {
                                            size: 20,
                                            color: "black",
                                        },
                                    },
                                },
                            }}
                        />
                    </div>

                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Analytics;