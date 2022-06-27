/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */

                [2,7,15]
                [1,4,6,7,8,20]

const getN2 = (days, n) => {
    let idxToReduce = 1;
    let remainingValidity = 7;
    for (let i = n-1; i >= 0; i--) {
        const diff = days[i] - days[i-1];
        if (diff < remainingValidity) {
            remainingValidity -= diff;
            idxToReduce++;
        } else break;
    }
    
    return n-idxToReduce;
};

const getN3 = (days, n) => {
    let idxToReduce = 1;
    let remainingValidity = 30;
    for (let i = n-1; i >= 0; i--) {
        const diff = days[i] - days[i-1];
        if (diff < remainingValidity) {
            remainingValidity -= diff;
            idxToReduce++;
        } else break;
    }
    
    return n-idxToReduce;
};

const solve = (days, n, costs, cache) => {
    if (n===0) return 0;
    if (cache[n]) return cache[n];
    const n2 = getN2(days, n);
    const n3 = getN3(days, n);
    console.log('n::', n);
    console.log('n2::', n2);
    console.log('n3::', n3);
    const res = Math.min(costs[0] + solve(days, n-1, costs, cache), costs[1] + solve(days, n2, costs, cache), costs[2] + solve(days, n3, costs, cache));
    cache[n] = res;
    
    return res;
};

var mincostTickets = function(days, costs) {
    const cache = [];
    const res = solve(days, days.length, costs, cache);
    console.log('res::', res);
    return res;
};