/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


const solve = (l1, l2, l3, carry) => {
    if (!l1 && !l2 && !carry) return;
    const sum = (l1?.val || 0) + (l2?.val || 0) + carry;
    const newCarry = Math.floor(sum / 10);
    const newNode = new ListNode(sum % 10);
    l3.next = newNode;
    
    solve(l1?.next, l2?.next, l3?.next, newCarry);
};

var addTwoNumbers = function(l1, l2) {
    const resHead = new ListNode();
    let ptr = resHead;
    solve(l1, l2, ptr, 0);
    return resHead.next;
};