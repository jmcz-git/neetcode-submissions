class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        let r = new Array(n).fill(1);

        for(let i =0;i<m-1;i++) {
            let nr = new Array(n).fill(1);
            for (let j = n-2;j>=0;j--) nr[j] = nr[j+1] + r[j];
            r = nr;
        }

        return r[0];
    }
}
