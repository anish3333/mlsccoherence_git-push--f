import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'

const apiKey = 'AIzaSyCZenXO4rYPYpGImTX1SuSBrNTeYNcB2tY';
const Id = 'UCXgGY0wkgOzynnHvSEVmE3A';



function YoutubeAnalyticsDashboard() {
    // const Id = useSelector((state) => state.data);
    // const Id = "UCX6OQ3DkcsbYNE6H8uQQuVA"
    console.log(Id)
    const [channelStatistics, setChannelStatistics] = useState(null);
    const [recentVideos, setRecentVideos] = useState([]);
    const [videoAnalytics, setVideoAnalytics] = useState([]);

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
        async function fetchChannelStatistics() {
            try {
                const response = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${Id}&key=${apiKey}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch channel statistics');
                }
                const data = await response.json();
                setChannelStatistics(data.items[0].statistics);

            } catch (error) {
                console.error('Error fetching channel statistics:', error);
            }
        }

        async function fetchRecentVideos() {
            try {
                const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${Id}&order=date&maxResults=5&key=${apiKey}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch recent videos');
                }
                const data = await response.json();
                setRecentVideos(data.items);
            } catch (error) {
                console.error('Error fetching recent videos:', error);
            }
        }



        fetchChannelStatistics();
        fetchRecentVideos();
    }, [apiKey, Id]);

    useEffect(() => {
        async function fetchAllVideoAnalytics() {
            try {
                const analytics = await Promise.all(recentVideos.map(video => fetchVideoAnalytics(video.id.videoId)));
                setVideoAnalytics(analytics);
            } catch (error) {
                console.error('Error fetching all video analytics:', error);
            }
        }

        if (recentVideos.length > 0) {
            // fetchAllVideoAnalytics();
        }
    }, [recentVideos]);

    return (
        <div>
            <h2>YouTube Analytics Dashboard</h2>
            {channelStatistics && (
                <div>
                    <h3>Channel Statistics</h3>
                    <pre>{JSON.stringify(channelStatistics, null, 2)}</pre>
                </div>
            )}
            {recentVideos.length > 0 && (
                <div>
                    <h3>Recent Videos</h3>
                    <ul>
                        {recentVideos.map(video => (
                            <li key={video.id.videoId}>{video.snippet.title}</li>
                        ))}
                    </ul>
                </div>
            )}
            {videoAnalytics.length > 0 && (
                <div>
                    <h3>Video Analytics</h3>
                    <ul>
                        {videoAnalytics.map((analytics, index) => (
                            <li key={index}>
                                <pre>{JSON.stringify(analytics, null, 2)}</pre>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default YoutubeAnalyticsDashboard;