import React from 'react'
import "./mainnav.css"
import { Link } from 'react-router-dom'

function Mainnav() {
    return (
        <div className='z-30'>
            <div className='bg-black h-5 m-1 ' />
            <div className="flex justify-center items-center m-10">
                <div className='flex'>
                    <div><Link to="/" className="list-items">HOME</Link></div>
                    <div><Link to="/navbar" className="list-items">NAVBAR</Link></div>
                    <div><Link to="/card" className="list-items">CARD</Link></div>
                    <div><Link to="/hero" className="list-items">HERO</Link></div>
                    <div><Link to="/form" className="list-items">Form</Link></div>
                    <div><Link to="/carousel" className="list-items">CAROUSEL</Link></div>
                    <div><Link to="/extra" className="list-items">EXTRA</Link></div>
                    <div><Link to="/footer" className="list-items">Footer</Link></div>
                    <div><Link to="/button" className="list-items">BUTTONs</Link></div>
                    <div><Link to="/layout" className="list-items">LAYOUTS</Link></div>
                </div>
            </div>
            <div className='bg-black h-5' />

        </div>
    )
}

export default Mainnav