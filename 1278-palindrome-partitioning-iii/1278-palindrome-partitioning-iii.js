/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

// recursion
// calculates diff from being a palindrome
// const calcDiff = (s, i, j) => {
//     const fi = i;
//     const fj = j;
//     let diff = 0;
//     while (i < j) {
//         if (s[i] !== s[j]) diff++;
//         i++;
//         j--;
//     }
//     // console.log({ s, fi, fj, diff})
//     return diff;
// }

// const solve = (s, i, j, requiredPart) => {
//     if (i>j) {
//         if (requiredPart <= 0) return 0;
//         else return Number.MAX_SAFE_INTEGER;
//     }
    
//     const length = j-i+1;
//     if(requiredPart>length) return Number.MAX_SAFE_INTEGER;  // same here also, to ignore this case
//     if(requiredPart==length) return 0;
//     if (requiredPart === 1) return calcDiff(s, i, j);
    
//     let minDiff = Number.MAX_SAFE_INTEGER;
//     for (let k = i; k < j; k++) {
//         const leftDiff = solve(s, i, k, 1);
//         const rightDiff = solve(s, k+1, j, requiredPart - 1);
        
//         const tempDiff = leftDiff + rightDiff;
        
//         if (tempDiff < minDiff) {
//             minDiff = tempDiff;
//         }
//     }
    
//     return minDiff;
// };

// var palindromePartition = function(s, k) {
//     const res = solve(s, 0, s.length-1, k);
//     console.log({ res })
    
//     return res;
// };

// recursion + memoization
const calcDiff = (s, i, j) => {
    const fi = i;
    const fj = j;
    let diff = 0;
    while (i < j) {
        if (s[i] !== s[j]) diff++;
        i++;
        j--;
    }
    // console.log({ s, fi, fj, diff})
    return diff;
}

const solve = (s, i, j, requiredPart, cache) => {
    if (i>j) {
        if (requiredPart <= 0) return 0;
        else return Number.MAX_SAFE_INTEGER;
    }
    
    const length = j-i+1;
    if(requiredPart>length) return Number.MAX_SAFE_INTEGER;  // same here also, to ignore this case
    if(requiredPart==length) return 0;

    if (cache[i][j][requiredPart] !== -1) return cache[i][j][requiredPart];

    if (requiredPart === 1) { 
        cache[i][j][requiredPart] = calcDiff(s, i, j);
        return cache[i][j][requiredPart];
    }
    
    let minDiff = Number.MAX_SAFE_INTEGER;
    for (let k = i; k < j; k++) {
        const leftDiff = solve(s, i, k, 1, cache);
        cache[i][k][1] = leftDiff;
        const rightDiff = solve(s, k+1, j, requiredPart - 1, cache);
        cache[k+1][j][requiredPart-1] = rightDiff;
        
        const tempDiff = leftDiff + rightDiff;
        
        if (tempDiff < minDiff) {
            minDiff = tempDiff;
        }
    }
    
    cache[i][j][requiredPart] = minDiff;
    return minDiff;
};

var palindromePartition = function(s, k) {
    const cache = Array(s.length).fill(-1).map(x => Array(s.length).fill(-1).map(x => Array(s.length).fill(-1)));
    // console.log({ cache })
    const res = solve(s, 0, s.length-1, k, cache);
    console.log({ res })
    
    return res;
};