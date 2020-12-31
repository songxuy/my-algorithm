/*
 * @Description: 给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。
 * 如果我们将面值看作是物品，面值金额看成是物品的重量，每件物品的价值均为1，这样此题就是是一个恰好装满的完全背包问题了。
 * demo
 * 输入：coins = [1, 2, 5], amount = 11
 * 输出：3 
 * 解释：11 = 5 + 5 + 1
 * 
 * 输入：coins = [2], amount = 3
 * 输出：-1
 * 输入：coins = [1], amount = 0
 * 输出：0
 */
var coinChange = function(coins, amount) {
  if (amount === 0) return 0
  let dp = new Array(amount + 1).fill(Infinity)
  dp[0] = 0
  for (let i = 1; i <= coins.length; i++) {
      for (let j = coins[i - 1]; j <= amount; j++) {
          dp[j] = Math.min(dp[j], dp[j -coins[i - 1]] + 1)
      } 
  }
  return dp[amount] === Infinity ? -1 : dp[amount]
};