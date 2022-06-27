/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// const solve = (coins, target, n, cache) => {
//     if (target === 0) return 0;
//     if(n === 0) return Number.MAX_SAFE_INTEGER - 1;
    
//     if (cache[n-1][target]) return cache[n-1][target];
//     let res;
//     if (coins[n-1] > target) {
//         res = 0 + solve(coins, target-0, n-1, cache);
//     } else {
//         res = Math.min(0+solve(coins, target-0, n-1, cache), 1+solve(coins, target-coins[n-1], n, cache));
//     }
//     cache[n-1][target] = res;
//     return res;
// };

// var coinChange = function(coins, amount) {
//     const distinctCoins = coins.length;
//     if (!distinctCoins) return -1;
//     const cache = Array(distinctCoins).fill(0).map(x => Array(amount).fill(undefined));
//     console.log('cache::', cache.length, cache[0].length)
//     const res = solve(coins, amount, coins.length, cache);
//     console.log('res::', res);
//     return res === Number.MAX_SAFE_INTEGER - 1 ? -1 : res;
// };

//                         [1,2,5], 11
//             [1,2,5], 6          [1,2], 11
//     [1,2,5], 1  [1,2], 6    [1,2], 9  [1], 11
// [1,2,5], 0  [1,2], 1 


const solve = (coins, n, target, cache) => {
    if (target === 0) return 0;
    if (n === 0) return Number.MAX_SAFE_INTEGER - 1;
    if (cache[n-1][target]) return cache[n-1][target];
    let res = 0;
    if (coins[n-1] > target) {
        res = solve(coins, n-1, target, cache);
    } else {
        res = Math.min(1+solve(coins, n, target - coins[n-1], cache), solve(coins, n-1, target, cache));
    }
    
    cache[n-1][target] = res;
    return res;
};

var coinChange = function(coins, amount) {
    const coinCount = coins.length;
    if (!coinCount) return -1;
    
    const cache = Array(coinCount).fill(0).map(x => Array(amount).fill(undefined));
    const res = solve(coins, coinCount, amount, cache);
    
    return res === Number.MAX_SAFE_INTEGER - 1 ? -1 : res;
}