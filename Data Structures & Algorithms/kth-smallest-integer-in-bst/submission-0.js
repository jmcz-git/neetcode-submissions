/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let ctx = new Int32Array(2); // context tuple [COUNTER, KTH_SMALLEST]
        ctx[0] = k;                  // set COUNTER equal to k (this way we know when we've reached kth smallest value)
        this.dfs(root, ctx);         // depth-first search will find the value and store it in `ctx[1]`
        return ctx[1];
    }

    dfs(node, ctx) {
        // base case:
        if (!node) return;

        // check the smallest first (kth smallest will always be here)
        this.dfs(node.left, ctx);

        // advance counter (store target when kth value is reached)
        ctx[0]--;
        if (ctx[0] === 0) return ctx[1] = node.val;

        // check the other half for the target
        this.dfs(node.right, ctx);
    }
}
