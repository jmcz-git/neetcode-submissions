class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.m = new Map();
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (!this.m.has(key)) return -1;
        const v = this.m.get(key);
        this.m.delete(key);
        this.m.set(key, v);
        return v;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.m.has(key)) {
            this.m.delete(key);
        } else if (this.capacity === this.m.size) {
            const k = this.m.keys().next().value
            this.m.delete(k);
        }
        this.m.set(key, value);
    }
}
