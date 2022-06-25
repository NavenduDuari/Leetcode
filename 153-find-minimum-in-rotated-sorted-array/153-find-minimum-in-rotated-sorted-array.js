/**
 * @param {number[]} nums
 * @return {number}
 */

// var findMin = function(nums) {
//     if (nums.length === 1) return nums[0];
//     const lastNum = nums[nums.length - 1];
    
//     let startIdx = 0;
//     let endIdx = nums.length - 1;
    
//     while (startIdx < endIdx) {
//         let midIdx = Math.floor((startIdx + endIdx) / 2);
//         // console.log('start::', startIdx)
//         // console.log('end::', endIdx)
//         // console.log('mid::', midIdx)
//         if (nums[midIdx] < nums[midIdx-1] && nums[midIdx] < nums[midIdx+1]) return nums[midIdx];
//         else if (nums[midIdx] > nums[endIdx]) {
//             startIdx = midIdx + 1;
//         } else {
//             endIdx = midIdx;
//         }
//     }
    
//     // console.log('startIdx::', startIdx, nums[startIdx])
//     // console.log('endIdx::', endIdx, nums[endIdx])
//     return nums[startIdx];
// };

var findMin = function(nums) {
    const len = nums.length;
    let startIdx = 0;
    let endIdx = len-1;
    
    while (startIdx < endIdx) {
        const midIdx = Math.floor((startIdx + endIdx) / 2);
        // one of the two halves should be monotonically increasing
        if (nums[midIdx] < nums[midIdx + 1] && nums[midIdx] < nums[midIdx - 1]) return nums[midIdx];
        else if (nums[midIdx] < nums[endIdx]) {
            endIdx = midIdx;
        } else {
            startIdx = midIdx + 1;
        }
    }
    
    console.log('startIdx::', startIdx)
    console.log('endIdx::', endIdx)
    
    return nums[startIdx];
}