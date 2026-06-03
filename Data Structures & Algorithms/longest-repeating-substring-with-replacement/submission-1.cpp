class Solution {
public:
    int characterReplacement(string s, int k) {
        unordered_map<char, int> freq;
        int L = 0;
        int ans = 0;
        int max_freq = 0;

        for (int R = 0; R < s.size(); R++) {
            freq[s[R]]++;
            max_freq = max(max_freq, freq[s[R]]);

            while (R - L + 1 - max_freq > k) freq[s[L++]]--;
            

            ans = max(ans, R-L+1);

        }
        return ans;
    }
};
