class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        if (text1.length < text2.length) {
            [text1, text2] = [text2, text1];
        }

        const dp = new Array(text2.length + 1).fill(0);

        for (let i = text1.length - 1; i >= 0; i--) {
            let p = 0;
            for (let j = text2.length - 1; j >= 0; j--) {
                let t = dp[j];
                if (text1[i] === text2[j]) dp[j] = 1 + p;
                else dp[j] = Math.max(dp[j], dp[j + 1]);
                p = t;
            }
        }

        return dp[0];
    }
}
