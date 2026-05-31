class Solution {
   public:
    int lengthOfLongestSubstring(string s) {
        if (s.empty()) return 0;

        unordered_set<char> window;
        int L = 0;
        int length = INT_MIN;

        for (int R = 0; R < s.size(); R++) {
            while (window.count(s[R]) > 0) {
                window.erase(s[L]);
                L++;
            }
            window.insert(s[R]);
            length = max(length, (int)window.size());
        }

        return length;
    }
};
