/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy_prices = prices[0];
    let val = 0

    for(var i = 0; i< prices.length; i++){
        if(buy_prices > prices[i]){
            buy_prices = prices[i]
        }
        val = Math.max(val, prices[i] - buy_prices )
    }
    return val
};