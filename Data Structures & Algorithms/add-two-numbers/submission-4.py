# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        p1, p2 = l1, l2
        head = ListNode(val=0)
        p = head

        carryover = 0

        while p1 or p2 or carryover:
            v1 = p1.val if p1 else 0
            v2 = p2.val if p2 else 0
            s = v1 + v2 + carryover
            if s > 9:
                carryover = s // 10
            else:
                carryover = 0
            p.next = ListNode(val=s % 10)
            p1 = p1.next if p1 else None
            p2 = p2.next if p2 else None
            p = p.next
        
        return head.next