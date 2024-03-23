import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Footer from '../components/Footer/Footer'

import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "white";
ChartJS.defaults.backgroundColor = '#9BD0F5';
ChartJS.defaults.borderColor = 'rgba(103, 103, 103, 1)';
ChartJS.defaults.color = '#FFFFFF';

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
    return (
        <div className="flex">
            <Sidebar />
            <div className='overflow-y-auto w-full overflow-hidden'>
                <div className='flex flex-col flex-wrap bg-gray-500 w-full h-screen items-center'>
                    <div className='h-[60%] w-full flex justify-evenly mt-4'>
                        <div className='w-[38%] h-[96%] bg-gray-800 p-8 rounded-2xl'>
                            Analytics
                        </div>
                        <div className='w-[58%] h-[96%] bg-gray-800 p-8 rounded-2xl'>
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
                    <div className='h-[36%] w-[98%] bg-gray-800 p-8 my-2 mt-1 rounded-2xl'>
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