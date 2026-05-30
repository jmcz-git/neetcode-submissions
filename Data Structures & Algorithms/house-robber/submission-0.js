class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let a = 0, b = 0;

        for (const n of nums) {
            const t = Math.max(n + a, b);
            a = b
            b = t;
        }

        return b;
    }
}
