/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */

// dfs
// const fillPixel = (image, sr, sc, newColor) => {
//     if (image[sr][sc] === newColor) return;
//     const row = image.length;
//     const col = image[0].length;
//     const oldColor = image[sr][sc];
//     image[sr][sc] = newColor;
//     if (sc < col-1 && image[sr][sc+1] === oldColor) fillPixel(image, sr, sc+1, newColor);
//     if (sc > 0 && image[sr][sc-1] === oldColor) fillPixel(image, sr, sc-1, newColor);
//     if (sr < row-1 && image[sr+1][sc] === oldColor) fillPixel(image, sr+1, sc, newColor);
//     if (sr > 0 && image[sr-1][sc] === oldColor) fillPixel(image, sr-1, sc, newColor);
// };

// var floodFill = function(image, sr, sc, newColor) {
//     fillPixel(image, sr, sc, newColor);
    
//     return image;
// };

// bfs
// var floodFill = function(image, sr, sc, newColor) {
//     const q = [[sr, sc]];
//     const row = image.length;
//     if (!row) return image;
//     const col = image[0].length;
//     const oldColor = image[sr][sc];
    
//     while (q.length) {
//         const batchSize = q.length;
//         for (let i = 0; i < batchSize; i++) {
//             const [x, y] = q.shift();
//             if (image[x][y] === newColor) continue;
//             image[x][y] = newColor;
//             if (x < row - 1 && image[x+1][y] === oldColor) q.push([x+1, y]);
//             if (x > 0 && image[x-1][y] === oldColor) q.push([x-1, y]);
//             if (y < col - 1 && image[x][y+1] === oldColor) q.push([x, y+1]);
//             if (y > 0 && image[x][y-1] === oldColor) q.push([x, y-1]);
//         }
//     }
//     return image;
// };

var floodFill = function(image, sr, sc, newColor) {
    const row = image.length;
    if (!row) return image;
    const col = image[0].length;
    if (!col) return image;

    const targetColor = image[sr][sc];
    image[sr][sc] = newColor;
    const q = [[sr,sc]];
    const directions = [[1,0], [-1,0], [0,1], [0,-1]];
    
    while (q.length) {
        // console.log('q::', q)
        
        const [i, j] = q.shift();
        // console.log('i::', i)
        // console.log('j::', j)
        
        for (let k = 0; k < 4; k++) {
            const dir = directions[k];
            const newI = i + dir[0];
            const newJ = j + dir[1];
            if (
                newI >= 0 &&
                newI < row &&
                newJ >= 0 &&
                newJ < col &&
                image[newI][newJ] === targetColor &&
                image[newI][newJ] !== newColor
            ) {
                image[newI][newJ] = newColor;
                q.push([newI, newJ]);
            }
        }
    }
    
    return image;
};