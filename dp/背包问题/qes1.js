/*
 * @Description: 给定一个非负整数数组，a1, a2, ..., an, 和一个目标数，S。现在你有两个符号 + 和 -。对于数组中的任意一个整数，你都可以从 + 或 -中选择一个符号添加在前面。
 * @Return 返回可以使最终数组和为目标数 S 的所有添加符号的方法数。
 * @Demo 输入：nums: [1, 1, 1, 1, 1], S: 3
 *  输出：5
 *  解释：
 *  -1+1+1+1+1 = 3
 *  +1-1+1+1+1 = 3
 *  +1+1-1+1+1 = 3
 *  +1+1+1-1+1 = 3
 *  +1+1+1+1-1 = 3
 *  一共有5种方法让最终目标和为3。
 * https://leetcode-cn.com/problems/target-sum/
 */

/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
  let sum = nums.reduce((i, j) => {
      return i + j
  }, 0);
  if (Math.abs(sum) < Math.abs(S)) return 0

  let len = sum * 2 + 1
  let l = nums.length
  let dp = new Array(l)
  for( let i  = 0 ; i < l; i++ ){
    dp[i] = new Array(len).fill(0);
  }
  if (nums[0] === 0) {
      dp[0][sum] = 2;
  } else {
      dp[0][sum - nums[0]] = 1;
      dp[0][sum + nums[0]] = 1;
  }
  for (let i = 1; i < l; i++) {
      for (let j = 0; j < len; j++) {
          let left = (j - nums[i]) < 0 ? 0 : j - nums[i];
          let right = (j + nums[i]) >= len ? 0 : j + nums[i];
          dp[i][j] = dp[i-1][left] + dp[i-1][right]
      }
  }
  return dp[l - 1][sum + S]
};
/**假设所有元素和为sum，所有添加正号的元素的和为A，所有添加负号的元素和为B，则有sum = A + B 且 S = A - B，解方程得A = (sum + S)/2。即题目转换成：从数组中选取一些元素使和恰好为(sum + S) / 2。可见这是一个恰好装满的01背包问题，要求所有方案数
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
    let sum = nums.reduce((i, j) => {
        return i + j
    }, 0);
    if (Math.abs(sum) < Math.abs(S)) return 0
    if ((sum + S) % 2 !== 0) return 0
    let target = (sum + S) / 2
    let dp = new Array(target + 1).fill(0)
    dp[0] = 1
    for(let i = 1; i <= nums.length; i++) {
        for (let j = target; j >= nums[i - 1]; j--) {
            dp[j] = dp[j] + dp[j - nums[i - 1]]
        }
    }
    return dp[target]
};