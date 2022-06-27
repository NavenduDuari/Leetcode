/**
 * @param {number[]} nums
 * @return {number}
 */
// var findDuplicate = function(nums) {
//     const len = nums.length;
    
//     let i = 0;
//     const swap = (i , j) => {
//         const temp = nums[i];
//         nums[i] = nums[j];
//         nums[j] = temp;
//     };
    
//     while (i < len) {
//         const correctIdx = nums[i] - 1;
//         if (nums[correctIdx] !== nums[i]) {
//             swap(i, correctIdx);
//         } else {
//             i++;
//         }
//     }
    
//     for(let j = 0; j < len; j++) {
//         if (nums[j] !== j + 1) return nums[j];
//     }
    
//     return -1;
// };

var findDuplicate = function(nums) {
    const len = nums.length;
    
    const swap = (i, j) => {
        const temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    };
    
    let i = 0;
    while (i < len) {
        const correctIdx = nums[i];
        if (nums[correctIdx] != nums[i]) {
            swap(correctIdx, i);
        } else {
            i++;
        }
    }
    
    console.log('nums::', nums)
    
    for (let i = 0; i <= len; i++) {
        if (nums[i] !== i) return nums[i];
    }
    
    return 0;
}