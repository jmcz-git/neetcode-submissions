class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let r = new Array();
        let c = new Array();
        this.backtrack(nums, target, r, c, 0);
        return r;
    }

    backtrack(n, t, r, c, i) {
        if (t === 0) {
            r.push([...c]);
        } else if (t < 0 || i >= n.length) {
            return;
        } else {
            c.push(n[i]);
            this.backtrack(n, t - n[i], r, c, i);

            c.pop();
            this.backtrack(n, t, r, c, i + 1);
        }
    }
}
