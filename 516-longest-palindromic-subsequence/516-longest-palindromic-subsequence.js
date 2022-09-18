/**
 * @param {string} s
 * @return {number}
 */

// recursive
// const solve = (s1, s2, idx1, idx2, op) => {
//     if (idx1 >= s1.length || idx2 >= s2.length) {
//         return op;
//     }
    
//     if (s1[idx1] === s2[idx2]) {
//         return solve(s1, s2, idx1+1, idx2+1, op + s1[idx1]);
//     }
    
//     const op1 = solve(s1, s2, idx1+1, idx2, op);
//     const op2 = solve(s1, s2, idx1, idx2+1, op);
    
//     return op1.length > op2.length ? op1 : op2;
// };

// var longestPalindromeSubseq = function(s) {
//     const s1 = s;
//     const s2 = s.split("").reverse().join("");
//     const res = solve(s1, s2, 0, 0, "");
//     return res.length;
// };


// recursion + memoization
const solve = (s1, s2, idx1, idx2, cache) => {
    if (idx1 >= s1.length || idx2 >= s2.length) {
        return 0;
    }
    
    if (cache[idx1][idx2] !== -1) {
        return cache[idx1][idx2];
    }
    
    if (s1[idx1] === s2[idx2]) {
        cache[idx1][idx2] = 1 + solve(s1, s2, idx1+1, idx2+1, cache);
        return cache[idx1][idx2];
    }
    
    const op1 = solve(s1, s2, idx1+1, idx2, cache);
    cache[idx1+1][idx2] = op1;
    const op2 = solve(s1, s2, idx1, idx2+1, cache);
    cache[idx1][idx2+1] = op2;
    
    cache[idx1][idx2] = Math.max(op1, op2);
    return cache[idx1][idx2];
};

var longestPalindromeSubseq = function(s) {
    const s1 = s;
    const s2 = s.split("").reverse().join("");
    const cache = Array(s1.length+1).fill("").map(x => Array(s1.length+1).fill(-1));
    const res = solve(s1, s2, 0, 0, cache);
    
    return res;
};