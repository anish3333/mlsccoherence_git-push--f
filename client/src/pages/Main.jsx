
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import DisplayCard from '../components/Card/DisplayCard';
import Footer from '../components/Footer/Footer';
import { useSelector } from 'react-redux';
import fetchChannelName from '../hooks/fetchChannelName';

function Main() {
    const user = useSelector((state) => state.user);

    async function fetchChannel() {
        await fetchChannelName({ channelName: user.data.channels[0] });
    }
    fetchChannel();

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    // const openSidebar = () => {
    //     setIsSidebarOpen(true);
    // };

    return (
        <div className='flex'>
            {/* {isSidebarOpen ? (
                <div className='fixed text-black bg-white rounded-full p-2 text-4xl ml-40 z-20' onClick={toggleSidebar}>
                    ✖
                </div>
            ) : (
                <div className='fixed text-white bg-black rounded-full p-2 text-4xl ml-6 z-20' onClick={toggleSidebar}>
                    ≡
                </div>
            )} */}




            <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className='overflow-y-auto bg-gray-200 w-full'>
                <div className='flex flex-wrap'>
                    <DisplayCard />
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default Main;
