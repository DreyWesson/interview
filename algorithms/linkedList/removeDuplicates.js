/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/
 */
// RECURSION METHOD
var deleteDuplicates = function (head) {
    let tmpNode = null;
    if (!head?.next) return head;
    const skipDups = (node, prevNode) => {
        if (node?.val === tmpNode) {
            while (node?.val !== undefined && node?.val === tmpNode)
                node = node?.next;
        }
        if (node?.val === undefined) return prevNode;
        tmpNode = node?.val;
        return skipDups(node?.next, new ListNode(node?.val, prevNode));
    };
    const reverseList = (head) => {
        const rev_list = (node, prevNode) => {
            if (!node) return prevNode;
            return rev_list(node.next, new ListNode(node.val, prevNode));
        };
        return rev_list(head, null);
    };
    return reverseList(skipDups(head, null), null);
};

// ITERATIVE Method
var deleteDuplicates = function (head) {
    var current = head;
    while (current) {
        if (current.next !== null && current.val == current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    return head;
};
