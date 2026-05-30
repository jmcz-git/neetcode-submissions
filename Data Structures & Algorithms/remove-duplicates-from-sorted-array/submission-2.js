class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let l = 0;

        for (let r = 0; r < nums.length; r++) {
            if (nums[r - 1] === nums[r]) { continue; }
            nums[l] = nums[r];
            l += 1;
        };

        return l;
    }
}
