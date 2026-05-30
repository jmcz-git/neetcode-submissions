class ListNode {
    constructor(val, nextNode = null) {
        this.val = val;
        this.next = nextNode;
    }
}

class LinkedList {
    constructor() {
        this.head = new ListNode(-1);
        this.tail = this.head;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        let cur = this.head.next;
        let i = 0;
        while (cur) {
            if (i === index) {
                return cur.val;
            }
            i++;
            cur = cur.next;
        }
        return -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        const newNode = new ListNode(val);
        newNode.next = this.head.next;
        this.head.next = newNode;
        if (!newNode.next) {
            this.tail = newNode;
        }
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        this.tail.next = new ListNode(val);
        this.tail = this.tail.next;
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        let i = 0;
        let cur = this.head;
        while (i < index && cur) {
            i++;
            cur = cur.next;
        }

        if (cur && cur.next) {
            if (cur.next === this.tail) {
                this.tail = cur;
            }
            cur.next = cur.next.next;
            return true;
        }
        return false;
    }

    /**
     * @return {number[]}
     */
    getValues() {
        let cur = this.head.next;
        const res = [];
        while (cur) {
            res.push(cur.val)
            cur = cur.next;
        }
        return res;
    }
}
