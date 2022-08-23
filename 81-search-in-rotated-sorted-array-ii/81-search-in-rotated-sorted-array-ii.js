/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */


// Modified binary search
// 0. to avoid duplicates, shrink the search space
// 1. find the mid
// 2. one part should be monotonic increasing(part1) and other(part2) would be NOT
// 3. check if the target is between the part1
// 4. if yes, then search on the part1
// 5. if no, then search on the part2

var search = function(nums, target) {
    let startIdx = 0;
    let endIdx = nums.length - 1;
    
    while (startIdx <= endIdx) {
        // to avoid duplicates
        while (startIdx < endIdx && nums[startIdx] === nums[startIdx + 1])
            ++startIdx;
        while (startIdx < endIdx && nums[endIdx] == nums[endIdx - 1])
            --endIdx;
        
        const midIdx = Math.floor((startIdx + endIdx) / 2);
        if (nums[midIdx] === target) return true;
            
        // if left part is monotonic increasing
        if (nums[startIdx] <= nums[midIdx]) {
            if (nums[startIdx] <= target && target < nums[midIdx]) {
                endIdx = midIdx - 1;
            } else {
                startIdx = midIdx + 1;
            }
        } else { // right part is monotonic increamental
            if (nums[midIdx] < target && target <= nums[endIdx]) {
                startIdx = midIdx + 1;
            } else {
                endIdx = midIdx - 1;
            }
        }
    }
    
    return false;
};