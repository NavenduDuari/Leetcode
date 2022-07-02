/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var searchRange = function(nums, target) {
    
//     let startIdx = 0;
//     let endIdx = nums.length - 1;
//     let targetIdx = -1;
//     while (startIdx <= endIdx) {
//         let midIdx = startIdx + Math.floor((endIdx - startIdx)/2);
//         if (nums[midIdx] === target) {
//             targetIdx = midIdx;
//             break;
//         }
//         if (nums[midIdx] > target) {
//             endIdx = midIdx - 1;
//         } else {
//             startIdx = midIdx + 1;
//         }
//     }
    
//     // console.log('targetIdx::', targetIdx)
    
//     if (targetIdx === -1) {
//         return [-1, -1];
//     } else {
//         let idx = targetIdx;
//         while (idx >= 0 && nums[idx] === target) idx--;
//         let targetStartIdx = idx + 1;

//         idx = targetIdx;
//         while (idx < nums.length && nums[idx] === target) idx++;
//         let targetEndIdx = idx - 1;
//         return [targetStartIdx, targetEndIdx];
//     }

//     return [-1, -1];
// };


var searchRange = function(nums, target) {
    const len = nums.length;
    let startIdx = 0;
    let endIdx = len-1;
    let targetIdx = -1;
    
    while (startIdx <= endIdx) {
        const midIdx = Math.floor((startIdx + endIdx) / 2);
        if (target === nums[midIdx]) {
            targetIdx = midIdx;
            break;
        }
        if (target < nums[midIdx]) {
            endIdx = midIdx -1;
        } else {
            startIdx = midIdx + 1;
        }
    }
    console.log('startIdx::', startIdx);
    console.log('targetIdx::', targetIdx);
    if (targetIdx === -1) {
        return [-1, -1];
    } else {
        let targetStartIdx = targetIdx;
        while (nums[targetStartIdx] === nums[targetStartIdx-1]) targetStartIdx--;
        console.log('targetStartIdx::', targetStartIdx);
        let targetEndIdx = targetIdx;
        while (nums[targetEndIdx] === nums[targetEndIdx+1]) targetEndIdx++;
        console.log('targetEndIdx::', targetEndIdx);
        
        return [targetStartIdx, targetEndIdx];
    }
    
    return [-1, -1];
}