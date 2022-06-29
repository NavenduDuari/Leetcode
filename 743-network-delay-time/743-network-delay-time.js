/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

// optimised bfs - djikstra
// var networkDelayTime = function(times, n, k) {
//     const nodeVsAdj = {};
    
//     for (let i = 0; i < times.length; i++) {
//         const [source, target, weight] = times[i];
//         nodeVsAdj[source] = nodeVsAdj[source] ? [...nodeVsAdj[source], [target, weight]] : [[target, weight]];
//     }
   
//     const q = [[k, 0]];
//      q.push = function(element) {
//          // Array.prototype.push.apply(this, arguments);
//          // this.sort((a, b) => a[1] - b[1]);
//          if (this.length) {
//              let pushed = false;
//              const len = this.length;
//             for (let i = 0; i < len; i++) {
//                 if (this[i][1] > element[1]) {
//                     this.splice(i, 0, element);
//                     pushed = true;
//                     break;
//                 }   
//             }
//             if (!pushed) Array.prototype.push.apply(this, arguments);
//          } else {
//             Array.prototype.push.apply(this, arguments);
//          }
         
//          // console.log('push::', this)
//     };
    
//     const visited = Array(n+1).fill(0);
//     let maxCost = -1;
//     let remainingNodesToVisit = n;
    
//     while (q.length) {
//         const [node, costTillNow] = q.shift();
//         if (visited[node]) continue;
//         visited[node] = 1;
//         console.log('node::', node)
//         remainingNodesToVisit--;
//         maxCost = costTillNow;
        
//         const adjNodes = nodeVsAdj[node];
//         if (!adjNodes) continue;
        
//         for (let i = 0; i < adjNodes.length; i++) {
//             const [adjNode, weight] = adjNodes[i];
//             q.push([adjNode, weight + costTillNow]);
//         }
//     }
    
//     return remainingNodesToVisit > 0 ? -1 : maxCost;
// };

var networkDelayTime = function(times, n, k) {
    const nodeVsAdj = {};
    
    for (let i = 0; i < times.length; i++) {
        const [u, v, cost] = times[i];
        nodeVsAdj[u] = nodeVsAdj[u] ? [...nodeVsAdj[u], [v, cost]] : [[v, cost]];
    }
    
    const q = [[k, 0]];
    const qpush = value => {
        q.push(value);
        q.sort((a, b) => a[1] - b[1]);
    };
    const visited = [];
    let maxCost = 0;
    let remainingNodesToVisit = n;
    
    // console.log('nodeVsAdj::', nodeVsAdj)
    
    while (q.length) {
        // console.log('q::', q);
        const [node, costTillNow] = q.shift();
        if (visited[node]) continue;
        visited[node] = true;
        remainingNodesToVisit--;
        maxCost = costTillNow;
        
        const adjNodes = nodeVsAdj[node];
        if (!adjNodes) continue;
        for (let i = 0; i < adjNodes.length; i++) {
            const [adjNode, weight] = adjNodes[i];
            qpush([adjNode, weight+costTillNow]);   
        }
    }
    
    // console.log('maxCost::', maxCost);
    
    return remainingNodesToVisit ? -1 : maxCost;;
}
