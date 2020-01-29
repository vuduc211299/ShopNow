import React, { Component } from 'react'
import Footer from '../../Footer/Footer'
import '../../../css/product.css'
import '../../../css/navbar.css'
import BackDisplayProduct from './BackDisplayProduct'
import ButtonInDeQuantity from '../../common/ButtonInDeQuantity'
import { connect } from 'react-redux'

class Product extends Component {
    handleAddToCart = () => {
        const product = this.getProductById();
        this.props.addToCart(product);
        console.log(this.props.cart)
    }

    getProductById () {
        const { id } = this.props.match.params;
        const { products } = this.props;
        const product = products.find(product=> product.id == id)
        return product;
    }

    render() {
        const product = this.getProductById();
        return (
            <div>
                <div className="product">
                    <div className="container p-container">
                        <div className="p-path mt-3">
                            Shopee
                            Điện Thoại & Phụ Kiện
                            Pin, Cáp & Bộ sạc
                            Cáp sạc và cáp OTG
                            Cáp Sạc iPhone Hoco X14 dài 1M ✓ Chính Hãng ✓ Cáp Iphone
                        </div>
                        <div className='p-detail row mt-3'>
                            <div className='p-img col-5'>
                                <img src={product.imgUrl} alt='' width="100%" height="100%"/>
                            </div>
                            <div className='p-intro col-7'>
                                <div className='p-name'>
                                    <h4>{product.name}</h4>
                                </div>
                                <div className='p-transport row mt-5'>
                                    <div className='col-3'>
                                        Transport
                                    </div>
                                    <div className='col-8'>
                                        Free ship to all customer =)))
                                    </div>
                                </div>
                                <div className='p-variation row mt-5'>
                                    <div className='col-3'>
                                        Variation
                                    </div>
                                    <div className='col-8'>
                                        <button>Black</button>
                                        <button>White</button>
                                    </div>
                                </div>
                                <div className="p-quantity row mt-4">
                                    <div className='col-3'>
                                        Quantity
                                    </div>
                                    <ButtonInDeQuantity/>
                                </div>
                                <div className='2-bnt row mt-4 ml-1'>
                                    <button onClick={this.handleAddToCart}>Add to Cart</button>
                                    <button>Shop Now</button>
                                </div>
                            </div>
                        </div>
                        <div className='p-des-rel-cgr row mt-3'>
                            <div className='p-des'>
                                <h3>Product Detail</h3>
                                <div className="p-des-cnt">
                                    Sản phẩm flash sale giá shock nên chỉ mua được 1. 
                                    Cáp lightning Hoco X14 là sản phẩm mới ra lò của hãng phụ kiện Hoco. X14 được coi là phiên bản nâng cấp của cáp Hoco X2. Vẫn là dây dù nhưng dây cáp Hoco X14 được thiết kế thời trang và chắc chắn hơn, với tông màu đỏ và đen nổi bật. Với phiên bản lần này, cáp Hoco X14 được gia cố thêm phần đệm cao su để hạn chế tình trạng đứt cáp ngầm. Nhờ đó, thời gian sử dụng sẽ được lâu hơn.

                                    Thông số của cáp lightning Hoco X14

                                    Tên sản phẩm: Cáp Lightning Hoco X14
                                    Model: Hoco X14
                                    Chiều dài cáp: 1 Mét
                                    Chuẩn giao tiếp: Lightning
                                    Dòng sạc tối đa: 5V-2.4A
                                    Chất liệu: Dây dù, lõi đồng, hợp kim nhôm
                                    Dòng máy tương thích: iPhone 5/5s, iPhone 6/6s/6Plus/6s Plus, iPhone 7/7Plus, iPhone 8/8Plus, iPhone X, iPad, iPod
                                    Kết nối PC ok
                                    Bảo hành: 3 tháng 1 đổi 1

                                    Đập hộp cáp Hoco X14

                                    Vẫn là hộp giấy quen thuộc, đơn giản là vì giá rẻ nên Hoco ít khi chơi mấy hộp kim loại như anh WK hay Remax. Mà có vẻ như tụi Hoco cũng chịu học hỏi đôi chút về cách trình bày rồi. Đợt này sản phẩm mới của tháng 10 năm 2017 nên đã làm hộp đẹp hơn trước, ít ra cũng có thêm mấy cái chứng chỉ như FCC, CE, RoHS. Về bên trong vẫn là 1 sợi dây cáp bọc trong túi nylon có logo “hoco.” kèm dòng chữ “Make something you love”. Ngoài vỏ hộp sẽ có tên của dây cáp: X14 For Lightning, hình dây cáp được in nổi, và chiều dài của sợi dây. Phía bên hông có mã QRCode dùng để kiểm tra hàng có chính hãng không.
                                    Bạn có thể check code Hoco chính hãng tại trang web: http://www.hococase.com/

                                    Đánh giá  cáp sạc Hoco X14

                                    Phải công nhận là đợt này Hoco làm dây cáp rất ngon. Đầu cáp làm từ hợp kim nhôm được thông qua phương pháp xử lý Anodize. Cảm giác nhìn rất là chất, từ màu sắc đến thiết kế thì khỏi chê. Trên đầu cáp vẫn có in logo “hoco.” như bình thường. Các khối nối rất là khít, độ hoàn thiện rất cao.

                                    Ngoài ra phần tiếp xúc giữa dây và chuôi sạc được đúc chết bằng nhựa PC cứng. Giúp phần dây cáp này khỏi tình trạng đứt cáp ngầm mà quý khách hay gặp phải khi sử dụng dòng cáp Hoco X2. Dây cáp có độ đàn hồi, không quá cứng cũng không quá mềm, có thể cuộn lại được. Cảm giác khi bẻ qua bẻ lại sợi dây thì phát hiện lõi dây cũng khá ngon, cảm giác rất chắc chắn. Chúng tôi sẽ làm một video mổ ruột dây cáp trong thời gian sớm nhất để quý khách có thêm cái nhìn chi tiết hơn.
                                </div>
                            </div>
                        </div>
                        <BackDisplayProduct/>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.productReducer.products,
        cart: state.cartReducer.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (product) => dispatch({type: 'ADD_TO_CART', product}) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)