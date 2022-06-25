/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
// var nextGreatestLetter = function(letters, target) {
//     let len = letters.length;
//     letters.push(letters[0]);
//     let startIdx = 0;
//     let endIdx = len - 1;
//     while (startIdx <= endIdx) {
//         let midIdx = startIdx + Math.floor((endIdx - startIdx)/2);
//         if (letters[midIdx] > target) {
//             endIdx = midIdx - 1;
//         } else {
//             startIdx = midIdx+1;
//         }
//     }
    
//     return letters[startIdx];
// };

var nextGreatestLetter = function(letters, target) {
    const len = letters.length;
    letters.push(letters[0]);
    let startIdx = 0;
    let endIdx = len-1;
    
    while (startIdx <= endIdx) {
        const midIdx = Math.floor((startIdx + endIdx) / 2);
        if (letters[midIdx] > target) {
            endIdx = midIdx - 1;
        } else {
            startIdx = midIdx+1;
        }
    }
    
    console.log('startIdx::', startIdx);
    
    return letters[startIdx];
}