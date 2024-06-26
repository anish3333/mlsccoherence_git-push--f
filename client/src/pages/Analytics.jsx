// data in vidData, fix charts, chart js
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

import apiKey from "../components/constants"

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
    }
];

// console.log(data)

const Analytics = () => {
    const Id = useSelector((state) => state.channelID.data);
    // console.log(Id)

    const [videos, setVideos] = useState([]);
    const [videoAnalytics, setVideoAnalytics] = useState([]);
    const [vidData, setVidData] = useState([]);
    // {
    //     "viewCount": "152974",
    //     "likeCount": "7731",
    //     "favoriteCount": "0",
    //     "commentCount": "683"
    //   }

    useEffect(() => {
        async function fetchRecentVideos() {
            try {
                const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${Id}&order=date&maxResults=6&key=${apiKey}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch recent videos');
                }
                const data = await response.json();
                setVideos(data.items);
                setVidData(data.items.map((item) => {
                    return {
                        videoTitle: item.snippet.title,
                        videoId: item.id.videoId,
                        videDesc: item.snippet.description,
                    }
                }))
                console.log(data.items);
            } catch (error) {
                console.error('Error fetching recent videos:', error);
            }
        }

        fetchRecentVideos();
    }, [apiKey, Id]);

    async function fetchVideoAnalytics(videoId) {
        try {
            const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=${apiKey}`);
            if (!response.ok) {
                throw new Error('Failed to fetch video analytics');
            }
            const data = await response.json();
            // console.log(response.data)
            return (data.items[0].statistics)
        } catch (error) {
            console.error('Error fetching video analytics:', error);
        }
    }

    useEffect(() => {
        async function fetchAllVideoAnalytics() {
            try {
                const analytics = await Promise.all(videos.map(video => fetchVideoAnalytics(video.id.videoId)));

                setVideoAnalytics(analytics);
                const updatedVidData = videos.map((video, index) => {
                    return {
                        videoTitle: video.snippet.title,
                        videoId: video.id.videoId,
                        videoDesc: video.snippet.description,
                        viewCount: analytics[index].viewCount,
                        likeCount: analytics[index].likeCount,
                        commentCount: analytics[index].commentCount,
                    };
                });

                setVidData(updatedVidData);
            } catch (error) {
                console.error('Error fetching all video analytics:', error);
            }
        }

        if (videos.length > 0) {
            fetchAllVideoAnalytics();
        }
    }, [videos]);


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
    // console.log(" Vids : ", videos)

    // console.log(" Anals : ", videoAnalytics)

    console.log(" VidData : ", vidData)

    // {
    //     "videoTitle": "Keep Track Of Car, Win $10,000",
    //     "videoId": "OnTTThIzuNU",
    //     "videoDesc": "",
    //     "viewCount": "42875439",
    //     "likeCount": "2683650",
    //     "commentCount": "10119"
    // }

    return (
        <div className="flex">
            <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className='overflow-y-hidden h-full w-full overflow-hidden'>
                <div className="bg-gray-300 flex h-16 items-center justify-around">

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
                        <label htmlFor="PieChart" className={`  p-3 rounded-xl ${pieChecked ? 'bg-gray-700' : 'bg-gray-400'}`} >PieChart</label>
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
                        <label htmlFor="BarGraph" className={`  p-3 rounded-xl ${barChecked ? 'bg-gray-700' : 'bg-gray-400'}`}>BarGraph</label>
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
                        <label className={`  p-3 rounded-xl ${lineChecked ? 'bg-gray-700' : 'bg-gray-400'}`} htmlFor="LineChart">LineChart</label>
                    </div>
                </div>
                <div className='flex flex-col flex-wrap bg-gray-100 w-full h-screen items-center'>




                    {/* pie and bar */}
                    <div className='h-[60%] w-full flex justify-evenly mt-4'>


                        {/* pie */}
                        {
                            pieChecked ?
                                (<div className='w-[38%] h-[96%] bg-gray-200 p-8 rounded-2xl'>


                                    <Doughnut
                                        data={{
                                            labels: vidData.map((item) => item.videoTitle),
                                            datasets: [
                                                {
                                                    label: "Likes",
                                                    data: vidData.map((item) => item.likeCount),
                                                    backgroundColor: [
                                                        "rgba(255, 99, 132, 0.2)",
                                                        "rgba(54, 162, 235, 0.2)",
                                                        "rgba(255, 206, 86, 0.2)",
                                                        "rgba(75, 192, 192, 0.2)",
                                                        "rgba(153, 102, 255, 0.2)",
                                                        "rgba(255, 159, 64, 0.2)",
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
                                            scales: {
                                                y: {
                                                    beginAtZero: true,
                                                },
                                            },
                                            plugins: {
                                                title: {
                                                    text: "Likes on recent videos",
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
                                            labels: vidData.map((item) => item.videoTitle.length > 15 ? item.videoTitle.substring(0, 15) + '...' : item.videoTitle),
                                            datasets: [
                                                {
                                                    label: "Total Views",
                                                    data: vidData.map((item) => item.viewCount),
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
                                </div>) : ''
                        }


                    </div>

                    {/* line */}

                    {
                        lineChecked ?
                            (<div className='h-[36%] w-[98%] relative bg-gray-200 p-8 my-2 mt-1 rounded-2xl'>

                                <Line
                                    data={{
                                        labels: vidData.map((item) => item.videoTitle.length > 15 ? item.videoTitle.substring(0, 15) + '...' : item.videoTitle),
                                        datasets: [
                                            {
                                                label: "Comments",
                                                data: vidData.map((item) => item.commentCount),
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
                                                type: 'linear', // Ensure linear scaling for y-axis
                                                beginAtZero: false,
                                            },
                                        },
                                        plugins: {
                                            title: {
                                                text: "Comments in recent videos",
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