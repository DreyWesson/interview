#include "./nth_node_last.hpp"

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

class EduLinkedList
{
public:
    EduLinkedListNode *head = new EduLinkedListNode(0);
    // EduLinkedList() will be used to make a EduLinkedList type object
    EduLinkedList() { head = nullptr; }
    EduLinkedList(EduLinkedListNode *h) { head = h; }    
    // InsertNodeAtHead() method will insert a LinkedListNode at head
    // of a linked list.
    void InsertNodeAtHead(EduLinkedListNode *node)
    {
        if (head != nullptr)
            node->next = head;
        head = node;
    }
    // CreateLinkedList() method will create the linked list using the
    // given integer array with the help of InsertAthead method.
    void CreateLinkedList(std::vector<int> &vec)
    {
        for (int i = vec.size() - 1; i >= 0; i--)
        {
            EduLinkedListNode *node = new EduLinkedListNode(vec[i]);
            InsertNodeAtHead(node);
        }
    }
    // ToString() method will display the elements of linked list.
    std::string ToString()
    {
        std::string result = "[";
        EduLinkedListNode *temp = head;
        while (temp != nullptr)
        {
            result += std::to_string(temp->data);
            temp = temp->next;
            if (temp != nullptr)
            {
                result += ",";
            }
        }
        result += "]";
        return result;
    }
};

void TraverseLinkedList(EduLinkedListNode* head){
    EduLinkedListNode* current = head; 
    EduLinkedListNode* nxt = nullptr; 
    while (current != nullptr){
      std::cout << current->data << "-> ";
      nxt = current->next;
      current = nxt;
    }
}
