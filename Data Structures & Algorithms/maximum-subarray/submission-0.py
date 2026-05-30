class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        if len(nums) == 1:
            return nums[0]
        ans = nums[0]
        current_sum = 0

        for n in nums:
            if current_sum < 0:
                current_sum = n
            else:
                current_sum += n

            ans = max(ans, current_sum)

        
        return ans