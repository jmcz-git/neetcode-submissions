class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.m=new MinPriorityQueue();
        this.k=k;

        for (const n of nums) this.m.enqueue(n);

        while (this.m.size() > k) this.m.dequeue();
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.m.enqueue(val);
        if (this.m.size() > this.k) this.m.dequeue()
        return this.m.front()
    }
}
