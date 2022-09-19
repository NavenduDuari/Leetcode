/**
 * @param {string} s
 * @return {number}
 */

// recursion
// const isPalindrome = (s) => {
//     let i = 0;
//     let j = s.length-1;
    
//     while (i < j) {
//         if (s[i] !== s[j]) return false;
//         i++;
//         j--;
//     }
    
//     return true;
// };

// const solve = (s, minCut) => {
//     const i = 0;
//     const j = s.length-1;
//     if (i > j) return 0;
//     if (isPalindrome(s)) return 0;
    
//     for (let k = i+1; k <= j; k++) {
//         const leftS = s.substring(i, k);
//         const rightS = s.substring(k, j+1);
        
//         const tempMin = 1 + solve(leftS, minCut) + solve(rightS, minCut);
        
//         if (tempMin < minCut) {
//             minCut = tempMin;
//         }
//     }
    
//     return minCut;
// };

// var minCut = function(s) {
//     const minCut = Number.MAX_SAFE_INTEGER;
//     const res = solve(s, minCut);
    
//     return res;
// };

// recursion + memoization
const isPalindrome = (s, i, j) => {
    
    while (i < j) {
        if (s[i] !== s[j]) return false;
        i++;
        j--;
    }
    
    return true;
};

const solve = (s, i, j, cache) => {
    if (i >= j) return 0;
    if (isPalindrome(s, i, j)) return 0;
    
    if (cache[i][j] !== -1) return cache[i][j];
    
    let minCut = Number.MAX_SAFE_INTEGER;
    for (let k = i; k < j; k++) {
         /* 
            Instead of writing below standard line
            We will recurse for only right part
            Only when left part turns out to be palindrome

            Reason : If left substring becomes palindrome then there is no need to partition it further 
            (which in turn reduces the number of recursive calls)

            int temp =  solve (s, i, k, dp, palindrome) + solve (s, k+1, j, dp, palindrome) + 1;
                
        */
        if (isPalindrome(s, i, k)) {
            const rightCost = solve(s, k+1, j, cache);
            cache[k+1][j] = rightCost;
            const tempMin = 1 + rightCost;

            if (tempMin < minCut) {
                minCut = tempMin;
            }
        }

    }
    
    cache[i][j] = minCut;
    return cache[i][j];
};

var minCut = function(s) {
    const minCut = Number.MAX_SAFE_INTEGER;
    const cache = Array(s.length).fill(-1).map(x => Array(s.length).fill(-1));
    const res = solve(s, 0, s.length-1, cache);
    
    return res;
};