// FetchChannelName.jsx
import React, { useEffect } from 'react';
import axios from 'axios';
import { setChannelID } from '../store/slices/ChannelID.slices';
import { useDispatch } from 'react-redux';

function FetchChannelName({channelName }) {
    const dispatch = useDispatch()
    useEffect(() => {
        async function fetchChannel() {
            const options = {
                method: 'GET',
                url: 'https://the-better-youtube-channel-details.p.rapidapi.com/GetChannelDetails',
                params: {
                    UrlOrUsername: channelName
                },
                headers: {
                    'X-RapidAPI-Key': '33ef4a6069mshe660049d750690bp197a5bjsncc2df2cdb993',
                    'X-RapidAPI-Host': 'the-better-youtube-channel-details.p.rapidapi.com'
                }
            };
            try {
                const response = await axios.request(options);
                console.log(response.data).channel_id;
                dispatch(setChannelID(response.data.channel_id));
            } catch (error) {
                console.error('Error fetching channel data:', error);
            }
        }

        fetchChannel();
    }, [channelName]);

    return (
        <div>Fetching channel name...</div>
    );
}
export default FetchChannelName;
