/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
    let initPrices = prices;
    let maxProfit = 0;
    const searchMin = () => {
        const minVal = Math.min(...initPrices);
        const newArr = initPrices.slice(initPrices.indexOf(minVal));
        const maxVal = Math.max(...newArr);

        if (Number.isInteger(maxVal) && Number.isInteger(minVal)
            && maxProfit < (maxVal - minVal)) {
            maxProfit = maxVal - minVal;
        }

        if (initPrices.length === 0) {
            return maxProfit;
        } else {
            initPrices = initPrices.filter(
                (item) => item !== minVal
            );
            return searchMin();
        }
    }

    return searchMin();
};