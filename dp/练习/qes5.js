/*
 * @Description: 给定一个整数数组，找出总和最大的连续数列，并返回总和。
 * @Demo 
 * 输入： [-2,1,-3,4,-1,2,1,-5,4]
 * 输出： 6
 * 解释： 连续子数组 [4,-1,2,1] 的和最大，为 6。
 * https://leetcode-cn.com/problems/contiguous-sequence-lcci/ 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let maxSum = nums[0];
  for(let i = 1; i < nums.length; i++)
  {
    if(nums[i-1] >= 0)
      nums[i] += nums[i-1];
    maxSum = Math.max(maxSum, nums[i]);
  }
  return maxSum;
};