class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        already_seen = {}

        for i, v in enumerate(nums):
            d = target - v
            if d in already_seen:
                return [already_seen[d], i]
            
            already_seen[v] = i