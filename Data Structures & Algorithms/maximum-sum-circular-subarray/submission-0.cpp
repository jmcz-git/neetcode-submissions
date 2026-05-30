class Solution {
   public:
    int maxSubarraySumCircular(vector<int>& nums) {
        int globMax = nums[0], globMin = nums[0];
        int curMax = 0, curMin = 0, total = 0;

        for (int& n : nums) {
            curMax = max(curMax + n, n);
            curMin = min(curMin + n, n);
            total += n;
            globMax = max(globMax, curMax);
            globMin = min(globMin, curMin);
        }

        return globMax > 0 ? max(globMax, total - globMin) : globMax;
    }
};