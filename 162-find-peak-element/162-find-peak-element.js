/**
 * @param {number[]} nums
 * @return {number}
 */
// var findPeakElement = function(nums) {
//     const len = nums.length;

//     // check if there is only one num
//     if (len === 1) return 0;
    
//     // check for 1st and last num
//     if (nums[0] > nums[1]) return 0;
//     if (nums[len - 1] > nums[len - 2]) return len-1;
    
//     // search the remaining space
//     let startIdx = 1;
//     let endIdx = len - 2;
    
//     while (startIdx <= endIdx) {
//         let midIdx = Math.floor((startIdx + endIdx) / 2);
//         // console.log('startIdx::', startIdx)
//         // console.log('endIdx::', endIdx)
//         // console.log('mid::', midIdx)

//         if (nums[midIdx] > nums[midIdx-1] && nums[midIdx] > nums[midIdx+1]) {
//             return midIdx;
//         } else if (nums[midIdx] < nums[midIdx-1]) {
//             endIdx = midIdx - 1;
//         } else if (nums[midIdx] < nums[midIdx+1]) {
//             startIdx = midIdx + 1;
//         }
//     }
    
//     // console.log('startIdx::', startIdx);
//     // console.log('endIdx::', endIdx);
    
//     return -1;
// };

var findPeakElement = function(nums) {
    const len = nums.length;
    if (len === 0) return -1;
    if (len === 1) return 0;

    
    if (nums[0] > nums[1]) return 0;
    if (nums[len-1] > nums[len-2]) return len-1;
    let startIdx = 1;
    let endIdx = len - 2;
    
    while(startIdx <= endIdx) {
        const midIdx = Math.floor((startIdx + endIdx) / 2);
        if (nums[midIdx] > nums[midIdx-1] && nums[midIdx] > nums[midIdx+1]) return midIdx;
        if (nums[midIdx] < nums[midIdx+1]) {
            startIdx = midIdx + 1;    
        } else {
            endIdx = midIdx - 1;
        }
    }
    
    console.log('startIdx::', startIdx);
    console.log('endIdx::', endIdx);
    return -1;
}