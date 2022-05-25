/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
0
01
0110
01101001
0110100110010110

const solve = (n, k, shouldNegate) => {
    if (n === 1) {
        return shouldNegate ? 1 : 0;
    }
    const len = 2 ** (n-1);
    const prevLen = len / 2;

    // console.log('solve::len::', len)
    if (k <= prevLen) {
        return solve(n-1, k, shouldNegate);
    } else {
        let newK = k - prevLen;
        return solve(n, newK, !shouldNegate);
    }
};

var kthGrammar = function(n, k) {
    const res = solve(n, k, false);
    // console.log('res::', res);
    
    return res;
};