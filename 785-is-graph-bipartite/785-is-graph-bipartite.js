/**
 * @param {number[][]} graph
 * @return {boolean}
 */
// var isBipartite = function(graph) {
//     const nodeCount = graph.length;
    
//     const q = [];
//     const visited = Array(nodeCount).fill(0);
//     const color = Array(nodeCount).fill(-1);
//     for (let i = 0; i < nodeCount; i++) {
//         color[i] = 1;
//         q.push(i);
//         while (q.length) {
//             const currNode = q.shift();
//             if (visited[currNode]) continue;
//             visited[currNode] = 1;
//             const adjNodes = graph[currNode];
//             for (let j = 0; j < adjNodes.length; j++) {
//                 const adjNode = adjNodes[j];
                
//                 if (color[currNode] === color[adjNode]) return false;
//                 if (color[currNode] === 1) color[adjNode] = 2;
//                 if (color[currNode] === 2) color[adjNode] = 1;
                
//                 q.push(adjNode);
//             }
//         }
//     }
    
//     return true;
// };

// var isBipartite = function(graph) {
//     const nodeCount = graph.length;
//     const q = [];
//     const visited = [];
//     const color = [];
    
//     for(let i = 0; i < nodeCount; i++) {
//         q.push(i);
//         color[i] = 1;
        
//         while (q.length) {
//             const currNode = q.shift();
//             if (visited[currNode]) continue;
//             visited[currNode] = true;
//             const adjNodes = graph[currNode];
            
//             for (let j = 0; j < adjNodes.length; j++) {
//                 const adjNode = adjNodes[j];
                
//                 if (color[currNode] === color[adjNode]) return false;
//                 if (color[currNode] === 1) color[adjNode] = 2;
//                 if (color[currNode] === 2) color[adjNode] = 1;
                
//                 q.push(adjNode);
//             }
//         }
//     }
    
//     return true;
// };


// union find
const findLeaderOf = (leader, node) => {
    if (leader[node] === node) return node;
    const lead = findLeaderOf(leader, leader[node]);
    leader[node] = lead;
    return lead;
};

const union = (leader, rank, node1, node2) => {
    const lead1 = findLeaderOf(leader, node1);    
    const lead2 = findLeaderOf(leader, node2);    
    if (lead1 !== lead2) {
        if (rank[lead1] > rank[lead2]) {
            leader[lead2] = lead1;
        } else if (rank[lead1] < rank[lead2]) {
            leader[lead1] = lead2;
        } else {
            leader[lead1] = lead2;
            rank[lead2]++;
        }
    }
};

var isBipartite = function(graph) {
    const row = graph.length;
    const leader = [];
    const rank = [];
    
    for (let i = 0; i < row; i++) {
        leader[i] = i;
        rank[i] = i;
    }
    console.log(leader)
    
    
    for (let i = 0; i < row; i++) {
        const col = graph[i].length;
        for (let j = 0; j < col; j++) {
            if (findLeaderOf(leader, i) === findLeaderOf(leader, graph[i][j])) return false;
            union(leader, rank, graph[i][j], graph[i][0]);
        }
    }
    
    console.log(leader)
    
    return true;
}