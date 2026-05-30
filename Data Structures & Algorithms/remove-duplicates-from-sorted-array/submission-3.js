class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let l = 0;

        for (let r = 0; r < nums.length; r++) {
            if (nums[r - 1] !== nums[r]) { 
                nums[l++] = nums[r];
            }
        };

        return l;
    }
}
