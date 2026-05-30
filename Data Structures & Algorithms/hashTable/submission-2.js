class Node {
    constructor(k, v) {
        this.k = k;
        this.v = v;
        this.n = null;
    }
}

class HashTable {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.size = 0;
        this.t = new Array(this.capacity).fill(null);
    }

    hash(key) {
        return key % this.capacity;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    insert(key, value) {
        const i = this.hash(key);
        let n = this.t[i];

        if (!n) {
            this.t[i] = new Node(key, value);
            this.size++;
        } else {
            let p = null;
            while (n) {
                if (n.k === key) {
                    n.v = value;
                    return;
                }
                p = n;
                n = n.n;
            }
            p.n = new Node(key, value);
            this.size++;
        }

        if (this.size / this.capacity >= 0.5) this.resize();
    }

    /**
     * @param {number} key
     * @returns {number}
     */
    get(key) {
        const i = this.hash(key);
        let n = this.t[i];

        while (n) {
            if (n.k === key) return n.v;
            n = n.n;
        }

        return -1;
    }

    /**
     * @param {number} key
     * @returns {boolean}
     */
    remove(key) {
        const i = this.hash(key);
        let n = this.t[i];
        let p = null;

        while (n) {
            if (n.k === key) {
                if (p) p.n = n.n;
                else this.t[i] = n.n;
                this.size--;
                return true;
            }
            p = n;
            n = n.n;
        }

        return false;
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.size;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity;
    }

    /**
     * @return {void}
     */
    resize() {
        const nc = this.capacity * 2;
        const nt = new Array(nc).fill(null);

        for (let n of this.t) {
            while (n) {
                const i = n.k % nc;
                if (nt[i] === null) {
                    nt[i] = new Node(n.k, n.v);
                } else {
                    let nn = nt[i];
                    try {
                        while (nn.n) {
                            nn = nn.n;
                        }
                        nn.n = new Node(n.k, n.v);      
                    } catch (e) {
                        console.warn(e.message);
                    }
                }
                n = n.n;
            }
        }

        this.capacity = nc;
        this.t = nt;
    }
}
