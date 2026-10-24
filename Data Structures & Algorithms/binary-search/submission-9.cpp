class Solution {
   public:
    int search(vector<int>& nums, int target) {
        int L = 0, R = nums.size() - 1, ans = -1;

        while (L <= R) {
            int M = L + (R - L) / 2;
            if (target == nums[M]) return M;
            if (target < nums[M]) {
                R = M - 1;
            } else {
                L = M + 1;
            }
        }

        return ans;
    }
};
