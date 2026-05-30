/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if (!lists || lists.length === 0) {
            return null;
        }

        while (lists.length > 1) {
            const mergedLists = [];

            for (let i = 0; i < lists.length; i += 2) {
                const l1 = lists[i];
                const l2 = (i + 1) < lists.length ? lists[i + 1] : null;
                mergedLists.push(this.mergeLists(l1, l2))
            }

            lists = mergedLists;
        }
        return lists[0];        
    }

    mergeLists(one, two) {
        const dummy = new ListNode(0);
        let cur = dummy

        while (one && two) {
            if (one.val <= two.val) {
                cur.next = one;
                one = one.next;
            } else {
                cur.next = two;
                two = two.next;
            }
            cur = cur.next
        }

        cur.next = one ? one : two;
        return dummy.next;
    }
}
