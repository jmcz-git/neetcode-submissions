# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        l1_ptr, l2_ptr = l1, l2
        l1_arr, l2_arr = [], []
        l1_int, l2_int = 0, 0
        res = 0

        while True:
            if not l1_ptr:
                break
            l1_arr.insert(0, str(l1_ptr.val))
            l1_ptr = l1_ptr.next
        while True:
            if not l2_ptr:
                break
            l2_arr.insert(0, str(l2_ptr.val))
            l2_ptr = l2_ptr.next
            
        l1_int = int("".join(l1_arr))
        l2_int = int("".join(l2_arr))

        res = list(str(l1_int + l2_int))

        head = ListNode()
        ptr = head

        for i in range(len(res)):
            ptr.next = ListNode(val=res[(len(res) - i) - 1])
            ptr = ptr.next

        return head.next