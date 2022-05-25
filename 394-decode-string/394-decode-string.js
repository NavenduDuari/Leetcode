/**
 * @param {string} s
 * @return {string}
 */

const getStr = (s, i) => {
    // console.log('getStr::', s, i)
    
    let str = '';
    const stack = [];
    let j = i+1;
    stack.push(s[j++]);
    while (stack.length) {
        // console.log('ch::', s[j], stack)
        if (s[j] === '[') {
            stack.push(s[j]);
            str += s[j];
        } else if (s[j] === ']') {
            stack.pop();
            if (stack.length) {
                str += s[j];
            }
        } else {
            str += s[j];
        }
        j++;
    }
    
    // console.log('returning::', str, j-1)
    return [str, j-1];
};

const getMultiplier = (s, i) => {
    let str = '';
    let j = i;
    while (s[j] !== '[') {
        str += s[j];
        j++;
    }
    
    return [Number(str), j-1];
};

const multiplyStr = (str, m) => {
    // console.log('multiplyStr::', str, m)
    let res = '';
    for (let i = 0; i < m; i++) {
        res += str;
    }
    
    return res;
};

var decodeString = function(s) {
    let res = '';
    for (let i = 0; i < s.length; i++) {
        if (!isNaN(s[i])) {
            const [multiplier, startIdxOfStr] = getMultiplier(s, i);
            const [str, endIdxOfStr] = getStr(s, startIdxOfStr);
            const dStr = decodeString(str);
            res += multiplyStr(dStr, multiplier);
            i = endIdxOfStr;
        } else {
            res += s[i];
        }
    }

    return res;
};