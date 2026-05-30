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
     * @param {number} val
     * @return {TreeNode}
     */
    deleteNode(root, val) {
        if (root === null) {
            return null;
        }

        if (val > root.val) {
            root.right = this.deleteNode(root.right, val);
        } else if (val < root.val) {
            root.left = this.deleteNode(root.left, val);
        } else {
            if (root.left === null) {
                return root.right;
            } else if (root.right === null) {
                return root.left;
            } else {
                let minNode = this.minNode(root.right);
                root.val = minNode.val;
                root.right = this.deleteNode(root.right, minNode.val)
            }
        }

        return root;
    }

    minNode(r) {
        const c = r;
        while (c !== null & c.left !== null) c = c.left;
        return c;
    }
}
