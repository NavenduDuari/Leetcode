/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

const solve = (m, n, cache) => {
    if (m < 0 || n < 0) return 0;
    if (m === 1 || n === 1) return 1;
    if (cache[m][n] !== -1) return cache[m][n];
    if (cache[m][n-1] === -1) {
        cache[m][n-1] = solve(m, n-1, cache);
    }
    if (cache[m-1][n] === -1) {
        cache[m-1][n] = solve(m-1, n, cache);
    }
    return cache[m][n-1] + cache[m-1][n];
};

var uniquePaths = function(m, n) {
    const cache = Array(m+1).fill(0).map(x => Array(n+1).fill(-1))
    const pathCount = solve(m, n, cache);
    
    return pathCount;
};