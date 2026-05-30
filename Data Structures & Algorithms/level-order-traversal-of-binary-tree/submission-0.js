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
     * @return {number[][]}
     */
    levelOrder(root) {
            let q = [];
    let r = [];

    if (root != null) {
        q.push(root);
    }

    while (q.length > 0) {
        let t = [];
        const l = q.length; // THIS BRO

        for (let i = 0; i < l; i++) {
            // I was passing `i < q.length` to the loop's condition expression
            //      for (let i = 0; i < q.length; i++) { 
            // The loop body updates `q.length` 
            // This changes the bounds of the condition expression (unintended behaviour)
            // FIX: store a "snapshot" of the length in a variable and feed that to the for loop
            let c = q.shift();
            t.push(c.val);
            if (c.left !== null) q.push(c.left);
            if (c.right !== null) q.push(c.right);
        }

        r.push(t);
    }

    return r;
    }
}
