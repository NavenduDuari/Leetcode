/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
// 1 -> 1
// 3 -> 2
// 7 -> 3
// 15 -> 4

const solve = (len, k, negative) => {
    // console.log('solve::', len, k, negative);
    if (len === 1) return negative ? !Number(len[0]) : !!Number(len[0]);
    // mid idx ===> 1
    if (k === Math.floor(len/2) + 1) {
        return negative ? false : true;
    }
    
    const prevLen = Math.floor(len/2);
    
    // k less than prev row len
    if (prevLen >= k) {
        return solve(prevLen, k, negative);
    }
    
    // k greater than prev row len
    const prevK = prevLen - (k - prevLen - 1) + 1;
    // console.log('prevLen::', prevLen);
    // console.log('prevK::', prevK);
    
    return solve(prevLen, prevK, !negative)
};

var findKthBit = function(n, k) {
    const len = (2 ** n) - 1;
    return solve(len, k, false) ? "1" : "0";
};