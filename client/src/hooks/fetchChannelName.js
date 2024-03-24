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
                    'X-RapidAPI-Key': 'dceffcc06emsh029ed3005837887p1743bbjsn7ac63d80e637',
                    'X-RapidAPI-Host': 'the-better-youtube-channel-details.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                // console.log(response.data.data.channel_id);
                dispatch(setChannelID(response.data.data.channel_id));
            } catch (error) {
                console.error('Error fetching channel data:', error);
            }
        }

        fetchChannel();
    }, [channelName]);
}
export default fetchChannelName;
