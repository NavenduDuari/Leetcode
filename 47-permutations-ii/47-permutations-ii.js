/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const backTrack = (result, nums, used, path) => {
    if (path.length === nums.length) {
        result.push([...path]);
    } else {
        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;
            if (i > 0 && nums[i-1] === nums[i] && !used[i - 1]) continue; //imp
            used[i] = true;
            path.push(nums[i]);
            backTrack(result, nums, used, path);
            path.pop();
            used[i] = false;
        }
    }
};

var permuteUnique = function(nums) {
    const result = [];
    const path = [];
    const used = [];
    nums.sort(); // imp
    backTrack(result, nums, used, path);
    return result;
};