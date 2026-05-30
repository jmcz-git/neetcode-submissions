class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:     
        l, r = 0, k
        result = []
        while r <= len(nums):
            print(nums[l:r])
            result.append(max(nums[l:r]))
            l += 1
            r += 1

        return result