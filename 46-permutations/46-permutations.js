/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// const backtrack = (nums, path, used, res) => {
//     if (path.length === nums.length) {
//          res.push([...path]);
//     } else {
//         for (let i = 0; i < nums.length; i++) {
//             if (used[i]) continue;
//             path.push(nums[i]);
//             used[i] = true;
//             backtrack(nums, path, used, res);
//             path.pop();
//             used[i] = false;
//         }
//     }
    
// };

// var permute = function(nums) {
//     const res = [];
//     const used = Array(nums.length).fill(false);
//     backtrack(nums, [], used, res);
//     // console.log('res::', res);
//     return res;
// };

const backtrack = (nums, path, used, res) => {
    if (path.length === nums.length) {
        res.push([...path]);
    } else {
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            if (used[num]) continue;
            path.push(num);
            used[num] = true;
            backtrack(nums, path, used, res);
            path.pop();
            used[num] = false;
        }
    }
};

var permute = function(nums) {
    const res = [];
    const used = [];
    const path = [];
    backtrack(nums, path, used, res);
    return res;
};