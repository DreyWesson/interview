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
 */
// RECURSIVE Method
var reverseList = function (head) {
    function rev(node, prevNode) {
        if (!node) return prevNode;
        return rev(node.next, new ListNode(node.val, prevNode));
    }
    return rev(head, null);
};
// ITERATIVE Method
var reverseList = function (head) {
    // let node = head;
    let prevNode;
    if (!head) return head;
    while (head) {
        prevNode = new ListNode(node.val, prevNode);
        head = head.next;
    }
    return prevNode;
};
