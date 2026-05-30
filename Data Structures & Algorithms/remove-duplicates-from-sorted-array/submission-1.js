class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let l = 0;


        for (let i = 0; i < nums.length; i++) {
            if (nums[i - 1] === nums[i]) { continue; }
            nums[l] = nums[i];
            l += 1;
        };

        return l;
    }
}
