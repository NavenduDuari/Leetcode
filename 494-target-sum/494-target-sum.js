/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/*
            solve(nums, n, target) {
                if (n === 0) {
                    if (target === 0) return 1;
                    return 0;
                }
                return solve(nums, n-1, target - nums[n-1]) + solve(nums, n-1, target + nums[n-1]);
            }
*/

const solve = (nums, n, target, total, cache) => {
    if (n === 0) {
        if (target === 0) return 1;
        return 0;
    }
    
    if (cache[n][target + total]) return cache[n][target + total];
    
    
    cache[n][target + total] = solve(nums, n-1, target - nums[n-1], total, cache) + solve(nums, n-1, target + nums[n-1], total, cache);
    
    return  cache[n][target + total];
};

var findTargetSumWays = function(nums, target) {
    const len = nums.length;
    const total = nums.reduce((pV, cV) => pV + cV , 0);
    
    const cache = new Array(len+1);
    for (let i = 0; i < cache.length; i++) {
      cache[i] = new Array(2 * total + 1);
    }
    
    const res = solve(nums, nums.length, target, total, cache);
    
    return res;
};