/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[][]}
 */

const calcHeight = (root) => {
    if (!root) return 0;
    
    return Math.max(calcHeight(root.left), calcHeight(root.right)) + 1;
};

var printTree = function(root) {
    // calculate height of the tree
    const height = calcHeight(root) - 1;
    
    const row = height + 1;
    const col = Math.pow(2, (height + 1)) - 1;
    const res = [...Array(row)].map(x => Array(col).fill(""));
    
    // place the root
    res[0][Math.floor((col-1)/2)] = `${root.val}`;
    
    const q = [[root, 0, Math.floor((col-1)/2)]];
    
    while (q.length) {
        const [node, r, c] = q.shift();
        if (node.left) {
            const leftChildRow = r + 1;
            const leftChildCol = c - Math.pow(2, (height - r - 1));
            
            res[leftChildRow][leftChildCol] = `${node.left.val}`;
            q.push([node.left, leftChildRow, leftChildCol]);
            
        }
        if (node.right) {
            const rightChildRow = r + 1;
            const rightChildCol = c + Math.pow(2, (height - r - 1));
            
            res[rightChildRow][rightChildCol] = `${node.right.val}`;
            q.push([node.right, rightChildRow, rightChildCol]);
        }
    }
    
    return res;
};