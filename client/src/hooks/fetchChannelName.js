// FetchChannelName.jsx
import React, { useEffect } from 'react';
import axios from 'axios';
import { setChannelID } from '../store/slices/ChannelID.slices';
import { useDispatch } from 'react-redux';

function fetchChannelName({ channelName }) {
    const dispatch = useDispatch()
    useEffect(() => {
        async function fetchChannel() {
            // console.log(channelName)
            const options = {
                method: 'GET',
                url: 'https://the-better-youtube-channel-details.p.rapidapi.com/GetChannelDetails',
                params: {
                    UrlOrUsername: channelName
                },
                headers: {
                    'X-RapidAPI-Key': '72cf9111afmshd0924638c85e11bp18ce67jsne69246d3ef9f',
                    'X-RapidAPI-Host': 'the-better-youtube-channel-details.p.rapidapi.com'
                }
            };


            try {
                const response = await axios.request(options);
                // console.log("hello ", response.data.data.channel_id);

                dispatch(setChannelID(response.data.data.channel_id));
            } catch (error) {
                console.error('Error fetching channel data:', error);
            }
        }

        fetchChannel();
    }, [channelName]);
}
export default fetchChannelName;
