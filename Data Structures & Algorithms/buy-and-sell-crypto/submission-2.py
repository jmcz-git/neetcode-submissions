class Solution:
    def maxProfit(self, prices: List[int]) -> int:        
        profits = []
        for i in range(len(prices)):
            for j in range(i+1, len(prices)):
                profits.append(prices[i] - prices[j])

        if len(profits) > 0:
            maxP = min(profits)
        else:
            return 0

        if maxP < 0:
            print(profits)
            return maxP * -1
        else:
            return 0
