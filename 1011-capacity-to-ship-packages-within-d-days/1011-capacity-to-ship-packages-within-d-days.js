/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
// const calcDaysToDeliver = (weights, capacity) => {
//     let totalDays = 1;
//     let remainingSpace = capacity;
//     for (let i = 0; i < weights.length; i++) {
//         remainingSpace -= weights[i];
//         if (remainingSpace < 0) {
//             totalDays++;
//             remainingSpace = capacity - weights[i];
//         }
//     }
    
//     return totalDays;
// };

// var shipWithinDays = function(weights, days) {
//     let startVal = Math.max(...weights);
//     let endVal = weights.reduce((cV, pV) => cV+pV, 0);
//     let res = endVal;
    
//     while (startVal < endVal) {
//         const midVal = Math.floor((startVal + endVal) / 2);
//         // console.log('midVal::', midVal);
//         const daysToDeliver = calcDaysToDeliver(weights, midVal);
//         // console.log('daysToDeliver::', daysToDeliver);
        
//         if (daysToDeliver > days) {
//             startVal = midVal+1;
//         } else {
//             endVal = midVal;
//             if (midVal < res) {
//                 res = midVal;
//             }
//         }
//     }
    
//     // console.log('res::', res);
    
//     return res;
// };

const calcDaysToShip = (weights, capacity) => {
    let totalDays = 1;
    let currCapacity = capacity;
    for (let i = 0; i < weights.length; i++) {
        currCapacity -= weights[i];
        if (currCapacity < 0) {
            totalDays++;
            currCapacity = capacity - weights[i];
        }
    }
    
    return totalDays;
};

var shipWithinDays = function(weights, days) {
    let minWeight = Math.max(...weights);
    let maxWeight = weights.reduce((cV, pV) => cV+pV, 0);
    let res = maxWeight;
    
    while (minWeight < maxWeight) {
        const midWeight = Math.floor((minWeight + maxWeight) / 2);
        const daysToShip = calcDaysToShip(weights, midWeight);
        if (daysToShip <= days) {
            maxWeight = midWeight;
            if (maxWeight < res) {
                res = maxWeight;
            }
        } else {
            minWeight = midWeight + 1;
        }
    }
    
    return res;
}