/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

const solve = (currPtr, stack) => {
    if (!currPtr) return;
    const currNext = currPtr.next;
    if (!currNext) return;
   
    const [nthPrevPtr, nthPtr] = stack.pop();
    if (currPtr === nthPtr || currNext === nthPtr) return;
    
    currPtr.next = nthPtr;
    nthPtr.next = currNext;
    if (nthPrevPtr) nthPrevPtr.next = null;
    
    solve(currNext, stack);
}
var reorderList = function(head) {
    const nodeStack = [];
    let currPtr = head;
    let prevPtr = null;
    while (currPtr !== null) {
        nodeStack.push([prevPtr, currPtr]);
        prevPtr = currPtr;
        currPtr = currPtr.next;
    }
    
    solve(head, nodeStack);
    
    return head;
};