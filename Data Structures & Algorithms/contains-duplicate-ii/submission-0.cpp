class Solution {
   public:
    bool containsNearbyDuplicate(vector<int>& nums, int k) {
        int L = 0;
        unordered_set<int> window;
        for (int R = 0; R < nums.size(); R++) {
            if (R - L > k) {
                window.erase(nums[L]);
                L++;
            }
            if (window.count(nums[R]) > 0) return true;
            window.insert(nums[R]);
        }
        return false;
    }
};