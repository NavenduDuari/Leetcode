/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
// var minDays = function(bloomDay, m, k) {
//     const totalFlower = bloomDay.length;
//     if (m*k > totalFlower) return -1;
//     let minDay = 1;
//     let maxDay = Math.max(...bloomDay);
    
//     while (minDay < maxDay) {
//         let midDay = minDay + Math.floor((maxDay-minDay)/2);
//         let streak = 0;
//         let bouqetCount = 0;
//         for (let i = 0; i < totalFlower; i++) {
//             if (bloomDay[i] <= midDay) {
//                 streak++;
//                 if (streak === k) {
//                     bouqetCount++;
//                     streak = 0;
//                 }
//             } else {
//                 streak = 0;
//             }
//         }
        
//         if (bouqetCount < m) {
//             minDay = midDay + 1;
//         } else {
//             maxDay = midDay;
//         }
//     }
    
//     return minDay;
// };

const calcBouquetCount = (bloomDay, k, days) => {
    let streak = 0;
    let count = 0;
    for (let i = 0; i < bloomDay.length; i++) {
        if (bloomDay[i] <= days) {
            streak++;
            if (streak === k) {
                count++;
                streak = 0;
            }
        } else {
            streak = 0;
        }
    }
    
    return count;
};

var minDays = function(bloomDay, m, k) {
    let minDay = 1;
    let maxDay = Math.max(...bloomDay);
    
    if (m*k > bloomDay.length) return -1;
    
    while (minDay <= maxDay) {
        const midDay = Math.floor((minDay+maxDay)/2);
        const bouquetCount = calcBouquetCount(bloomDay, k, midDay);
        
        if (bouquetCount < m) {
            minDay = midDay+1;
        } else {
            maxDay = midDay-1;
        }
    }
    
    console.log('minDay::', minDay);
    console.log('maxDay::', maxDay);
    
    return minDay;
}

