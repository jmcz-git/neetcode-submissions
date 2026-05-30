/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */

class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        if (!head || !head->next) { 
            return head;
        }

        ListNode* previous_node = nullptr;
        ListNode* current_node = head;

        while (current_node) {
            ListNode* tmp = current_node->next;
            current_node->next = previous_node;
            previous_node = current_node;
            current_node = tmp;
        }

        return previous_node;
    }
};