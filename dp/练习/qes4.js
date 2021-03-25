/*
 * @Description: 数组的每个下标作为一个阶梯，第 i 个阶梯对应着一个非负数的体力花费值 cost[i]（下标从 0 开始）。每当你爬上一个阶梯你都要花费对应的体力值，一旦支付了相应的体力值，你就可以选择向上爬一个阶梯或者爬两个阶梯。
 * 请你找出达到楼层顶部的最低花费。在开始时，你可以选择从下标为 0 或 1 的元素作为初始阶梯。
 * @Demo 
 * 输入：cost = [10, 15, 20]
 * 输出：15
 * 解释：最低花费是从 cost[1] 开始，然后走两步即可到阶梯顶，一共花费 15 。
 * https://leetcode-cn.com/problems/min-cost-climbing-stairs/  
 */
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  let dp = new Array(cost.length).fill(Infinity)
  dp[0] = 0;
  dp[1] = Math.min(cost[0],cost[1])
  for(let i = 2; i < cost.length; i++) {
    dp[i] = Math.min(dp[i-1] + cost[i], dp[i-2] + cost[i-1])
  }
  return dp[cost.length-1]
};