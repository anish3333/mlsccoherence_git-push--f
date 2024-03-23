import React from 'react'
import { BarChart, Wallet, Newspaper, BellRing, Paperclip, Brush, Wrench } from 'lucide-react'
import { NavLink, Link } from 'react-router-dom'

const navItems = [
    {
        name: 'Dashboard',
        icon: BarChart,
        to: '/dashboard',
    },
    {
        name: 'Sales',
        icon: Wallet,
        to: '/sales',
    },
    {
        name: 'Blogs',
        icon: Newspaper,
        to: '/blogs',
    },
    {
        name: 'Notifications',
        icon: BellRing,
        to: '/notifications',
    },
    {
        name: 'Checklists',
        icon: Paperclip,
        to: '/checklists',
    },
    {
        name: 'Themes',
        icon: Brush,
        to: '/themes',
    },
    {
        name: 'Settings',
        icon: Wrench,
        to: '/settings',
    }
]

export default function Sidebar() {
    return (
        <aside className="flex h-screen w-64 flex-col overflow-y-auto border-r bg-black px-5 py-8">
            <Link to="#">
                <svg
                    width="40"
                    height="46"
                    viewBox="0 0 50 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                        fill="white"
                    />
                </svg>
            </Link>
            <div className="mt-6 flex flex-1 flex-col justify-between">
                <nav className="-mx-3 space-y-6 ">
                    <div className="space-y-3 ">
                        <label className="px-3 text-xs font-semibold uppercase text-white">analytics</label>
                        {
                            navItems.map((item, idx) => (
                                <NavLink
                                    className={({ isActive }) => {
                                        return (`flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-50 hover:text-gray-700`
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
                </nav>
            </div>
        </aside>
    )
}


// import React from 'react'

// function Sidebar() {
//     return (
//         <div>

//             <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
//                 <span class="sr-only">Open sidebar</span>
//                 <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                     <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
//                 </svg>
//             </button>

//             <aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
//                 <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
//                     <ul class="space-y-2 font-medium">
//                         <li>
//                             <a to="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
//                                 <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
//                                     <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
//                                     <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
//                                 </svg>
//                                 <span class="ms-3">Dashboard</span>
//                             </a>
//                         </li>
//                         <li>
//                             <a to="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
//                                 <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
//                                     <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
//                                 </svg>
//                                 <span class="flex-1 ms-3 whitespace-nowrap">Kanban</span>
//                                 <span class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
//                             </a>
//                         </li>
//                         <li>
//                             <a to="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
//                                 <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
//                                     <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
//                                 </svg>
//                                 <span class="flex-1 ms-3 whitespace-nowrap">Inbox</span>
//                                 <span class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
//                             </a>
//                         </li>
//                         <li>
//                             <a to="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
//                                 <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
//                                     <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
//                                 </svg>
//                                 <span class="flex-1 ms-3 whitespace-nowrap">Users</span>
//                             </a>
//                         </li>
//                         <li>
//                             <a to="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
//                                 <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
//                                     <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
//                                 </svg>
//                                 <span class="flex-1 ms-3 whitespace-nowrap">Products</span>
//                             </a>
//                         </li>
//                         <li>
//                             <a to="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
//                                 <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
//                                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
//                                 </svg>
//                                 <span class="flex-1 ms-3 whitespace-nowrap">Sign In</span>
//                             </a>
//                         </li>
//                         <li>
//                             <a to="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
//                                 <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
//                                     <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
//                                     <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
//                                     <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
//                                 </svg>
//                                 <span class="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
//                             </a>
//                         </li>
//                     </ul>
//                 </div>
//             </aside>

//             <div class="p-4 sm:ml-64">
//                 <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
//                     <div class="grid grid-cols-3 gap-4 mb-4">
//                         <div class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
//                             <p class="text-2xl text-gray-400 dark:text-gray-500">
//                                 <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
//                                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
//                                 </svg>
//                             </p>
//                         </div>
//                         <div class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
//                             <p class="text-2xl text-gray-400 dark:text-gray-500">
//                                 <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
//                                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
//                                 </svg>
//                             </p>
//                         </div>
//                         <div class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
//                             <p class="text-2xl text-gray-400 dark:text-gray-500">
//                                 <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
//                                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
//                                 </svg>
//                             </p>
//                         </div>
//                     </div>
//                     <div class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
//                         <p class="text-2xl text-gray-400 dark:text-gray-500">
//                             <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
//                                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
//                             </svg>
//                         </p>
//                     </div>
//                     <div class="grid grid-cols-2 gap-4 mb-4">
//                         <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
//                             <p class="text-2xl text-gray-400 dark:text-gray-500">
//                                 <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
//                                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
//                                 </svg>
//                             </p>
//                         </div>
//                         <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
//                             <p class="text-2xl text-gray-400 dark:text-gray-500">
//                                 <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
//                                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
//                                 </svg>
//                             </p>
//                         </div>
//                         <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
//                             <p class="text-2xl text-gray-400 dark:text-gray-500">
//                                 <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
//                                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
//                                 </svg>
//                             </p>
//                         </div>
//                         <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
//                             <p class="text-2xl text-gray-400 dark:text-gray-500">
//                                 <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
//                                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
//                                 </svg>
//                             </p>
//                         </div>
//                     </div>
//                     <div class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
//                         <p class="text-2xl text-gray-400 dark:text-gray-500">
//                             <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
//                                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
//                             </svg>
//                         </p>
//                     </div>
//                     <div class="grid grid-cols-2 gap-4">
//                         <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
//                             <p class="text-2xl text-gray-400 dark:text-gray-500">
//                                 <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
//                                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
//                                 </svg>
//                             </p>
//                         </div>
//                         <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
//                             <p class="text-2xl text-gray-400 dark:text-gray-500">
//                                 <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
//                                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
//                                 </svg>
//                             </p>
//                         </div>
//                         <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
//                             <p class="text-2xl text-gray-400 dark:text-gray-500">
//                                 <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
//                                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
//                                 </svg>
//                             </p>
//                         </div>
//                         <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
//                             <p class="text-2xl text-gray-400 dark:text-gray-500">
//                                 <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
//                                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
//                                 </svg>
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Sidebar

//AWESOHAME
// import navimg from '../../assets/MandoBlackbgPFPcircle.png';
// import { NavLink } from 'react-router-dom';
// import { FaUser } from 'react-icons/fa';
// import { useState } from 'react';

// let navdata = [
//     {
//         name: 'Home',
//         icon: FaUser,
//         link: '/',
//     },
//     {
//         name: 'About',
//         icon: FaUser,
//         link: '/about',
//     },
//     {
//         name: 'Projects',
//         icon: FaUser,
//         link: '/projects',
//     },
//     {
//         name: 'Skills',
//         icon: FaUser,
//         link: '/skills',
//     },
//     {
//         name: 'Contact',
//         icon: FaUser,
//         link: '/contact',
//     }
// ]
// export default function Navbar() {
//     let onMobile = false;
//     (window.innerWidth < 1280) ? onMobile = true : onMobile = false;

//     // useEffect(() => {
//     //     window.addEventListener('resize', () => {
//     //         (window.innerWidth < 1280) ? onMobile = true : onMobile = false;
//     //     })
//     // }, [window.innerWidth]);

//     const [expanded, setExpanded] = useState(!onMobile);
//     //h-screen shrink-0 bg-[#24282d] basis-[5%]
//     return (
//         <>
//             <div className={`h-screen h-[100dvh] shrink-0 bg-[#24282d] z-10 absolute xl:static ${expanded ? "basis-[14rem]" : "basis-[6rem] left-[-6rem]"}`}>
//                 <div className="flex justify-center items-center w-full h-1/5">
//                     {expanded && (<div className='flex justify-center items-center w-full'>
//                         <img src={navimg} alt="img" className="h-20 w-20" />
//                     </div>)}
//                     <div className='p-4'>
//                         <button
//                             onClick={() => {
//                                 setExpanded(!expanded);
//                             }}
//                             className='h-10 w-10 text-[#eeeeee] cursor-pointer'>
//                             {expanded ? <FaUser className='h-full w-full hover:scale-110 transition-all duration-400' /> : <FaUser className='h-full w-full hover:scale-110 transition-all duration-400' />}
//                         </button>

//                     </div>
//                 </div>
//                 <div className="h-3/5 flex flex-col justify-center">
//                     <ul className="flex flex-col items-center">
//                         {navdata.map((item, index) => (
//                             <li className="h-full w-full flex justify-center items-center" key={index}>
//                                 <NavLink to={item.link}

//                                     {...(onMobile ? {
//                                         onClick: () => {
//                                             setExpanded(!expanded);
//                                         }
//                                     } : {}
//                                     )}
//                                     className={({ isActive }) => {
//                                         return (`rounded-lg text-2xl/8 p-4 my-1 mx-4 flex items-center hover:bg-[#1a1b1b] ${expanded ? 'w-[12rem]' : 'w-[4rem]'} `
//                                             + ((isActive) ? ' bg-[#1a1b1b] text-[#eeeeee]' : ' bg-[#24282d] text-[#c0c0c0]')
//                                         )
//                                     }}>
//                                     <FaUser className={`h-8 w-8`} />
//                                     {expanded && (<p className="pl-3">{item.name}</p>)}
//                                 </NavLink>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//                 <div className="h-1/5 w-full flex items-end justify-center">
//                     <NavLink to='/resume'
//                         // className='rounded-lg text-2xl/10 p-3 m-2 w-3/4 flex items-center hover:bg-[#1a1b1b]'
//                         className={({ isActive }) => {
//                             return ('transition-all duration-[450ms] h-1/2 w-full flex items-center justify-center font-extrabold text-3xl hover:bg-[#ffc54d] hover:text-[#1a1b1b] '
//                                 +
//                                 ((isActive) ? ' bg-[#ffc54d] text-[#1a1b1b]' : ' bg-[#1a1b1b] text-[#eeeeee]')
//                             )
//                         }}>
//                         {expanded ? ('Resume') : ('R')}
//                     </NavLink>
//                 </div>
//             </div >
//             {!expanded && <button onClick={() => {
//                 setExpanded(!expanded);
//             }} className='h-10 w-10 text-[#61677A] m-5 absolute xl:hidden z-10 border-2 rounded-[1.25rem] p-[0.5rem] bg-[#eeeeee]'>
//                 <FaUser className='h-full w-full' />
//             </button>}
//         </>
//     )
// }