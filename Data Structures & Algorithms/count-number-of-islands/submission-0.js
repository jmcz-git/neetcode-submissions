class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const directions = [[1,0], [-1,0], [0,1], [0,-1]];
        const R = grid.length, C = grid[0].length;
        let islands = 0;

        function dfs(r,c) {
            if (Math.min(r,c) < 0 || r === R || c === C || grid[r][c] === '0') return;

            grid[r][c] = '0';
            for (const [dr, dc] of directions) dfs(r + dr, c + dc);
        }

        for (let r = 0; r < R; r++)
            for (let c = 0; c < C; c++)
                if (grid[r][c] === '1') {
                    dfs(r, c);
                    islands++;
                }

        return islands;
    }
}
