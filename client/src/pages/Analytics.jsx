
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";
import { useState } from "react";

import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

defaults.maintainAspectRatio = true;
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

    const [pieChecked, setPieChecked] = useState(true);
    const [barChecked, setBarChecked] = useState(true);
    const [lineChecked, setLineChecked] = useState(true);





    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handlesetPieChecked = (event) => {
        setPieChecked(!pieChecked);
    };
    const handlesetBarChecked = (event) => {
        setBarChecked(!barChecked);
    };
    const handlesetLineChecked = (event) => {
        setLineChecked(!lineChecked);
    };


    return (
        <div className="flex">
            <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className='overflow-y-hidden w-full overflow-hidden'>
                <div className="bg-gray-300 flex justify-around">

                    <div>
                        {/* Checkbox input */}
                        <input
                            type="checkbox"
                            checked={pieChecked}
                            onChange={handlesetPieChecked}
                            id="PieChart"
                            className="hidden"
                        />
                        {/* Label for the checkbox */}
                        <label htmlFor="PieChart" className=" bg-gray-700 p-3 rounded-xl" >PieChart</label>
                    </div>

                    <div>
                        {/* Checkbox input */}
                        <input
                            type="checkbox"
                            checked={barChecked}
                            onChange={handlesetBarChecked}
                            id="BarGraph"
                            className="hidden"
                        />
                        {/* Label for the checkbox */}
                        <label htmlFor="BarGraph" className=" bg-gray-700 p-3 rounded-xl">BarGraph</label>
                    </div>

                    <div>
                        {/* Checkbox input */}
                        <input
                            type="checkbox"
                            checked={lineChecked}
                            onChange={handlesetLineChecked}
                            id="LineChart"
                            className="hidden"
                        />
                        {/* Label for the checkbox */}
                        <label className=" bg-gray-700 p-3 rounded-xl" htmlFor="LineChart">LineChart</label>
                    </div>
                </div>
                <div className='flex flex-col flex-wrap bg-gray-100 w-full h-screen items-center'>




                    {/* pie and bar */}
                    <div className='h-[60%] w-full flex justify-evenly mt-4'>


                        {/* pie */}
                        {
                            pieChecked ?
                                (<div className='w-[38%] h-[96%] bg-gray-200 p-8 rounded-2xl'>

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
                                        height={50}
                                        width={200}
                                        options={{
                                            maintainAspectRatio: true,
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

                                </div>) : ''
                        }



                        {/* bar */}
                        {
                            barChecked ?
                                (<div className='w-[58%] h-[96%] bg-gray-200 p-8 rounded-2xl'>
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
                                            maintainAspectRatio: true,
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
                                </div>) : ''
                        }


                    </div>

                    {/* line */}

                    {
                        lineChecked ?
                            (<div className='h-[36%] w-[98%] relative bg-gray-200 p-8 my-2 mt-1 rounded-2xl'>
                                <Line
                                    data={{
                                        labels: data.map((item) => item.videoTitle),
                                        datasets: [
                                            {
                                                label: "Likes",
                                                data: data.map((item) => item.subscribers),
                                                fill: true,
                                                backgroundColor: "rgba(0, 173, 3, 1)",
                                                borderColor: "rgba(0, 173, 3, 1)",
                                            },
                                        ],
                                    }}
                                    // height={40}
                                    // width={20}
                                    className="h-[10%] w-[20%]"
                                    options={{
                                        maintainAspectRatio: true,
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
                            ) : ''
                    }

                </div>

                {/* <Footer /> */}
            </div>
        </div>
    )
}

export default Analytics;