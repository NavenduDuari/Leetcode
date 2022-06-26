/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
// const calcTimeToEatAll = (piles, speed) => {
//     let totalTime = 0;
//     for (let i = 0; i < piles.length; i++) {
//         const fullDay = Math.floor(piles[i] / speed);
//         const partialDay = piles[i] % speed ? 1 : 0;
//         totalTime = totalTime + fullDay + partialDay;
//     }
    
//     return totalTime;
// };

// var minEatingSpeed = function(piles, h) {
//     let startVal = 1;
//     let endVal = Math.max(...piles);
//     // if (piles.length < h) return -1;
//     let res = endVal;
    
//     while (startVal < endVal) {
//         let midVal = Math.floor((startVal + endVal) / 2);
//         // console.log('mid::', midVal)
        
//         const timeToEatAll = calcTimeToEatAll(piles, midVal);
//         // console.log('time::', timeToEatAll)
        
//         if (timeToEatAll > h) {
//             startVal = midVal + 1;
//         } else {
//             endVal = midVal;
//             if (midVal < res) {
//                 res = midVal;
//                 // console.log('setting res')
//             }
//         }
//     }
    
//     console.log('res::', res);
    
//     return res;
// };

const calcTimeToEatAll = (piles, speed) => {
    let totalTime = 0;
    for (let i = 0; i < piles.length; i++) {
        if (piles[i] <= speed) totalTime++;
        else {
            totalTime += (Math.ceil(piles[i]/speed));
        }
    }
    
    console.log('timeToEat::', {speed, totalTime});
    return totalTime;
};

var minEatingSpeed = function(piles, h) {
    let startSpeed = 1;
    let endSpeed = Math.max(...piles);
    let res = endSpeed;
    
    while (startSpeed < endSpeed) {
        const midSpeed = Math.floor((startSpeed + endSpeed) / 2);
        const timeToEatAll = calcTimeToEatAll(piles, midSpeed);
        // if (timeToEatAll === h) return midSpeed; // this wont pass all the test cases
        if (timeToEatAll <= h) {
            endSpeed = midSpeed;
            if (endSpeed < res) {
                res = endSpeed;
            }
        } else {
            startSpeed = midSpeed + 1;
        }
    }
    
    return res;
}