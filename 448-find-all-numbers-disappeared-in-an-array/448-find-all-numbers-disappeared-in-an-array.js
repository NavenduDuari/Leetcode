/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var findDisappearedNumbers = function(nums) {
//     const result = [];
//     const len = nums.length;
//     const swap = (i, j) => {
//         const temp = nums[i];
//         nums[i] = nums[j];
//         nums[j] = temp;
//     };
    
//     let i = 0;
    
//     while (i < len) {
//         const correctIdx = nums[i] - 1;
//         if (nums[correctIdx] !== nums[i]) {
//             swap(i, correctIdx);
//         } else {
//             i++;
//         }
//     }
    
//     for (let j = 0; j < len; j++) {
//         if (j+1 !== nums[j]){
//             result.push(j+1);
//         }
//     }
    
//     return result;
// };

var findDisappearedNumbers = function(nums) {
    const len = nums.length;
    const swap = (i , j) => {
        const temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    };
    
    let i = 0;
    while (i < len) {
        const correctIdx = nums[i];
        
        if (nums[correctIdx] !== nums[i]) {
            swap(correctIdx, i);
        } else {
            i++;
        }
    }
    
    // console.log('nums::', nums);
    const res = [];
    for (let i = 1; i <= len; i++) {
        if (nums[i] !== i) res.push(i);
    }
    
    return res;
}