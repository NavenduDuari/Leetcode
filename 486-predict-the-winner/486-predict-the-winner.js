/**
 * @param {number[]} nums
 * @return {boolean}
 */
const solve = (nums, score1, score2, i, j, turn) => {
    // console.log('solve::', nums[i], nums[j], turn)
    const opt1Score1 = score1 + (turn ? nums[i] : 0);
    const opt1Score2 = score2 + (turn ? 0 : nums[i]);
    const opt2Score1 = score1 + (turn ? nums[j] : 0);
    const opt2Score2 = score2 + (turn ? 0 : nums[j]);
    if (j - i === 1) {
        // console.log('opt1Score1::', opt1Score1);
        // console.log('opt1Score2::', opt1Score2);
        // console.log('opt2Score1::', opt2Score1);
        // console.log('opt2Score2::', opt2Score2);
        if (turn) {
            return (opt1Score1 >= opt1Score2+nums[j]) || (opt2Score1 >= opt2Score2+nums[i]);
        } else {
            return (opt1Score1+nums[j] >= opt1Score2) && (opt2Score1+nums[i] >= opt2Score2);
        }
    }
    
    if (turn) {
        return solve(nums, opt1Score1, opt1Score2, i+1, j, !turn) || solve(nums, opt2Score1, opt2Score2, i, j-1, !turn);
    } else {
        return solve(nums, opt1Score1, opt1Score2, i+1, j, !turn) && solve(nums, opt2Score1, opt2Score2, i, j-1, !turn);
    }
};

var PredictTheWinner = function(nums) {
    if (nums.length <= 1) return true;
    const res = solve(nums, 0, 0, 0, nums.length-1, true);
    // console.log('res::', res);
    
    return res;
};