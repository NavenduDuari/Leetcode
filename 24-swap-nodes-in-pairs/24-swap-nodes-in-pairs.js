/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const solve = (prevPtr, currPtr) => {
    if (!currPtr || !currPtr.next) return;
    const nextPtr = currPtr.next;
    currPtr.next = nextPtr.next;
    nextPtr.next = currPtr;
    prevPtr.next = nextPtr;
    
    solve(currPtr, currPtr.next);
};

var swapPairs = function(head) {
    const resHead = new ListNode();
    resHead.next = head;
    solve(resHead, head);
    
    return resHead.next;
};