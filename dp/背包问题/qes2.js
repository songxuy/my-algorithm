/*
 * @Description: 给定一个只包含正整数的非空数组。是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。
 * @注意:
 * 每个数组中的元素不会超过 100
 * 数组的大小不会超过 200
 * @问题转换 是否可以从输入数组中挑选出一些正整数，使得这些数的和 等于 整个数组元素的和的一半。
 * @Demo 
 * 示例 1:
 * 输入: [1, 5, 11, 5]
 * 输出: true
 * 解释: 数组可以分割成 [1, 5, 5] 和 [11].
 *  
 * 示例 2:
 * 输入: [1, 2, 3, 5]
 * 输出: false
 * 解释: 数组不能分割成两个元素和相等的子集.
 * https://leetcode-cn.com/problems/partition-equal-subset-sum/
 */

var canPartition = function(nums) {
  let sum = nums.reduce((i, j) => {
      return i + j;
  }, 0)
  if (sum % 2 !==0) return false
  let half = sum / 2;
  let dp = new Array(half + 1).fill(false);
  dp[0] = true
  for (let i = 1; i < nums.length; i++) {
      for (let j = half; j >= nums[i-1]; j--) {
          dp[j] = dp[j] || dp[j - nums[i-1]];
      }
  }
  return dp[half]
}; 