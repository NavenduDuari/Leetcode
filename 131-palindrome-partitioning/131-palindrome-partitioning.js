/**
 * @param {string} s
 * @return {string[][]}
 */

// partition recustion (dp)
const isPalindrome = (s) => {
    let i = 0;
    let j = s.length - 1;
    while(i<j){
        if( s[i] != s[j]) return false;
        i++;  j--;
    }
    return true;
}

const solve = (s, res, temp) => {
    const sLen = s.length;
    for (let k=1; k<sLen; k++) {
        const leftS = s.substring(0, k);
        if (isPalindrome(leftS)) {
            temp.push(leftS);
            const rightS = s.substring(k, sLen);
            
            if (isPalindrome(rightS)) {
                temp.push(rightS);
                res.push([...temp]);
                temp.pop();
            }
            
            solve(rightS, res, temp);
            temp.pop();
        }
    }
};

var partition = function(s) {
    const res = [];
    
    if (s === '') {
        res.push([]);
    }
    
    solve(s, res, []);
    
    if (isPalindrome(s)) {
        res.push([s]);
    }

    return res;
};