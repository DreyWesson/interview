#include <iostream>

struct EduLinkedListNode
{
    int data;
    EduLinkedListNode *next;
    // LinkedListNode() will be used to make a LinkedListNode type object.
    EduLinkedListNode(int data)
    {
        this->data = data;
        this->next = nullptr;
    }
};