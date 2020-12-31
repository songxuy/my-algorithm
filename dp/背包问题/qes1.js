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
 * 
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