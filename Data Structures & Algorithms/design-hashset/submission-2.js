class MyHashSet {
    constructor() {
        this.set = new Array(31251).fill(0);
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        this.set[Math.floor(key/32)] |= this.getMask(key);
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        if(this.contains(key)){
            this.set[Math.floor(key/32)] ^= this.getMask(key);
        }
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        return (this.set[Math.floor(key/32)] & this.getMask(key)) !== 0;
    }

    getMask(key){
        return 1 << key % 32;
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
