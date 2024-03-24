import React from 'react'
import { BarChart, Wallet, Newspaper, BellRing, Paperclip, Brush, Wrench, Home } from 'lucide-react'
import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { FaBars } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import fetchChannelName from '../../hooks/fetchChannelName'
import { setChannelID } from '../../store/slices/ChannelID.slices'



const navItems = [
    {
        name: 'Home',
        icon: Home,
        to: '/',
    },
    {
        name: 'Dashboard',
        icon: BarChart,
        to: '/dashboard',
    },
    {
        name: 'Analytics',
        icon: Wallet,
        to: '/analytics',
    },
    {
        name: 'Top Videos',
        icon: BellRing,
        to: '/topvideos',
    },
    {
        name: 'History',
        icon: Newspaper,
        to: '/history',
    },
]

export default function Sidebar({ isSidebarOpen, toggleSidebar }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const openSidebar = () => {
        setIsSidebarOpen(true);
    };

    const user = useSelector((state) => state.user);
    // console.log(user);


    const [formData, setFormData] = useState({
        search: ''
    });


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(formData);
        try {
            const response = await fetchChannelName({ channelName: formData.search });
            dispatch(setChannelID(response.data.data.channel_id));
            navigate("/main");

        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred while submitting the form");
        }
    };

    return (

        <div className={`h-screen w-64 ${isSidebarOpen ? '' : 'hidden'} shrink-0`}>

            <aside className="flex h-screen w-64 shrink-0 flex-col bg-gray-400 text-black px-5 py-8 fixed z-10">


                {/* Title */}
                <h1 className="text-2xl font-bold text-black mb-6 text-center bg-gray-500 -mx-5 -my-8 p-6">SocialPulse</h1>


                {/* search bar */}

                <div className="relative">
                    <form action="w-full">

                        <input
                            value={formData.value}
                            onChange={handleChange}
                            type="text"
                            placeholder="Search"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                        />
                        <button className="absolute right-3 top-1/2 transform -translate-y-1/2"
                            onClick={() => {
                                fetchChannelName({ channelName: '' })
                            }
                            }
                        >

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M9 16a7 7 0 100-14 7 7 0 000 14zm0 1a8 8 0 100-16 8 8 0 000 16z"
                                    clipRule="evenodd"
                                />
                                <path
                                    fillRule="evenodd"
                                    d="M18.707 17.293l-3.182-3.182A6.96 6.96 0 0016 9a7 7 0 10-7 7 6.96 6.96 0 003.111-.747l3.182 3.182a1 1 0 001.414-1.414zM9 15a6 6 0 110-12 6 6 0 010 12z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </form>
                </div>

                <div className="mt-6 flex flex-1 flex-col justify-between">
                    <nav className="-mx-3 space-y-6 flex flex-col">
                        <div className="space-y-3 ">
                            <label className="px-3 text-xs font-semibold uppercase text-black"></label>
                            {
                                navItems.map((item, idx) => (
                                    <NavLink
                                        className={({ isActive }) => {
                                            return (`flex transform items-center rounded-lg px-3 py-2 text-black transition-colors duration-300 hover:bg-gray-50 hover:text-gray-700`
                                                + ((isActive) ? ' text-gray-700 bg-gray-50 ' : '  ')
                                            )
                                        }}
                                        to={item.to}
                                        key={idx}
                                    >
                                        {/* <BarChart className="h-5 w-5" aria-hidden="true" /> */}
                                        <item.icon className="h-5 w-5" aria-hidden="true" />
                                        <span className="mx-2 text-sm font-medium">
                                            {item.name}
                                        </span>
                                    </NavLink>
                                ))
                            }

                        </div>

                        <div className="text-black h-16 w-64 bg-gray-500 flex justify-evenly items-center fixed bottom-0 left-0">
                            <div className='flex items-center justify-evenly'>

                                <div className='border-black border-[2.5px] p-[0.25rem] rounded-full'>
                                    <FaUser className='text-xl' />
                                </div>
                                <div className='mx-2'>
                                    {user?.data.username || 'User'}
                                </div>
                            </div>
                            <div>
                                <button className='focus:outline-none w-full bg-gray-600 hover:bg-gray-700 hover:text-gray-300 text-gray-200 py-2 px-4 rounded'
                                    onClick={() => {
                                        ; (
                                            async () => {
                                                await fetch('/api/v1/user/logout', {
                                                    method: 'GET',
                                                })
                                                    .then((res) => {
                                                        navigate('/')
                                                        // console.log(res);
                                                    })
                                            }
                                        )()
                                    }}>
                                    Sign Out
                                </button>
                            </div>

                        </div>

                    </nav>
                </div>

            </aside>

            {!isSidebarOpen ? (
                <div className="fixed inset-y-0 left-0 flex justify-end py-4 px-4">
                    <button onClick={openSidebar} className="text-black focus:outline-none">
                        <FaBars className="h-6 w-6" />
                    </button>
                </div>
            ) : null}
        </div>
    )
}

