import React from 'react'
import Banner from './banner/Banner'
import Category from './Category'
import '../../../css/homepage.css'

const Home = () => {
    return (
        <div className='homepage'>
            <Banner/>
            <Category/>
        </div>
    )    
}

export default Home