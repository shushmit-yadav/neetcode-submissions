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
        // brute force
        if (!head){
            return null;
        }
        const nodes = [];
        let curr = head;
        while(curr){
            nodes.push(curr);
            curr = curr.next;
        }

        let  l = 0, r = nodes.length - 1;
        while(l < r){
            nodes[l].next = nodes[r];
            l++;
            if(l >=r ) break;
            nodes[r].next = nodes[l];
            r--;
        }
        nodes[l].next = null;
    }
}
