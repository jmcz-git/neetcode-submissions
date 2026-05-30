class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    shortestPathBinaryMatrix(grid) {
        if (grid[0][0]) return -1;
        const [R, C] = [grid.length, grid[0].length];
        const [v, q] = [Array.from({ length: R }, () => new Array(C).fill(0)), new Array()];

        q.push(new Array(2).fill(0));
        v[0][0] = 1;

        let l = 0;
        while (q.length > 0) {
            const ql = q.length;
            for (let i = 0; i < ql; i++) {
                let [r, c] = q.shift();

                if (r === R - 1 && c === C - 1) return l + 1;

                let n = [[r - 1, c - 1], [r - 1, c], [r - 1, c + 1], [r, c - 1], [r, c + 1], [r + 1, c - 1], [r + 1, c], [r + 1, c + 1],];
                for (let j = 0; j < 8; j++) {
                    const [nr, nc] = n[j];

                    if (Math.min(nr, nc) < 0 || nr === R || nc === C || v[nr][nc] === 1 || grid[nr][nc] === 1) continue;

                    q.push(n[j]);
                    v[nr][nc] = 1;
                }
            }
            l++;
        }
        return -1;
    }
}
