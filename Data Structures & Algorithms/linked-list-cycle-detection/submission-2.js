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
     * @return {boolean}
     */
    hasCycle(head) {
        const set = new Set();
        let pointer = head;

        while(pointer && pointer.next){
            if(set.has(pointer)){
                return true;
            } 
            set.add(pointer);

            pointer = pointer.next;
        }

        return false;
    }
}
