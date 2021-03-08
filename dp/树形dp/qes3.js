/*
 * @Description: 给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个结点路径长度中的最大值。这条路径可能穿过也可能不穿过根结点。
 * @Demo 
 * 给定二叉树
 *
 *          1
 *         / \
 *        2   3
 *       / \     
 *      4   5    
 *  返回 3, 它的长度是路径 [4,2,1,3] 或者 [5,2,1,3]。
 *
 * https://leetcode-cn.com/problems/diameter-of-binary-tree/
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
  if(root==null || (root.left==null && root.right==null)) return 0;
  let max = 0;
  let depth = (root) => {
      if(root==null) return 0;
      let l = depth(root.left);
      let r = depth(root.right);
      max = Math.max(max, l + r);
      return Math.max(l, r) + 1;
  }
  depth(root);
  return max;
};