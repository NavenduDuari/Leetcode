/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// const backtrack = (nums, startIdx, sub, subs) => {
//     subs.push(sub);
//     for (let i = startIdx; i < nums.length; i++) {
//         sub.push(nums[i]);
//         backtrack(nums, i+1, [...sub], subs);
//         sub.pop();
//     }
// };

// var subsets = function(nums) {
//     const subs = [];
//     backtrack(nums, 0, [], subs);
    
//     return subs;
// };

      //               []
      //        [1]    [2]    [3]
      // [1,2] [1,3]   [2,3]
      // [1,2,3]

const backtrack = (nums, startIdx, sub, res) => {
    res.push(sub);
    for (let i = startIdx; i < nums.length; i++) {
        sub.push(nums[i]);
        backtrack(nums, i+1, [...sub], res);
        sub.pop();
    }
};

var subsets = function(nums) {
    const res = [];
    backtrack(nums, 0, [], res);
    
    console.log('res::', res);
    
    return res;
};