class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const piles = {};
        let ans = [];
        strs.forEach((str) => {
            const key = str.split("").sort().toString();
            if (piles[key] !== undefined) {
                piles[key] = [...piles[key], str];
            } else {
                piles[key] = [str];
            }
        });
        for (const [_, value] of Object.entries(piles)) {
            ans = [...ans, value];
        }
        return ans;
    }
}
