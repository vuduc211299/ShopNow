import React, {Component} from 'react'
import { connect } from 'react-redux'
import ProductItem from '../../common/ProductItem'
import { Link } from 'react-router-dom'
import * as constant from '../../../constants/constants'
import '../../../css/flashSale.css'

class FlashSale extends Component {

    constructor(props) {
        super(props)
        this.state = {
            translateX: 0
        }
    }
    
    goToNextSlide = () => {
        if(this.state.translateX !== -1110){
            this.setState({
                translateX : -1110
            })
        }else{
            this.setState({
                translateX : 0
            })
        }
    }

    goToPrevSlide = () => {
        if(this.state.translateX === -1110){
            this.setState({
                translateX : 0
            })
        }else{
            this.setState({
                translateX : -1110
            })
        }
    }

    render() {
        const { products } = this.props;
        products.sort((a,b) => {
            return - parseInt(a.discount) + parseInt(b.discount)
        })
        let promo_products = products.slice(0, 10);
        const {translateX} = this.state;
        let styleTrans = {
            transform: `translate(${translateX}px, 0px)`
        }
        return (
            <div className='category-section container mb-5'>
                <div className='category-header mb-3'>
                    <span id='txt-title'>Top Sale</span>
                    <i className="fa ml-2" id='icon-rocket'>&#xf135;</i>
                </div>
                <div className='list-sale-wrapper'>
                    <ul className='list-flash-sale' style={styleTrans}>
                        {
                            promo_products.length ? promo_products.map(product => {
                                const url = "product/" + product._id;
                                return (
                                    <li className='item-flash-sale'>
                                        <Link to={url} style={{ textDecoration: 'none', color: "inherit"}}>
                                            <ProductItem item={product} typeScreen={constant.CATEGORY_PAGE}/>
                                        </Link>
                                    </li>
                                )
                            }) : (
                                <div>
                                    Not have sale product yet
                                </div>
                            )
                        }
                    </ul>
                    {
                        translateX === -1110 ? (
                            <div className='arrow-top-sale' id="left-arrow-top-sale" onClick={this.goToPrevSlide}>
                                <i class="fa icon-arrow">&#xf104;</i>
                            </div>
                        ) : (
                            <div></div>
                        )
                    }
                    {
                        translateX === 0 ? (
                            <div className='arrow-top-sale' id='right-arrow-top-sale' onClick={this.goToNextSlide}>
                                <i class="fa icon-arrow">&#xf105;</i>
                            </div>
                        ) : (
                            <div></div>
                        )
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.productReducer.products
    }
}

export default connect(mapStateToProps)(FlashSale)