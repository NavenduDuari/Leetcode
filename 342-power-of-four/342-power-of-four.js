/**
 * @param {number} n
 * @return {boolean}
 */
// var isPowerOfFour = function(n) {
//     if (n === 1) return true;
//     if (n <= 3) return false;
//     if (n % 4 === 0) return isPowerOfFour(n/4);
    
//     return false;
// };

var isPowerOfFour = function(n) {
    if (n === 1) return true;
    if (n <= 3) return false;
    if ((n&(n-1)) !== 0) return false;
    return (n-1) % 3 === 0;
}
