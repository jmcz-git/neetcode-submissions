class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const values_seen = {};

        for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i];
            if (values_seen[complement] == undefined) {
                values_seen[nums[i]] = i;
            } else {
                return [i, values_seen[complement]];
            }
        }
    }
}
