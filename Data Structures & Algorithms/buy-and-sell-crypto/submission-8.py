class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        if len(prices) < 2:
            return 0
        l, r = 0, 1
        result = max(0, prices[r] - prices[l])

        while r < len(prices) - 1:
            if prices[l] > prices[r]:
                l = r
                r += 1
            else:
                r += 1
            result = max(result, prices[r] - prices[l])
        
        return result