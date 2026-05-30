class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        l, r = 0, len(nums) - 1

        current_sum = nums[l] + nums[r]

        while current_sum != target:
            if current_sum > target:
                r -= 1
            else:
                l += 1
            
            current_sum = nums[l] + nums[r]
            
        return [l + 1, r + 1]