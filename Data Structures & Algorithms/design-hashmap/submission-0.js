class ListNode {
    constructor(key = -1,val = -1, next = null){
        this.key = key;
        this.val = val;
        this.next = next;
    }
}

class MyHashMap {
    constructor() {
        this.map = Array.from({length:1000},() => new ListNode());
    }

    hash(key) {
        return key % this.map.length;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, val) {
        let curr = this.map[this.hash(key)];

        while(curr.next){
            if(curr.next.key == key){
                curr.next.val = val;
                return;
            }
            curr = curr.next;
        }
        curr.next = new ListNode(key, val);
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        let curr = this.map[this.hash(key)].next;
        while(curr){
            if(curr.key == key){
                return curr.val;
            }
            curr = curr.next;
        }
        return -1;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        let curr = this.map[this.hash(key)];
        while(curr.next){
            if(curr.next.key == key){
                curr.next = curr.next.next;
                return;
            }
            curr = curr.next; 
        }
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
