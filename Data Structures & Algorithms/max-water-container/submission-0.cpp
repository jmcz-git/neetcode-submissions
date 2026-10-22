class Solution {
   public:
    int maxArea(vector<int>& heights) {
        // fixing two heights formula
        // R - L = width
        // min(heights[L], heights[R]) = height
        // area = width * height;
        int L = 0, R = heights.size() - 1;
        int ans = 0;
        
        while (L < R) {
            int area = (R - L) * min(heights[L], heights[R]);
            ans = max(ans, area);
            if (heights[R] <= heights[L]) {
                R--;
            } else {
                L++;
            }
        }
        return ans;
    }
};
