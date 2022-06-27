/**
 * @param {number[]} nums
 * @return {number}
 */
// var missingNumber = function(nums) {
//     const len = nums.length;
//     const swap = (i, j) => {
//         const temp = nums[j];
//         nums[j] = nums[i];
//         nums[i] = temp;
//     };
//     let i = 0;
//     while (i < len) {
//         const correctIdx = nums[i];
//         if (nums[i] !== nums[correctIdx]) {
//             swap(i, correctIdx);
//         } else {
//             i++;
//         }
//     }
    
//     for (let j = 0; j <= len; j++) {
//         if (nums[j] !== j) return j;
//     }
    
//     return 0;
// };

var missingNumber = function(nums) {
    const len = nums.length;
    
    const swap = (i, j) => {
        const temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
    
    let i = 0;
    while (i < len) {
        const correctIdx = nums[i];
        if (nums[correctIdx] != nums[i]) {
            swap(correctIdx, i);
        } else {
            i++;
        }
    }
    
    for (let i = 0; i <= len; i++) {
        if (nums[i] !== i) return i;
    }
    
    return 0;
}