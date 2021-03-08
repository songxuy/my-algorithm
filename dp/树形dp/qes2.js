/*
 * @Description: 路径 被定义为一条从树中任意节点出发，沿父节点-子节点连接，达到任意节点的序列。同一个节点在一条路径序列中 至多出现一次 。该路径 至少包含一个 节点，且不一定经过根节点。
 * 路径和 是路径中各节点值的总和。
 * 给你一个二叉树的根节点 root ，返回其 最大路径和 。
 * @Demo 
 * 输入：root = [1,2,3]
 * 输出：6
 * 解释：最优路径是 2 -> 1 -> 3 ，路径和为 2 + 1 + 3 = 6
 * https://leetcode-cn.com/problems/binary-tree-maximum-path-sum/
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
  if(root == null) return 0;
  let maxSum = Number.MIN_SAFE_INTEGER;
  let dps = (root) => {
    if(root == null) return 0;
    let leftMax = Math.max(0, dps(root.left));
    let rightMax = Math.max(0, dps(root.right));
    maxSum = Math.max(maxSum, root.val + leftMax + rightMax);
    /* 将单边最大值传给父节点 */
    return root.val + Math.max(leftMax, rightMax)
  }
  dps(root)
  return maxSum
};