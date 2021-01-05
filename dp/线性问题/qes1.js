/*
 * @Description: 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。
 * 子序列是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。
 * @Demo 
 * 输入：nums = [10,9,2,5,3,7,101,18]
 * 输出：4
 * 解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
 *  
 * 示例 2:
 * 输入：nums = [0,1,0,3,2,3]
 * 输出：4
 * https://leetcode-cn.com/problems/longest-increasing-subsequence/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  if(nums.length === 1) return 1
  let dp = new Array(nums.length).fill(0);
  dp[0] = 1;
  let max = 0;
  for (let i = 1; i < nums.length; i++) {
      dp[i] = 1;
      for (let j = 0; j < i; j++) {
          if (nums[j] < nums[i]) {
              dp[i] = Math.max(dp[i], dp[j] + 1)
          }
      }
      max = Math.max(dp[i], max)
  }
  return max
};