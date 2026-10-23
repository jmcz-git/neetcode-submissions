class Solution {
   public:
    bool isValid(string s) {
        stack<char> store;
        for (int i = 0; i < s.size(); i++) {
            char c = s[i];
            if (c == '(' || c == '{' || c == '[')
                store.push(c);
            else {
                if (store.empty()) return false;
                char t = store.top();
                store.pop();
                if (c == ')' && t != '(') return false;
                if (c == '}' && t != '{') return false;
                if (c == ']' && t != '[') return false;
            }
        }
        return store.empty();
    }
};
