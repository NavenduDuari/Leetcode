class Node {
    constructor (key, val) {
        this.key = key;
        this.value = val;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkList {
    constructor () {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    add (key, value) {
        // console.log('add---::', {key, value})
        const node = new Node(key, value);
        
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        // console.log('add::', this)
        
        return node;
    }
    
    remove (node) {
        const prev = node.prev;
        const next = node.next;
        
        if (!prev && !next) {
            this.head = null;
            this.tail = null;
        } else if (!prev) {
            node.next.prev = null;
            this.head = node.next;
        } else if (!next) {
            node.prev.next = null;
            this.tail = node.prev;
        } else {
            prev.next = next;
            next.prev = prev;
        }
        
        this.length--;
        // console.log('remove::', this)
    }
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.map = {};
    this.capacity = capacity;
    this.DLL = new DoublyLinkList();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.map[key]) return -1;
    const node = this.map[key];
    // console.log('get::', node);
    this.DLL.remove(node);
    this.map[key] = this.DLL.add(node.key, node.value);
    return node.value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.map[key]) this.DLL.remove(this.map[key]);
    this.map[key] = this.DLL.add(key, value);
    if (this.DLL.length > this.capacity) {
        const keyToRemove = this.DLL.head.key;
        // this.DLL.remove(this.map[keyToRemove]);
        delete this.map[keyToRemove];
        this.DLL.remove(this.DLL.head);
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */