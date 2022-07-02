/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxHeapPush = (heap, num) => {
    // console.log('push::', {num, heap});
    // heap.push(num);
    // heap.sort((a, b) => b - a);
    
    let currIdx = heap.push(num) - 1;
    
    while (currIdx > 0) {
        const current = heap[currIdx];
        const parentIdx = Math.floor((currIdx - 1) / 2);
        const parent = heap[parentIdx];
        
        if (parent <= current) {
            heap[parentIdx] = current;
            heap[currIdx] = parent;
            currIdx = parentIdx;
        } else break;
    }
};

const maxHeapPop = (heap) => {
    // console.log('pop::', {heap});
    // return heap.shift();
    if (heap.length === 1) return heap.pop();
    const valueToReturn = heap[0];
    const lastValue = heap.pop();
    heap[0] = lastValue;
    const len = heap.length;
    let currIdx = 0;
    
    while (true) {
        const current = heap[currIdx];
        const leftChildIdx = currIdx * 2 + 1;
        const rightChildIdx = currIdx * 2 + 2;
        const leftChild = heap[leftChildIdx];
        const rightChild = heap[rightChildIdx];
        let swapIdx = null;
        if (leftChildIdx < len) {
            if (leftChild > current) {
                swapIdx = leftChildIdx;
            }
        }
        if (rightChildIdx < len) {
            if ((swapIdx === null && rightChild > current) || (swapIdx !== null && rightChild > leftChild)) {
                swapIdx = rightChildIdx;
            }
        }
        
        if (swapIdx === null) break;
        heap[currIdx] = heap[swapIdx];
        heap[swapIdx] = current;
        currIdx = swapIdx;
    }
    
    return valueToReturn;
};

var findKthLargest = function(nums, k) {
    const maxHeap = [];
    
    for (let i = 0; i < nums.length; i++) {
        maxHeapPush(maxHeap, nums[i]);
    }
    
    let popCount = 0;
    let kthLarge = -1;
    while (popCount < k) {
        kthLarge = maxHeapPop(maxHeap);
        popCount++;
    }
    
    return kthLarge;
};