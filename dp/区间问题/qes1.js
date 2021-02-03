/*
 * @Description: 给定一个字符串 s ，找到其中最长的回文子序列，并返回该序列的长度。可以假设 s 的最大长度为 1000 。
 * @Demo 
 * 输入:
 * "bbbab"
 * 输出:
 * 4
 * https://leetcode-cn.com/problems/longest-palindromic-subsequence/
 */
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
  if (s.length === 1) return 1;
  let n = s.length
  let dp = new Array(s.length).fill(0).map(x=>Array(s.length).fill(0));
  for (let i = 0; i < dp.length; i++) {
      dp[i][i] = 1;
  }
  for (let i = n - 1; i >= 0; i--) {
      for (let j = i + 1; j < n; j++) {
          if (s[i] == s[j]) {
              dp[i][j] = dp[i+1][j-1] + 2
          } else {
              dp[i][j] = Math.max(dp[i][j-1], dp[i+1][j])
          }
      }
  }
  return dp[0][n-1]
};