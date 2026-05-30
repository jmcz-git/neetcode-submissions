class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        const colors = new Int32Array(3);

        for (let num of nums) {
            colors[num]++;
        }

        let i = 0;
        for (let c = 0; c < 3; c++) {
            while (colors[c]-- > 0) {
                nums[i++] = c;
            }
        }
    }
}
