class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const q = new Array();
        let f = 0, t = 0;

        for (let r = 0; r < grid.length; r++) {
            for (let c = 0; c < grid[0].length; c++) {
                if (grid[r][c] === 1) f++;
                if (grid[r][c] === 2) q.push([r,c]);
            }
        }

        const dirs = [[0,1], [0,-1],[1,0],[-1,0]];

        while (f > 0 && q.length > 0) {
            const l = q.length;
            for (let i = 0; i < l; i++) {
                const [cr, cc] = q.shift();

                for (const [dr, dc] of dirs) {
                    const r = cr + dr, c = cc + dc;
                    if (r >= 0 && r < grid.length && c >= 0 && c < grid[0].length && grid[r][c] === 1) {
                        grid[r][c] = 2;
                        q.push([r, c]);
                        f--;
                    }
                }
            }
            t++;
        }

        return f === 0 ? t : -1;
    }
}
