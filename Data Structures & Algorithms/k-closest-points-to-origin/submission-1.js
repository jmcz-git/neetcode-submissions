class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const h = new PriorityQueue((a,b) => b[0] - a[0]);
        const r = new Array();

        for (const [x, y] of points) {
            const d = x**2 + y**2;
            h.push([d, x, y]);
            if (h.size() > k) h.pop();
        }

        while (h.size() > 0) {
            let t = h.pop();
            r.push([t[1], t[2]]);
        }

        return r;
    }
}
