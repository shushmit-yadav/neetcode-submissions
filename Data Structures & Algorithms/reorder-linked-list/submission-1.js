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
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        // recursive
        head = this.rec(head, head.next);
    }

    rec(root, curr) {
        if(curr == null){
            return root;
        }

        root = this.rec(root, curr.next);

        if(root == null){
            return null;
        }

        let temp = null;
        if(root === curr || root.next === curr){
            curr.next = null;
        } else {
            temp = root.next;
            root.next = curr;
            curr.next = temp;
        }

        return temp;
    }
}
