import imgUrl from '../img/iphone.jpeg'

const initState = {
    products: [
        {id: 1, name: 'Iphone 8', imgUrl, price: '1000 USD', sale: '20%'},
        {id: 2, name: 'Iphone 9', imgUrl, price: '2000 USD', sale: '10%'},
        {id: 3, name: 'Iphone 10', imgUrl, price: '3000 USD', sale: '5%'}
    ]
}

const productReducer = (state = initState, action) => {
    return {
        ... state
    }
}

export default productReducer