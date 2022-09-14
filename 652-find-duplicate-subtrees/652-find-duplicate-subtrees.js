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
 * @return {TreeNode[]}
 */
const findUtil = (node, subTreeVsFreq, res) => {
    if (!node) return '#';
    const leftSubTree = findUtil(node.left, subTreeVsFreq, res);
    const rightSubTree = findUtil(node.right, subTreeVsFreq, res);
    const subTreeId = `${node.val}-${leftSubTree}-${rightSubTree}`;
    
    subTreeVsFreq[subTreeId] = subTreeVsFreq[subTreeId] ? subTreeVsFreq[subTreeId] + 1 : 1;
    if (subTreeVsFreq[subTreeId] === 2) {
        res.push(node);
    }
    
    return subTreeId;
};

var findDuplicateSubtrees = function(root) {
    const subTreeVsFreq = {};
    const res = [];
    findUtil(root, subTreeVsFreq, res);
    console.log(subTreeVsFreq)
    
    return res;
};