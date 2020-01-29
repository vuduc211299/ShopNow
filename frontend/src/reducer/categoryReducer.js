
const initState = {
    categories: [
        {id: 1, name: "clothes", imgUrl: "https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn"},
        {id: 2, name: "phone", imgUrl: "https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn"},
        {id: 3, name: "shoes", imgUrl: "https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn"}
    ],
    products: []
}
const categoryReducer = (state = initState, action) => {
    return {
        ...state
    }
}

export default categoryReducer