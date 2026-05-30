class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const h = new MinPriorityQueue(p => p[0]);
        const r = new Array();

        for (const [x, y] of points) {
            const d = x**2 + y**2;
            h.enqueue([d, x, y]);
        }

        for (let i = 0; i < k; i++) {
            const [_, x, y] = h.dequeue();
            r.push([x,y]);
        }
        
        return r;
    }
}
