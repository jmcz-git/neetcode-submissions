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
     * @return {number[]}
     */
    rightSideView(root) {
        let q = [];
        let r = [];

        if (root != null) {
            q.push(root);
        }

        while (q.length > 0) {
            let t = [];
            const l = q.length; // THIS BRO

            for (let i = 0; i < l; i++) {
                let c = q.shift();
                t.push(c.val);
                if (c.left) q.push(c.left);
                if (c.right) q.push(c.right);
            }

            r.push(t[t.length-1]);
        }

        return r;
    }
}
