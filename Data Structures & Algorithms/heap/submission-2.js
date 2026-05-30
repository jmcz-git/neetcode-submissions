class MinHeap {
    constructor() {
        this.q = new Array();
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.q.push(val);
        this._bubbleUp(this.q.length - 1);
    }

    /**
     * 
     * @return {number}
     */
    pop() {
        if (this.q.length === 0) return -1;
        if (this.q.length === 1) return this.q.pop();

        const r = this.q[0];
        this.q[0] = this.q.pop();
        this._bubbleDown(0);

        return r;
    }

    /**
     * @return {number}
     */
    top() {
        return this.q.length > 0 ? this.q[0] : -1;
    }

    /**
     * @param {number[]} nums
     * @return {void}
     */
    heapify(nums) {
        this.q = [...nums];
        for (let i = Math.floor(this.q.length / 2) - 1; i >= 0; i--) this._bubbleDown(i);
    }

    _bubbleUp(i) {
        let p = Math.floor((i - 1) / 2);
        while (i > 0 && this.q[p] > this.q[i]) {
            [this.q[p], this.q[i]] = [this.q[i], this.q[p]]
            i = p;
            p = Math.floor((i - 1) / 2);
        }
    }

    _bubbleDown(i) {
        let c = 2 * i + 1;
        while (c < this.q.length) {
            if (c + 1 < this.q.length && this.q[c] > this.q[c + 1]) c++;

            if (this.q[c] >= this.q[i]) break;

            [this.q[c], this.q[i]] = [this.q[i], this.q[c]];
            i = c;
            c = 2 * i + 1;
        }
    }
}
