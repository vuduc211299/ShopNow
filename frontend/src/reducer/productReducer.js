import imgUrl from '../img/iphone.jpeg'

const initState = {
    products: [
        {id: 1, categoryId:1, name: 'Iphone 8', imgUrl, price: 1000, sale: '20%', quantityInCart: 0, quantityInStore: 100, location: "HCM City"},
        {id: 1, categoryId:1, name: 'Iphone 8', imgUrl, price: 1000, sale: '20%', quantityInCart: 0, quantityInStore: 100, location: "HCM City" },
        {id: 1, categoryId:1, name: 'Iphone 9', imgUrl, price: 1000, sale: '20%', quantityInCart: 0, quantityInStore: 100, location: "HCM City"},
        {id: 1, categoryId:1, name: 'Iphone 9', imgUrl, price: 2000, sale: '20%', quantityInCart: 0, quantityInStore: 100, location: "HCM City"},
        {id: 1, categoryId:1, name: 'Iphone 10', imgUrl, price: 3000, sale: '20%', quantityInCart: 0, quantityInStore: 100, location: "HCM City"},
        {id: 1, categoryId:1, name: 'Iphone 11', imgUrl, price: 10000, sale: '20%', quantityInCart: 0, quantityInStore: 100, location: "HCM City"},
        {id: 1, categoryId:1, name: 'Iphone 8', imgUrl, price: 1000, sale: '20%', quantityInCart: 0, quantityInStore: 100, location: "Ha Noi"},
        {id: 1, categoryId:1, name: 'Iphone 8', imgUrl, price: 1000, sale: '20%', quantityInCart: 0, quantityInStore: 100, location: "Ha Noi"},
        {id: 1, categoryId:1, name: 'Iphone 8', imgUrl, price: 1000, sale: '20%', quantityInCart: 0, quantityInStore: 100, location: "Ha Noi"},
        {id: 1, categoryId:1, name: 'Iphone 8', imgUrl, price: 1000, sale: '20%', quantityInCart: 0, quantityInStore: 100, location: "Ha Noi"},
        {id: 1, categoryId:1, name: 'Iphone 8', imgUrl, price: 1000, sale: '20%', quantityInCart: 0, quantityInStore: 100, location: "Ha Noi"},
        {id: 1, categoryId:1, name: 'Iphone 8', imgUrl, price: 1000, sale: '20%', quantityInCart: 0, quantityInStore: 100, location: "Ha Noi"},
        {id: 1, categoryId:1, name: 'Iphone 8', imgUrl, price: 1000, sale: '20%', quantityInCart: 0, quantityInStore: 100, location: "Ha Noi"},
        {id: 2, categoryId:2, name: 'Iphone 9', imgUrl, price: 2000, sale: '10%', quantityInCart: 0, quantityInStore: 100, location: "Ha Noi"},
        {id: 3, categoryId:3, name: 'Iphone 10', imgUrl, price: 3000, sale: '5%', quantityInCart: 0, quantityInStore: 100, location: "Ha Noi"},

    ]
}

const productReducer = (state = initState, action) => {
    return {
        ... state
    }
}

export default productReducer