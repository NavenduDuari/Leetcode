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

// const backtrack = (nums, startIdx, sub, res) => {
//     res.push(sub);
//     for (let i = startIdx; i < nums.length; i++) {
//         sub.push(nums[i]);
//         backtrack(nums, i+1, [...sub], res);
//         sub.pop();
//     }
// };

// var subsets = function(nums) {
//     const res = [];
//     backtrack(nums, 0, [], res);
    
//     console.log('res::', res);
    
//     return res;
// };

// const backtrack = (nums, startIdx, subset, res) => {
//     res.push([...subset]);
//     for (let i = startIdx; i < nums.length; i++) {
//         subset.push(nums[i]);
//         backtrack(nums, i+1, subset, res);
//         subset.pop();
//     }
// };

// var subsets = (nums) => {
//     const res = [];
//     const subset = [];
//     backtrack(nums, 0, subset, res);
//     return res;
// };

const backtrack = (ip, startIdx, op, res) => {
    res.push(op);
    for (let i = startIdx; i < ip.length; i++) {
        const num = ip[i];
        const newOp = [...op, num];
        backtrack(ip, i+1, newOp, res);
    }
};

var subsets = (nums) => {
    const res = [];
    const subset = [];
    backtrack(nums, 0, subset, res);
    return res;
};