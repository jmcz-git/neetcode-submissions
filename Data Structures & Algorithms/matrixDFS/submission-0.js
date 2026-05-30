class Solution {
    /**
     * @param {number[][]} grid
     * @returns {number}
     */
    countPaths(grid) {
        function dfs(grid, r, c, visited) {
            let R = grid.length, C = grid[0].length;

            if (Math.min(r,c) < 0 || r === R || c === C || visited[r][c] === 1 || grid[r][c] === 1) return 0;

            if (r === R - 1 && c === C - 1) return 1;

            visited[r][c] = 1;

            let count = 0;
            count += dfs(grid, r+1, c, visited);
            count += dfs(grid, r-1, c, visited);
            count += dfs(grid, r, c+1, visited);
            count += dfs(grid, r, c-1, visited);

            visited[r][c] = 0;
            return count;
        }
        
        const v = Array.from({length: grid.length}, () => Array(grid[0].length).fill(0));
        return dfs(grid, 0, 0, v);
    }
}
