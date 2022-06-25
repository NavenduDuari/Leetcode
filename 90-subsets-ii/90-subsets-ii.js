/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// const backtrack = (nums, startIdx, sub, subs) => {
//     subs.push(sub);
//     for (let i = startIdx; i < nums.length; i++) {
//         if (i > startIdx && nums[i] === nums[i-1]) continue; // skip
//         sub.push(nums[i]);
//         backtrack(nums, i+1, [...sub], subs);
//         sub.pop();
//     }
// };

// var subsetsWithDup = function(nums) {
//     const subs = [];
//     nums.sort();
//     backtrack(nums, 0, [], subs);
//     // console.log('subs::', subs);
    
//     return subs;
// };

const backtrack = (nums, startIdx, sub, res) => {
    res.push(sub);
    
    for (let i = startIdx; i < nums.length; i++) {
        if (i > startIdx && nums[i] === nums[i-1]) continue;
        sub.push(nums[i]);
        backtrack(nums, i+1, [...sub], res);
        sub.pop();
    }
};

var subsetsWithDup = function(nums) {
    const res = [];
    const sub = [];
    nums.sort(); // imp
    backtrack(nums, 0, sub, res);
    
    console.log('res::', res);
    return res;
};