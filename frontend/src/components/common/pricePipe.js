export const pricePipe = (price) => {
    const priceStr = String(price);
    let result = '', index = 0, resultCvt = '';
    for (let i = priceStr.length - 1; i >= 0 ; i--) {
        if(index === 3){
            result += '.'
            index = 0;
        }
        result += priceStr[i]
        index ++
    }
    for (let i = result.length-1; i >= 0; i--) {
        resultCvt += result[i]
    }
    return resultCvt
}
