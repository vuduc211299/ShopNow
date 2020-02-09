const initState = {
    listCategories : []
}
const categoryReducer = (state = initState, action) => {

    switch (action.type) {
        case 'GET_ALL_CATEGORIES':
            state.listCategories = action.listCategory
            break;
        case 'GET_ALL_CATEGORIES_FAILED': 
            break;
        default:
            break;
    }
    return {
        ...state
    }
}

export default categoryReducer