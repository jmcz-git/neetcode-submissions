class Solution {
   public:
    int characterReplacement(string s, int k) {
        int ans;
        for (int L = 0; L < s.size(); L++) {
            unordered_map<char, int> freq;
            int max_freq;

            for (int R = L; R < s.size(); R++) {
                freq[s[R]]++;

                max_freq = max(max_freq, freq[s[R]]);

                int current_length = R - L + 1;

                int changes_needed = current_length - max_freq;

                if (changes_needed <= k)
                    ans = max(ans, current_length);
                else
                    break;
            }
        }
        return ans;
    }
};
