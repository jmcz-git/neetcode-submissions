class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number} - a positive integer
     */
    reverseBits(n) {
        let res = 0;
        for (let i = 0; i < 32; i++) {
            const b = (n >>> i) & 1;
            res += b << (31 - i);
        }
        return res >>> 0;
    }
}
