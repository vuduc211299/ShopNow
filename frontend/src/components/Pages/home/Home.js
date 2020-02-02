import React, {Component} from 'react'
import Banner from './banner/Banner'
import ListCategory from './category/ListCategory'
import '../../../css/homepage.css'
import FlashSale from './FlashSale'
import Footer from '../../Footer/Footer'
import NavBar from '../../Header/NavBar'

class Home extends Component {  
    render () {
        const params = this.props.location.pathname;
        return (
            <div className='homepage'>
                <NavBar params={params}/>
                <Banner/>
                <ListCategory/>
                <FlashSale/>
                <Footer/>
            </div>
        ) 
    }   
}

export default Home