/**
 * @param {number[]} height
 * @return {number}
 */
// var trap = function(height) {
//     const maxLeft = []; //maxLeft[i] gives max left val for ith element
//     const maxRight = []; //maxRight[i] gives max right val for ith element
//     const len = height.length;
    
//     let currMax = 0;
//     for (let i = 0; i < len; i++) {
//         if (currMax <= height[i]) {
//             maxLeft[i] = 0;
//             currMax = height[i];
//         } else {
//             maxLeft[i] = currMax;
//         }
//     }
    
//     currMax = 0;
//     for (let i = len-1; i >= 0; i--) {
//         if (currMax <= height[i]) {
//             maxRight[i] = 0;
//             currMax = height[i];
//         } else {
//             maxRight[i] = currMax;
//         }
//     }
    
//     let water = 0;
//     for (let i = 0; i < len; i++) {
//         const level = Math.min(maxLeft[i], maxRight[i]);
//         if (level) {
//             water += Math.min(maxLeft[i], maxRight[i]) - height[i];
//         }
//     }
    
//     return water;
    
// };

var trap = function(height) {
    const len = height.length;
    const maxLeft = [];
    const maxRight = [];
    
    let currMax = 0;
    for (let i = 0; i < len; i++) {
        maxLeft[i] = currMax;
        if (currMax < height[i]) {
            currMax = height[i];
        }
    }
    
    currMax = 0;
    for (let i = len-1; i >= 0; i--) {
        maxRight[i] = currMax;
        if (height[i] > currMax) {
            currMax = height[i];
        }
    }
    
    let totalWater = 0;
    for (let i = 0; i < len; i++) {
        const diff = Math.min(maxRight[i], maxLeft[i]) - height[i];
        totalWater += diff > 0 ? diff : 0;
    }
    
    return totalWater;
}