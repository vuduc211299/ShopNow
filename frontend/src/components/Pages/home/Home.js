import React from 'react'
import Banner from './banner/Banner'
import Category from './category/Category'
import '../../../css/homepage.css'
import FlashSale from './FlashSale'
import Footer from '../../Footer/Footer'

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