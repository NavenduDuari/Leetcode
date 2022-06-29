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

var isBipartite = function(graph) {
    const nodeCount = graph.length;
    const q = [];
    const visited = [];
    const color = [];
    
    for(let i = 0; i < nodeCount; i++) {
        q.push(i);
        color[i] = 1;
        
        while (q.length) {
            const currNode = q.shift();
            if (visited[currNode]) continue;
            visited[currNode] = true;
            const adjNodes = graph[currNode];
            
            for (let j = 0; j < adjNodes.length; j++) {
                const adjNode = adjNodes[j];
                
                if (color[currNode] === color[adjNode]) return false;
                if (color[currNode] === 1) color[adjNode] = 2;
                if (color[currNode] === 2) color[adjNode] = 1;
                
                q.push(adjNode);
            }
        }
    }
    
    return true;
};