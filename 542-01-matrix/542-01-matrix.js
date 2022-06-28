/**
 * @param {number[][]} mat
 * @return {number[][]}
 */

// bfs -- getting called multiple times
// const isValidPos = (mat, i, j) => {
//     const row = mat.length;
//     const col = mat[0].length;
    
//     if (i >= 0 && i < row && j >= 0 && j < col) return true;
//     return false;
// };

// const findDistance = (mat, i, j) => {
//     const q = [{node: [i, j], dist: 0}];
//     const directions = [[0, 1], [1, 0], [0, -1], [-1,  0]];
//     const visited = {};
//     while (q.length) {
//         const { node, dist } = q.shift();
//         const [x, y] = node;
        
//         if (mat[x][y] === 0) return dist;
//         visited[`${x}-${y}`] = true;
        
//         for (let dir of directions) {
//             const newX = x+dir[0];
//             const newY = y+dir[1];
//             if (isValidPos(mat, newX, newY) && visited[`${newX}-${newY}`] !== true) {
//                 q.push({node: [newX, newY], dist: dist+1});
//             }
//         }
//     }
// };

// var updateMatrix = function(mat) {
//     const row = mat.length;
//     if (!row) return [[]];
//     const col = mat[0].length;
//     const visited = {};
    
//     for (let i = 0; i < row; i++) {
//         for (let j = 0; j < col; j++) {
//             if (mat[i][j] === 1) {
//                 const dist = findDistance(mat, i, j);
//                 mat[i][j] = dist;
//             }
//         }
//     }
    
//     return mat;
// };

// dfs - memoized dp - not recommended
// const findDistance = (mat, dist, i, j, level) => { 
//     // level is important
//     const row = mat.length;
//     const col = mat[0].length;
    
//     if (mat[i][j] === 0) return 0;
//     if (mat[i][j] === 2) return Number.MAX_SAFE_INTEGER;
    
//     mat[i][j] = 2;
    
//     if (dist[i][j] === Number.MAX_SAFE_INTEGER || level < dist[i][j]) {
//         const d1 = i < row-1 ? findDistance(mat, dist, i+1, j, level+1) : Number.MAX_SAFE_INTEGER;
//         const d2 = i > 0 ? findDistance(mat, dist, i-1, j, level+1) : Number.MAX_SAFE_INTEGER;
//         const d3 = j < col-1 ? findDistance(mat, dist, i, j+1, level+1) : Number.MAX_SAFE_INTEGER;
//         const d4 = j > 0 ? findDistance(mat, dist, i, j-1, level+1) : Number.MAX_SAFE_INTEGER;
//         dist[i][j] = Math.min(dist[i][j], Math.min(d1, d2, d3, d4) + 1); // imp
//     }
    
//     mat[i][j] = 1;
//     return dist[i][j];
// };

//  var updateMatrix = function(mat) {
//     const row = mat.length;
//     if (!row) return [[]];
//     const col = mat[0].length;
//     const dist = Array(row).fill(0).map(x => Array(col).fill(Number.MAX_SAFE_INTEGER));
//     for (let i = 0; i < row; i++) {
//         for (let j = 0; j < col; j++) {
//             if (mat[i][j] === 0) {
//                 dist[i][j] = 0;
//             }
//         }
//     }
     
//     for (let i = 0; i < row; i++) {
//         for (let j = 0; j < col; j++) {
//             if (mat[i][j] === 1) {
//                 dist[i][j] = findDistance(mat, dist, i, j, 0);
//             }
//         }
//     }
    
//     return dist;
// };


// optimized BFS - simultanous bfs
// var updateMatrix = function(mat) {
//     const row = mat.length;
//     if (!row) return [[]];
//     const col = mat[0].length;
    
//     const q = [];
//     for (let i = 0; i < row; i++) {
//         for (let j = 0; j < col; j++) {
//             if (mat[i][j] === 0) {
//                 q.push([i, j]);
//             } else {
//                 mat[i][j] = -1;
//             }
//         }
//     }
//     const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    
//     let distance = 0;
//     while (q.length) {
//         distance++;
//         let batchSize = q.length;
        
//         while (batchSize--) {
//             const [i, j] = q.shift();
            
//             for (let k = 0; k < 4; k++) {
//                 const dir = directions[k];
//                 const newI = i + dir[0];
//                 const newJ = j + dir[1];
                
//                 if (newI >= 0 && newI < row && newJ >= 0 && newJ < col && mat[newI][newJ] === -1) {
//                     q.push([newI, newJ]);
//                     mat[newI][newJ] = distance;
//                 }
//             }
//         }
//     }
    
//     return mat;
// }

var updateMatrix = function(mat) {
    const row = mat.length;
    if (!row) return mat;
    const col = mat[0].length;
    if (!col) return mat;
    
    const q = [];
    
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (mat[i][j] === 0) {
                q.push([i, j]);
            } else {
                mat[i][j] = -1;
            }
        }
    }
    
    const directions = [[1,0], [-1,0], [0, 1], [0, -1]];
    
    let distance = 0;
    while (q.length) {
        distance++;
        let batchSize = q.length;
        
        while (batchSize--) {
            const [i, j] = q.shift();
            
            for (let k = 0; k < 4; k++) {
                const dir = directions[k];
                const newI = i + dir[0];
                const newJ = j + dir[1];
                
                if (newI >= 0 && newI < row && newJ >= 0 && newJ < col && mat[newI][newJ] === -1) {
                    q.push([newI, newJ]);
                    mat[newI][newJ] = distance;
                }
            }
        }
    }
    
    return mat;
}