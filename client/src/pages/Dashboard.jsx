import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Footer from '../components/Footer/Footer'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

import apiKey from '../components/constants'

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
        totalViews: 100,
        subscribers: 10,
    },
    {
        label: "February",
        totalViews: 200,
        subscribers: 20,
    },
    {
        label: "March",
        totalViews: 300,
        subscribers: 10,
    },
    {
        label: "April",
        totalViews: 400,
        subscribers: 60,
    },
    {
        label: "May",
        totalViews: 600,
        subscribers: 40,
    },
    {
        label: "June",
        totalViews: 360,
        subscribers: 32,
    },
]

function Dashboard() {
    const Id = useSelector((state) => state.channelID.data);
    // console.log("mayuresh ", Id)
    const [analytics, setAnalytics] = useState(null);

    useEffect(() => {
        async function fetchChannelStatistics() {
            try {
                const response = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${Id}&key=${apiKey}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch channel statistics');
                }
                const data = await response.json();
                // console.log(data.items[0].statistics);

                setAnalytics(data.items[0].statistics);

            } catch (error) {
                console.error('Error fetching channel statistics:', error);
            }
        }
        fetchChannelStatistics();
    }, []);

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
                        <div className='w-[38%] h-[96%] bg-gray-200 p-8 rounded-2xl flex flex-col'>
                            <div className='text-center font-bold text-3xl'>
                                Quick Analytics at a Glance
                            </div>
                            <div className='flex flex-col justify-evenly items-center h-full pt-10'>
                                <div className='text-center font-bold text-lg'>
                                    Total Views : {analytics?.viewCount}
                                </div>
                                <div className='text-center font-bold text-lg'>
                                    Subscriber Count : {analytics?.subscriberCount}
                                </div>
                                <div className='text-center font-bold text-lg'>
                                    Total Videos : {analytics?.videoCount}
                                </div>

                            </div>

                        </div>
                        <div className='w-[58%] h-[96%] bg-gray-200 p-8 rounded-2xl'>
                            <Bar
                                data={{
                                    labels: data.map((item) => item.label),
                                    datasets: [
                                        {
                                            label: "Total Views",
                                            data: data.map((item) => item.totalViews),
                                            backgroundColor: "rgba(25, 255, 25, 1)",
                                            borderColor: "rgba(0, 182, 0, 1)",
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
                                            text: "Total Views",
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
                                labels: data.map((item) => item.label),
                                datasets: [
                                    {
                                        label: "Subscribers",
                                        data: data.map((item) => item.subscribers),
                                        fill: false,
                                        backgroundColor: "rgba(255, 0, 0, 1)",
                                        borderColor: "rgba(255, 0, 0, 1)",
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
                                        text: "Subscriber Count",
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

export default Dashboard