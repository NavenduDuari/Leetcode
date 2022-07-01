/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// const minHeapify = (minHeap) => {
//     minHeap.sort((a, b) => a[1] - b[1]);
// };

const minHeapPush = (minHeap, node) => {
    
    // minHeap.push(element);
    // minHeapify(minHeap);
    
    let currIdx = minHeap.push(node) - 1;
    // console.log('minHeapPush', {node, minHeap});
    
    while (currIdx > 0) {
        const parentIdx = Math.floor((currIdx - 1)/2);
        const parent = minHeap[parentIdx];
        const current = minHeap[currIdx];
        const currentValue = current.val;
        const parentValue = parent.val;
        if (parentValue >= currentValue) {
            minHeap[parentIdx] = current;
            minHeap[currIdx] = parent;
            currIdx = parentIdx;
        } else break;
    }
};

const minHeapPop = (minHeap) => {
    // return minHeap.shift();
    if (minHeap.length === 1) return minHeap.pop();

    const valueToReturn = minHeap[0];
    const maxValNode = minHeap.pop();
    minHeap[0] = maxValNode;
    let currIdx = 0;
    const len = minHeap.length;
    
    while (true) {
        const leftChildIdx = (currIdx * 2) + 1;
        const rightChildIdx = (currIdx * 2) + 2;
        const leftChild = minHeap[leftChildIdx];
        const rightChild = minHeap[rightChildIdx];
        const current = minHeap[currIdx];
        
        let swap = null;
        if (leftChildIdx < len && leftChild.val < current.val) {
            swap = leftChildIdx;
        }
        if (
            rightChildIdx < len &&
            (
                (swap === null && rightChild.val < current.val) || (swap !== null && rightChild.val < leftChild.val)
            )
        ) {
            swap = rightChildIdx;
        }
        
        if (swap === null) break;
        minHeap[currIdx] = minHeap[swap];
        minHeap[swap] = current;
        currIdx = swap;
    }
    // console.log('minHeapPop', {valueToReturn, minHeap})
    
    return valueToReturn;
};

var mergeKLists = function(lists) {
    if (!lists.length) return null;
    const minHeap = [];
    for (let list of lists) {
        if (!list) continue;
        minHeapPush(minHeap, list);
    }
    
    const head = new ListNode(0);
    let ptr = head;
    while (minHeap.length) {
        // console.log('minHeap.length::', minHeap.length)
        const node = minHeapPop(minHeap);
        ptr.next = node;
        ptr = ptr.next;
        // console.log('node.next::', node.next);
        
        if (node.next) minHeapPush(minHeap, node.next);
        node.next = null;
    }
    
    return head.next;
};