class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class MyDeque {
    constructor() {
        this.left = new Node(-1);
        this.right = new Node(-1);

        this.left.next = this.right;
        this.right.prev = this.left;
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return this.left.next === this.right;
    }

    /**
     * @param {number} value
     */
    append(value) {
        const newnode = new Node(value);
        const lastnode = this.right.prev;

        lastnode.next = newnode;
        newnode.prev = lastnode;
        newnode.next = this.right;
        this.right.prev = newnode
    }

    /**
     * @param {number} value
     * @return {void}
     */
    appendleft(value) {
        const newnode = new Node(value);
        const firstnode = this.left.next;

        firstnode.prev = newnode;
        newnode.next = firstnode;
        newnode.prev = this.left;
        this.left.next = newnode;
    }

    /**
     * @return {void}
     */
    pop() {
        if (this.isEmpty()) {
            return -1;
        }
        const targetnode = this.right.prev;
        const prevnode = targetnode.prev;
        const value = targetnode.val;

        this.right.prev = prevnode;
        prevnode.next = this.right;

        return value;
    }

    /**
     * @return {number}
     */
    popleft() {
        if (this.isEmpty()) {
            return -1;
        }

        const targetNode = this.left.next;
        const nextNode = targetNode.next;
        const value = targetNode.val;

        this.left.next = nextNode;
        nextNode.prev = this.left;

        return value;
    }
}
