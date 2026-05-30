class TreeNode {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class TreeMap {
    constructor() {
        this.root = null;
    }

    /**
     * @param {number} key
     * @param {number} val
     * @returns {void}
     */
    insert(key, val) {
        let newNode = new TreeNode(key, val);

        if (this.root === null) {
            this.root = newNode;
            return;
        }

        let cur = this.root;
        while (1) {
            if (key < cur.key) {
                if (cur.left === null) {
                    cur.left = newNode;
                    return;
                }
                cur = cur.left;
            } else if (key > cur.key) {
                if (cur.right === null) {

                    cur.right = newNode;
                    return;
                }
                cur = cur.right;
            } else {
                cur.val = val;
                return;
            }
        }
    }

    /**
     * @param {number} key
     * @returns {number}
     */
    get(key) {
        let cur = this.root;

        while (cur !== null) {
            if (key < cur.key) cur = cur.left;
            else if (key > cur.key) cur = cur.right;
            else return cur.val;
        }

        return -1;
    }

    /**
     * @returns {number}
     */
    getMin() {
        let cur = this.findMin(this.root);
        return cur !== null ? cur.val : -1;
    }

    findMin(node) {
        while (node && node.left !== null) node = node.left;
        return node;
    }

    /**
     * @returns {number}
     */
    getMax() {
        let cur = this.root;

        while (cur !== null && cur.right !== null) cur = cur.right

        return cur !== null ? cur.val : -1;
    }

    /**
     * @param {number} key
     * @returns {void}
     */
    remove(key) {
        this.root = this.removeHelper(this.root, key);
    }

    removeHelper(cur, key) {
        if (cur === null) return null;

        if (key > cur.key) cur.right = this.removeHelper(cur.right, key);

        else if (key < cur.key) cur.left = this.removeHelper(cur.left, key);

        else
            if (cur.left === null) return cur.right;
            else if (cur.right === null) return cur.left;
            else {
                let minNode = this.findMin(cur.right);
                cur.key = minNode.key;
                cur.val = minNode.val;
                cur.right = this.removeHelper(cur.right, minNode.key);
            }

        return cur;
    }

    /**
     * @returns {number[]}
     */
    getInorderKeys() {
        let result = [];
        this.inorderTraversal(this.root, result);
        return result;
    }

    inorderTraversal(root, result) {
        if (root !== null) {
            this.inorderTraversal(root.left, result);
            result.push(root.key);
            this.inorderTraversal(root.right, result);
        }
    }
}
