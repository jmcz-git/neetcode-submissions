/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        return this.d(node, new Map());
    }

    d(node, old) {
        if (node === null) return null;

        if (old.has(node)) return old.get(node);

        const c = new Node(node.val);
        old.set(node, c);

        for (const n of node.neighbors) c.neighbors.push(this.d(n, old));


        return c;
    }
}
