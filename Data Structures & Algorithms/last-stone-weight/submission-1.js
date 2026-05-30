class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const h = new MaxPriorityQueue();

        for (const s of stones) {
            h.enqueue(s);
        }

        while (h.size() > 1) {
            const l = h.dequeue();
            const m = h.dequeue();

            if (l !== m) h.enqueue(l - m);
        }

        return h.size() === 1 ? h.dequeue() : 0;
    }
}
