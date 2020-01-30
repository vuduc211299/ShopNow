import imgUrl from '../img/iphone.jpeg'

const initState = {
    products: [
        {id: 1, name: 'Iphone 8', imgUrl, price: 1000, sale: '20%', quantityInCart: 0},
        {id: 2, name: 'Iphone 9', imgUrl, price: 2000, sale: '10%', quantityInCart: 0},
        {id: 3, name: 'Iphone 10', imgUrl, price: 3000, sale: '5%', quantityInCart: 0}
    ]
}

const productReducer = (state = initState, action) => {
    return {
        ... state
    }
}

export default productReducer