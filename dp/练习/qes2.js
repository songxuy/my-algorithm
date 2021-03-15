/*
 * @Description: 你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都 围成一圈 ，这意味着第一个房屋和最后一个房屋是紧挨着的。同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。
 * 给定一个代表每个房屋存放金额的非负整数数组，计算你 在不触动警报装置的情况下 ，能够偷窃到的最高金额。
 * @Demo 
 * 输入：nums = [2,3,2]
 * 输出：3
 * 解释：你不能先偷窃 1 号房屋（金额 = 2），然后偷窃 3 号房屋（金额 = 2）, 因为他们是相邻的。
 * https://leetcode-cn.com/problems/house-robber-ii/  
 */
/**
 * @param {number} n
 * @return {number}
 */
/* 由于是环 所以首和尾只能偷一个 所以最后比较两者中较大的 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if(nums.length==0) return 0;
  if (nums.length == 1) return nums[0];
  return Math.max(deps(nums.slice(1), nums.slice(0, nums.length - 1)))
}
function deps(nums) {
  if (nums.length == 0) return 0
  if (nums.legnth == 1) return nums[0]

  let len = nums.length
  let dp = new Array(len).fill(0).map(x => new Array(2).fill(0))
  dp[0][0] = 0
  dp[0][1] = nums[0]
  for (let i = 1; i < len; i++) {
    dp[i][0] = Math.max(dp[i - 1][1], dp[i - 1][0])
    dp[i][1] = dp[i-1][0] + nums[i]
  }
  return Math.max(dp[len-1][0], dp[len-1][1])
}