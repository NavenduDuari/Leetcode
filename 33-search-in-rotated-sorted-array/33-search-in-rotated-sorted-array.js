/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var search = function(nums, target) {
//     const len = nums.length;
//     let startIdx = 0;
//     let endIdx = len-1;
    
//     while (startIdx < endIdx) {
//         let midIdx = Math.floor((startIdx+endIdx)/2);
//         // console.log('midIdx::', midIdx);
        
//         if (nums[midIdx] === target) return midIdx;
//         else if (nums[midIdx] <= nums[endIdx]) {
//             if (target > nums[midIdx] && target <= nums[endIdx]) {
//                 startIdx = midIdx + 1;
//             } else {
//                 endIdx = midIdx - 1;
//             }
//         } else {
//             if (target < nums[midIdx] && target >= nums[startIdx]) {
//                 endIdx = midIdx - 1;
//             } else {
//                 startIdx = midIdx + 1;
//             }
//         }
//     }
    
//     // console.log('startIdx::', startIdx);    
//     // console.log('endIdx::', endIdx);    
//     return nums[startIdx] === target ? startIdx : -1;
// };

var search = function(nums, target) {
    const len = nums.length;
    let startIdx = 0;
    let endIdx = len-1;
    
    while (startIdx < endIdx) {
        const midIdx = Math.floor((startIdx + endIdx) / 2);
        if (nums[midIdx] === target) return midIdx;
        // one of the two halves is monotonicaly increasing
        
        // if left part is monotonically increasing then it is safe to drop the right part
        if (nums[startIdx] <= nums[midIdx]) { 
            if (target >= nums[startIdx] && target < nums[midIdx]) {
                endIdx = midIdx - 1;
            } else {
                startIdx = midIdx + 1;
            }
        } else { // right part is monotonically increasing
            if (target > nums[midIdx] && target <= nums[endIdx]) {
                startIdx = midIdx + 1;
            } else {
                endIdx = midIdx - 1;
            }
        }
    }
    
    console.log('startIdx::', startIdx);
    
    return nums[startIdx] === target ? startIdx : -1;
}
