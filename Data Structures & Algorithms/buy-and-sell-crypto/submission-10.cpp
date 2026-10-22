class Solution {
   public:
    int maxProfit(vector<int>& prices) {
        int ans = 0;
        int buy = prices[0];
        for (int i = 0; i < prices.size(); i++) {
            int profit = prices[i] - buy;
            buy = min(buy, prices[i]);
            ans = max(ans, profit);
        }
        return ans;
    }
};
