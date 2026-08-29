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
     * @return {number[]}
     */
    rightSideView(root) {
        const q = new Queue();
        const res = [];
        

        q.push(root);

        while(!q.isEmpty()){
            let rightSide = null;
            for (let i = q.size(); i > 0; i--){
                let node = q.pop();
                if(node !== null){
                    rightSide = node;
                    q.push(node.left);
                    q.push(node.right);
                }
            }

            if(rightSide != null){
                res.push(rightSide.val);
            }
        }

        return res;
    }
}
