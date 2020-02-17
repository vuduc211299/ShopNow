import React, { Component } from 'react';
import Slide from './Slide'
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import '../../../../css/banner.css'
import banner1 from '../../../../img/banner1.jpg'
import banner2 from '../../../../img/banner2.jpg'
import banner3 from '../../../../img/banner3.jpg'
import banner5 from '../../../../img/banner5.png'
class Banner extends Component {
    constructor(props) {
        super(props)

        this.state = {
            images: [
                banner1,
                banner2,
                banner3,
                banner5
            ],
            currentIndex: 0,
        }
    }

    componentDidMount() {
        this.startCarousel();
    }

    startCarousel = () => {
        this.carouselInterval = setInterval(() => {
            if (this.state.currentIndex === this.state.images.length - 1) {
                this.setState({
                    currentIndex: 0
                });
            }
            this.setState({
                currentIndex: this.state.currentIndex + 1
            });
        }, 5000);
    };

    componentWillUnmount() {
        clearInterval(this.carouselInterval);
    }

    goToPrevSlide = () => {
        if (this.state.currentIndex === 0) {
            return this.setState({
                currentIndex: this.state.images.length - 1,
            })
        }
        
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1,
        }));
    }



    goToNextSlide = () => {
        if (this.state.currentIndex === this.state.images.length - 1) {
            return this.setState({
                currentIndex: 0,
            })
        }

        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
        }));
    }

    render() {
        return (
            <div className='banner'>
                <div className="slider-wrapper container  d-flex justify-content-center align-items-center">
                    <div className="slider container">
                        {
                            <Slide image={this.state.images[this.state.currentIndex]} />
                        }

                    </div>
                    <LeftArrow
                        goToPrevSlide={this.goToPrevSlide}
                    />
                    <RightArrow
                        goToNextSlide={this.goToNextSlide}
                    />
                </div>
            </div>

        );
    }


}

export default Banner