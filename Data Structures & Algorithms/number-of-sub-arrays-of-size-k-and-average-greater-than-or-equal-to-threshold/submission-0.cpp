class Solution {
public:
    int numOfSubarrays(vector<int>& arr, int k, int threshold) {
        int L = 0;
        long long current_sum = 0, target = threshold * k;
        int ans = 0;

        for (int R = 0; R < arr.size(); R++) {
            current_sum += arr[R];
            if (R - L + 1 > k) {
                current_sum -= arr[L];
                L++;
            }
            
            if (R - L + 1 == k) {
                if (current_sum >= target) ans++;
            }
        }

        return ans;
    }
};