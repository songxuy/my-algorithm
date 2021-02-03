/*
 * @Description: 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * @Demo 
 * 输入: [-2,1,-3,4,-1,2,1,-5,4]
 * 输出: 6
 * 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 * https://leetcode-cn.com/problems/maximum-subarray/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  /* let sum = -Infinity;
  for (let i = 0; i < nums.length; i++) {
      let temp = 0;
      for (let j = i; j < nums.length; j++) {
          temp += nums[j];
          if (temp > sum)
          {
              sum = temp;
          }
      }
  }
  return sum */
  let len = nums.length;
  let dp = new Array(len + 1).fill(0);
  dp[0] = nums[0];
  let max = dp[0];
  for (let i = 1; i < len; i++) {
      dp[i] = Math.max(dp[i-1] + nums[i], nums[i]);
      max = Math.max(dp[i], max)
  }
  return max
};