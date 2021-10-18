import React from 'react'
import Announcement from '../component/Announcement'
import NavBar from '../component/NavBar'
import Slider from '../component/Slider'

export default function Home() {
    return (
        <div>
            <Announcement/>
            <NavBar/>
            <Slider/>
        </div>
    )
}
