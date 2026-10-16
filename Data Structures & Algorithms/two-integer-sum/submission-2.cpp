class Solution {
   public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> ds;
        for (int i = 0; i < nums.size(); i++) {
            int d = target - nums[i];
            if (ds.contains(d)) {
                return {ds[d], i};
            }
            ds[nums[i]] = i;
        }
        return {};
    }
};
