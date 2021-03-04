/*
 * @Description: 有 n 个气球，编号为0 到 n - 1，每个气球上都标有一个数字，这些数字存在数组 nums 中。现在要求你戳破所有的气球。戳破第 i 个气球，你可以获得 nums[i - 1] * nums[i] * nums[i + 1] 枚硬币。 这里的 i - 1 和 i + 1 代表和 i 相邻的两个气球的序号。如果 i - 1或 i + 1 超出了数组的边界，那么就当它是一个数字为 1 的气球。求所能获得硬币的最大数量。
 * @Demo 
 * 输入：nums = [3,1,5,8]
 * 输出：167
 * 解释：
 * nums = [3,1,5,8] --> [3,5,8] --> [3,8] --> [8] --> []
 * coins =  3*1*5    +   3*5*8   +  1*3*8  + 1*8*1 = 167
 * https://leetcode-cn.com/problems/burst-balloons/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
  let len = nums.length;
  let temp = new Array(len + 2);
  temp[0] = 1;
  temp[len + 1] = 1;
  for (let i = 0; i < len; i++) {
    temp[i + 1] = nums[i];
  }
  let dp = new Array(len + 2).fill(0).map(x => Array(len + 2).fill(0));
  for (let l = 3; l <= len + 2; l++) {// l 表示区间长度
    for (let i = 0; i <= len + 2 - l; i++) {
      let res = 0;
      for (let k = i + 1; k < i + l - 1; k++) {
        let left = dp[i][k];
        let right = dp[k][i + l - 1];
        res = Math.max(res, left + temp[i] * temp[k] * temp[i + l - 1] + right);
      }
      dp[i][i + l - 1] = res;
    }
  }
  return dp[0][len + 1];
}