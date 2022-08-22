/**
 * @param {string} s
 * @return {string[]}
 */

const backtrack = (ip, startIdx, op, result) => {
    if (ip.length === startIdx) {
        result.push(op);
    } else {
        const char = ip[startIdx];
        
        if (isNaN(char)) {
            const op1 = op.concat(char.toUpperCase());
            const op2 = op.concat(char.toLowerCase());
            backtrack(ip, startIdx+1, op1, result);
            backtrack(ip, startIdx+1, op2, result);
        } else {
            const op1 = op.concat(char);
            backtrack(ip, startIdx+1, op1, result);
        }
        
    }
};

var letterCasePermutation = function(s) {
    const result = [];
    backtrack(s, 0, '', result);
    return result;
};