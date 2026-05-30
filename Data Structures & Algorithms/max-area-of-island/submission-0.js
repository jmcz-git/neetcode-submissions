class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const d = [[1,0], [-1,0], [0,1], [0,-1]];
        const R = grid.length, C = grid[0].length;

        function dfs(r, c) {
            if (Math.min(r, c) < 0 || r === R || c === C || grid[r][c] === 0) return 0;

            grid[r][c] = 0;
            let a = 1;
            for (const [dr, dc] of d) a += dfs(r + dr, c + dc);
            return a;
        }

        let m = 0;
        for (let r = 0; r < R; r++)
            for (let c = 0; c < C; c++)
                if (grid[r][c] === 1)
                    m = Math.max(m, dfs(r, c));

        return m;
    }
}