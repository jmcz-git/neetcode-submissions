class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        const colors = [0, 0, 0];

        for (let i = 0; i < nums.length; i++) {
            colors[nums[i]]++;
        }

        let i = 0;
        for (let c = 0; c < colors.length; c++) {
            for (let j = 0; j < colors[c]; j++) {
                nums[i] = c;
                i++;
            }
        }
    }
}
