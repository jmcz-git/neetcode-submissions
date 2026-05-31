class Solution {
   public:
    int numOfSubarrays(vector<int>& arr, int k, int threshold) {
        int L = 0, current_sum = 0, target = threshold * k, ans = 0;

        for (int R = 0; R < arr.size(); R++) {
            current_sum += arr[R];
            if (R >= k - 1) {
                if (current_sum >= target) ans++;
                current_sum -= arr[R - k + 1];
            }
        }

        return ans;
    }
};