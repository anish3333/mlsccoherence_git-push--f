import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { google } from 'googleapis';

async function getChannelStats(youtube, channelId) {
    const response = await youtube.channels.list({
        part: "snippet,contentDetails,statistics",
        id: channelId
    });
    
    return response.data.items;
}

async function getVideoList(youtube, uploadId) {
    const videoList = [];
    let nextPageToken = null;
    
    do {
        const response = await youtube.playlistItems.list({
            part: "snippet,contentDetails",
            playlistId: uploadId,
            maxResults: 50,
            pageToken: nextPageToken
        });
        
        const data = response.data.items;
        
        data.forEach(video => {
            const videoId = video.contentDetails.videoId;
            if (!videoList.includes(videoId)) {
                videoList.push(videoId);
            }
        });

        nextPageToken = response.data.nextPageToken;
    } while (nextPageToken);

    return videoList;
}

async function getVideoDetails(youtube, videoList) {
    const statsList = [];
    
    for (let i = 0; i < videoList.length; i += 50) {
        const response = await youtube.videos.list({
            part: "snippet,contentDetails,statistics",
            id: videoList.slice(i, i + 50)
        });

        const data = response.data.items;

        data.forEach(video => {
            const title = video.snippet.title;
            const published = video.snippet.publishedAt;
            const description = video.snippet.description;
            const tagCount = video.snippet.tags ? video.snippet.tags.length : 0;
            const viewCount = parseInt(video.statistics.viewCount) || 0;
            const likeCount = parseInt(video.statistics.likeCount) || 0;
            const dislikeCount = parseInt(video.statistics.dislikeCount) || 0;
            const commentCount = parseInt(video.statistics.commentCount) || 0;
            const statsDict = {
                title,
                description,
                published,
                tagCount,
                viewCount,
                likeCount,
                dislikeCount,
                commentCount
            };
            statsList.push(statsDict);
        });
    }

    return statsList;
}

function Hero() {
    useEffect(() => {
        async function fetchData() {
            const API_KEY = 'AIzaSyAb3NLI7KKgrXuxDBTrtiaQkcRbeyeK6P0';
            const CHANNEL_ID = 'UCX6OQ3DkcsbYNE6H8uQQuVA';
        
            const youtube = google.youtube({ version: 'v3', auth: API_KEY });
        
            try {
                const channelStats = await getChannelStats(youtube, CHANNEL_ID);
                const uploadId = channelStats[0].contentDetails.relatedPlaylists.uploads;
                const videoList = await getVideoList(youtube, uploadId);
                const videoData = await getVideoDetails(youtube, videoList);
        
                console.log(videoData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        
        fetchData();
    }, []);

    return (
        <div>
            <main className="dark:bg-gray-800 bg-white relative overflow-hidden h-screen">
                {/* Your remaining JSX code */}
            </main>
        </div>
    )
}

export default Hero;
