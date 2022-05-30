/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */


// 1 2 3 4 5 6 7 8 9

const solve = (n, k) => {
    if (n === 1) return 0;
    return (solve(n-1, k) + k) % n
};

var findTheWinner = function(n, k) {
    const res = solve(n, k) + 1;
    // console.log('res::', res);
    return res;
};