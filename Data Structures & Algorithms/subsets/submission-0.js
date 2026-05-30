class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let r = new Array();
        let s = new Array();
        this.dfs(nums, 0, s, r);
        return r;
    }

    dfs(n, i, s, r) {
        if (i >= n.length) {
            r.push([...s]);
            return;
        }

        s.push(n[i]);
        this.dfs(n, i+1, s, r);

        s.pop();
        this.dfs(n, i+1, s, r);
    }
}
