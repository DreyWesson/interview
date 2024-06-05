
#include "./nth_node_last.hpp"

class SolutionOffTop {
public:
    EduLinkedListNode* removeNthFromEnd(EduLinkedListNode* head, int n) {

        EduLinkedListNode *right = head;
        int i = 1;
        int j = 0;
        while(right->next)
        {
            right = right->next;
            i++;
        }
        if (n == i)
            return head->next;
        right = head;
        while(right->next)
        {
            if (j == (i - n - 1))
            {
                right->next = right->next->next;
                break;
            }
            right = right->next;
            j++;
        }
        return head;
    }
};

class SolutionTwoPointer {
public:
    EduLinkedListNode* removeNthFromEnd(EduLinkedListNode* head, int n) {

        EduLinkedListNode *new_head = new EduLinkedListNode(0);
        new_head->next = head;
        EduLinkedListNode *first = new_head;
        EduLinkedListNode *second = new_head;
        int i = 0;

        while(i <= n)
        {
            first = first->next;
            i++;
        }
        if (!first)
            return head->next;
        while(first)
        {
            first = first->next;
            second = second->next;
        }
        second->next = second->next->next;
        return new_head->next;
    }
};