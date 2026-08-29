/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isValidBST(root) {

        function isValid(node, left,right){
            if (!node) return true;
            if (!(node.val > left && node.val < right)){
                return false;
            }
            return (isValid(node.left, left, node.val) && isValid(node.right, node.val, right));
        }
        
        return isValid(root, -Infinity,Infinity);
        
    }
}
