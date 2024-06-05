/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function addRestNodes(restNode, prevNode) {
    while (restNode) {
        prevNode = new ListNode(restNode?.val, prevNode);
        restNode = restNode.next;
    }
    return prevNode;
}
function reverseList(list, ret = null) {
    while (list) {
        ret = new ListNode(list?.val, ret);
        list = list.next;
    }
    return ret;
}
var mergeTwoLists = function (list1, list2) {
    let prevNode = null;
    const slot = (l1, l2) => {
        function addNodes(l1, l2, actionType) {
            const val = actionType === "l1" ? l1?.val : l2?.val;
            const next = actionType === "l1" ? l1?.next : l2?.next;
            const node = actionType === "l1" ? l2 : l1;
            prevNode = new ListNode(val, prevNode);
            return slot(next, node);
        }
        if (!l1 && !l2) return null;
        if (!l1) return addRestNodes(l2, prevNode);
        if (!l2) return addRestNodes(l1, prevNode);
        if (l1?.val < l2?.val) return addNodes(l1, l2, "l1");
        else return addNodes(l1, l2, "l2");
    };
    return reverseList(slot(list1, list2));
};

// var mergeTwoLists = function (l1, l2) {
//     if (!l1) return l2;
//     else if (!l2) return l1;
//     else if (l1.val <= l2.val) {
//         l1.next = mergeTwoLists(l1.next, l2);
//         return l1;
//     } else {
//         l2.next = mergeTwoLists(l1, l2.next);
//         return l2
//     }
// };
