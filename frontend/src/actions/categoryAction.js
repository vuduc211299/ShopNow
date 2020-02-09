export const categoryAction = () => {
    const requestOption = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    return async (dispatch, getState) => {
        const listCategory = await fetch('http://localhost:3000/category/', requestOption)
        .then(res => res.json())
        
        if(listCategory){    
            dispatch({type: 'GET_ALL_CATEGORIES', listCategory})
        }else {
            dispatch({type: 'GET_ALL_CATEGORIES_FAILED'})
        }

    }
}