/*
 * @Description: 给定不同面额的硬币和一个总金额。写出函数来计算可以凑成总金额的硬币组合数。假设每一种面额的硬币有无限个。 
 * 如果我们将面值看作是物品，面值金额看成是物品的重量，每件物品的价值均为1，这样此题就是是一个恰好装满的完全背包问题了。
 * demo
 * 输入: amount = 5, coins = [1, 2, 5]
 * 输出: 4
 * 解释: 有四种方式可以凑成总金额:
 * 5=5
 * 5=2+2+1
 * 5=2+1+1+1
 * 5=1+1+1+1+1
 * https://leetcode-cn.com/problems/coin-change-2/
 */
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
  let dp = new Array(amount + 1).fill(0)
  dp[0] = 1
  for(let i = 1; i <= coins.length; i++) {
      for(let j = coins[i-1]; j <= amount; j++) {
          dp[j] = dp[j] + dp[j - coins[i-1]]
      }
  }
  return dp[amount]
};