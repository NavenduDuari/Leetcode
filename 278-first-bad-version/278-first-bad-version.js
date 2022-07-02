/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
// var solution = function(isBadVersion) {
//     /**
//      * @param {integer} n Total versions
//      * @return {integer} The first bad version
//      */
//     return function(n) {
//         let startVersion = 1;
//         let endVersion = n;
        
//         while (startVersion < endVersion) {
//             let midVersion = startVersion + Math.floor((endVersion - startVersion) / 2);
//             if (isBadVersion(midVersion)) {
//                 endVersion = midVersion;
//             } else {
//                 startVersion = midVersion + 1;
//             }
//         }
//         return startVersion;
//     };
// };

var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let startVersion = 0;
        let endVersion = n;
        
        while (startVersion < endVersion) {
            const midVersion = Math.floor((startVersion + endVersion) / 2);
            if(isBadVersion(midVersion)) {
                endVersion = midVersion;
            } else {
                startVersion = midVersion + 1;
            }
        }
        
        return startVersion;
    };
};