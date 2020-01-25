import React, { Component } from 'react';
import Slide from './Slide'
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';


class Banner extends Component {
    constructor(props) {
        super(props)

        this.state = {
            images: [
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"
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
        }, 3000);
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
                    <LeftArrow
                        goToPrevSlide={this.goToPrevSlide}
                    />
                    <div className="slider container">
                        {
                            <Slide image={this.state.images[this.state.currentIndex]} />
                        }

                    </div>

                    <RightArrow
                        goToNextSlide={this.goToNextSlide}
                    />
                </div>
            </div>

        );
    }


}

export default Banner