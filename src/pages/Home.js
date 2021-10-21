import React from 'react'
import Announcement from '../component/Announcement'
import Categories from '../component/Categories'
import Footer from '../component/Footer'
import NavBar from '../component/NavBar'
import NewsLetter from '../component/NewsLetter'
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
            <NewsLetter/>
            <Footer/>
        </div>
    )
}
