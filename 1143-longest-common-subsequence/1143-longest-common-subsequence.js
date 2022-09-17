/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */

// recursion
// const solve = (text1, text2, idx1, idx2) => {
//     if (idx1 >= text1.length || idx2 >= text2.length) {
//         return 0;
//     }
    
//     if (text1[idx1] === text2[idx2]) {
//         return 1 + solve(text1, text2, idx1+1, idx2+1);
//     } else {
//         return Math.max(solve(text1, text2, idx1+1, idx2), solve(text1, text2, idx1, idx2+1));
//     }
// };

// var longestCommonSubsequence = function(text1, text2) {
//     const res = solve(text1, text2, 0, 0, 0);
//     return res;
// };

// recursion + memoization
const solve = (text1, text2, idx1, idx2, cache) => {
    if (idx1 >= text1.length || idx2 >= text2.length) {
        return 0;
    }
    
    if (cache[idx1][idx2]) return cache[idx1][idx2];
    
    if (text1[idx1] === text2[idx2]) {
        cache[idx1][idx2] = 1 + solve(text1, text2, idx1+1, idx2+1, cache);
    } else {
        cache[idx1][idx2] = Math.max(solve(text1, text2, idx1+1, idx2, cache), solve(text1, text2, idx1, idx2+1, cache));
    }
    
    return cache[idx1][idx2];
};

var longestCommonSubsequence = function(text1, text2) {
    const cache = Array(text1.length).fill(0).map(x => Array(text2.length).fill(0));
    const res = solve(text1, text2, 0, 0, cache);
    return res;
};
