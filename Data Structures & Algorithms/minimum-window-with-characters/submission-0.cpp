class Solution {
   public:
    string minWindow(string s, string t) {
        if (t.empty()) return "";
        unordered_map<char, int> freq_t, window;
        for (auto c : t) freq_t[c]++;
        int have = 0;              // quantity of chars meeting requried count (freq_t)
        int need = freq_t.size();  // chars needed to meet count
        int ans_len = INT_MAX;
        int ans = -1;
        int L = 0;

        for (int R = 0; R < s.length(); R++) {
            char c = s[R];
            window[c]++;
            if (freq_t.count(c) && window[c] == freq_t[c]) have++;

            while (have == need) {
                // update best result if current windows smaller
                if ((R - L + 1) < ans_len) {
                    ans = L;
                    ans_len = R - L + 1;
                }

                // shrink from the left
                window[s[L]]--;
                if (freq_t.count(s[L]) && window[s[L]] < freq_t[s[L]]) have--;
                L++;
            }
        }

        return ans_len == INT_MAX ? "" : s.substr(ans, ans_len);
    }
};
