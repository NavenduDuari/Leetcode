/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */

// BFS
var findCheapestPrice = function(n, flights, src, dst, k) {
    nodeVsAdj = {};
    
    for (let i = 0; i < flights.length; i++) {
        const [srcNode, destNode, cost] = flights[i];
        nodeVsAdj[srcNode] = nodeVsAdj[srcNode] ? [...nodeVsAdj[srcNode], [destNode, cost]] : [[destNode, cost]];
    }

    const q = [[src, 0]];
    const costs = Array(n).fill(Number.MAX_SAFE_INTEGER);
    let totalHops = 0;
    let minCost = Number.MAX_SAFE_INTEGER;
    
    while (q.length && totalHops <= k) {
        let batchSize = q.length;
        while (batchSize--) {
            const [node, costTillNow] =  q.shift();
            
            // this will help avoiding repeatations
            if (costs[node] < costTillNow) continue;
            costs[node] = costTillNow;
            
            const adjNodes = nodeVsAdj[node];
            if (!adjNodes) continue;

            for (let i = 0; i < adjNodes.length; i++) {
                const [adjNode, cost] = adjNodes[i];
                const nextCost = cost+costTillNow;
                if (nextCost > minCost) continue;
                
                if (adjNode === dst) {
                    minCost = Math.min(nextCost, minCost);
                }
                q.push([adjNode, nextCost]);
            }
        }

        totalHops++;
    }
    // console.log('minCost::', minCost);
    
    return minCost === Number.MAX_SAFE_INTEGER ? -1 : minCost;
};

// dijkstra -- TLE
// var findCheapestPrice = function(n, flights, src, dst, k) {
//     const nodeVsAdj = [];
    
//     for (let i = 0; i < flights.length; i++) {
//         const [from, to, cost] = flights[i];
//         nodeVsAdj[from] = nodeVsAdj[from] ? [...nodeVsAdj[from], [to, cost]] : [[to, cost]];
//     }
    
//     const pq = [];
//     const pqPush = (value) => {
//         pq.push(value);
//       pq.sort((a, b) => a[1] - b[1]);  
//     };
    
//     pqPush([src, 0, -1]);
    
//     const visitedNodeStops = [];
//     while (pq.length) {
//         // console.log(pq)
//         const [to, costTillNow, stops] = pq.shift();
//         // console.log({node: to, costTillNow })
//         const adjNodes = nodeVsAdj[to];
        
//         if (to === dst) return costTillNow;
        
//         if (stops === k) continue;
//         if (visitedNodeStops[to] && visitedNodeStops[to] < stops) continue;
        
//         if (!adjNodes) continue;
        
//         for (let i = 0; i < adjNodes.length; i++) {
//             const adjNode = adjNodes[i];
//             const [node, cost] = adjNode;
//             pqPush([node, costTillNow + cost, stops+1]);
//         }
//     }
//     return -1;
// }