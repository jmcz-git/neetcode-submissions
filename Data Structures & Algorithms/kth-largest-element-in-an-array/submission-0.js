class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const q = new MinPriorityQueue();

        for (const n of nums) {
            q.enqueue(n);
        }

        for (let i = q.size(); i > k; i--) {
            q.pop()
        }

        return q.pop();
    }
}
