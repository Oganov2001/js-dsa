const maxProfits = (prices) => {
    let minPrice = prices[0];
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        const currentPrice = prices[i];

        minPrice = Math.min(minPrice, currentPrice);

        const potentialProfit = currentPrice - minPrice;
        
        maxProfit = Math.max(maxProfit, potentialProfit);
        console.log(maxProfit);
    }

    return maxProfit;
};

const prices = [7, 1, 5, 3, 6, 4];
const profit = maxProfits(prices);
console.log("Maximum Profit: ", profit);