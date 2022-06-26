/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */

// const findMutatedArrSum = (arr, midVal) => {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i] > midVal ? midVal : arr[i];
//     }
    
//     return sum;
// };

// var findBestValue = function(arr, target) {
//     let startVal = 1;
//     let endVal = Math.max(...arr);
//     let res = { absDiff: Number.MAX_SAFE_INTEGER, val: -1 };
//     const actualArrSum = arr.reduce((cV, pV) => pV+cV, 0);
//     if (actualArrSum <= target) return endVal; // IMP
    
//     while (startVal < endVal) {
//         // console.log('startVal::', startVal);
//         // console.log('endVal::', endVal);
//         let midVal = Math.floor((endVal + startVal)/2);
//         // console.log('midVal::', midVal);
        
//         const mutatedArrSum =findMutatedArrSum(arr, midVal);
//         if (mutatedArrSum < target) {
//             startVal = midVal+1;
//         } else {
//             endVal = midVal;
//         }
        
//         const absDiff = Math.abs(target - mutatedArrSum);
//         if (absDiff < res.absDiff) {
//             // console.log('changing::', res)
//             res.absDiff = absDiff;
//             res.val = midVal;
//             // console.log('new::', res, mutatedArrSum)
//         }
//     }
//     // console.log(res)
//     const mutatedArrSum = findMutatedArrSum(arr, res.val-1);
//     const absDiff = Math.abs(target - mutatedArrSum);
//     if (absDiff <= res.absDiff) { // IMP
//         res.absDiff = absDiff;
//         res.val = res.val-1;
//     }
    
//     // console.log('res::', res);
//     return res.val;
// };

const calcMutatedArrSum = (arr, pivotVal) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= pivotVal) {
            sum += arr[i];
        } else {
            sum += pivotVal;
        }
    }
    
    return sum;
};

var findBestValue = function(arr, target) {
    let minVal = 1;
    let maxVal = Math.max(...arr);
    let minAbsDiff = Number.MAX_SAFE_INTEGER;
    let res = maxVal;
    
    while (minVal <= maxVal) {
        const midVal = Math.floor((minVal+maxVal) / 2);
        const mutatedArrSum = calcMutatedArrSum(arr, midVal);
        const absDiff = Math.abs(target - mutatedArrSum);
        if (absDiff === 0) return midVal;
        console.log('midVal::', midVal);
        console.log('absDiff::', absDiff);
        console.log('minAbsDiff::', minAbsDiff);
        if (absDiff < minAbsDiff) {
            res = midVal;
            minAbsDiff = absDiff;
        }
        
        if (mutatedArrSum < target) {
            minVal = midVal + 1;
        } else {
            maxVal = midVal - 1;
        }
    }
    
    // check the prev number
    const mutatedArrSum = calcMutatedArrSum(arr, res-1);
    const absDiff = Math.abs(target - mutatedArrSum);
    if (absDiff <= minAbsDiff) {
        res = res-1;
    }
    
    return res;
}