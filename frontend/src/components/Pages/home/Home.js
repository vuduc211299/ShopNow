import React from 'react'
import Banner from './banner/Banner'
import Category from './Category'
import '../../../css/homepage.css'
import FlashSale from './FlashSale'
import Footer from '../footer/Footer'

const Home = () => {
    return (
        <div className='homepage'>
            <Banner/>
            <Category/>
            <FlashSale/>
            <Footer/>
        </div>
    )    
}

export default Home