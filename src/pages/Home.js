import React from 'react'
import Announcement from '../component/Announcement'
import Categories from '../component/Categories'
import NavBar from '../component/NavBar'
import Products from '../component/Products'
import Slider from '../component/Slider'

export default function Home() {
    return (
        <div>
            <Announcement/>
            <NavBar/>
            <Slider/>
            <Categories/>
            <Products/>
        </div>
    )
}
