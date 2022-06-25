/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var search = function(nums, target) {
//     let startIdx = 0;
//     let endIdx = nums.length - 1;
    
//     while (startIdx <= endIdx) {
//         let midIdx = Math.floor((startIdx+endIdx)/2);
        
//         if (nums[midIdx] === target) return midIdx;
//         if (nums[midIdx] < target) {
//             startIdx = midIdx + 1;
//         } else {
//             endIdx = midIdx - 1;
//         }
//     }
    
//     console.log(startIdx, endIdx)
//     return -1;
// };

var search = function(nums, target) {
    const len = nums.length;
    let startIdx = 0;
    let endIdx = len-1;
    
    while (startIdx <= endIdx) {
        const midIdx = Math.floor((startIdx + endIdx) / 2);
        if (nums[midIdx] === target) return midIdx;
        if (nums[midIdx] < target) {
            startIdx = midIdx + 1;
        } else {
            endIdx = midIdx - 1;
        }
    }
    
    console.log('startIdx::', startIdx);
    
    return -1;
}