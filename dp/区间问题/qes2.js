/*
 * @Description: 给定一个字符串 S，找出 S 中不同的非空回文子序列个数，并返回该数字与 10^9 + 7 的模。通过从 S 中删除 0 个或多个字符来获得子序列。如果一个字符序列与它反转后的字符序列一致，那么它是回文字符序列。
 * @Demo 
 * 输入：
 * S = 'bccb'
 * 输出：6
 * 解释：
 * 6 个不同的非空回文子字符序列分别为：'b', 'c', 'bb', 'cc', 'bcb', 'bccb'。
 * 注意：'bcb' 虽然出现两次但仅计数一次。
 * https://leetcode-cn.com/problems/count-different-palindromic-subsequences/
 */
/**
 * @param {string} S
 * @return {number}
 */
var countPalindromicSubsequences = function(S) {
  let n = S.length;
  let dp = new Array(n).fill(0).map(x=>Array(n).fill(0));
  for (let i = 0; i < dp.length; i++) {
      dp[i][i] = 1;
  }
  for (let len = 2; len <= n; len++) {
      for(let i = 0; i < n - len + 1; i++) {
          let j = i + len - 1;
          if(S[i] != S[j]) {
              dp[i][j] = dp[i+1][j] + dp[i][j-1] - dp[i+1][j-1];
          } else {
              dp[i][j] = dp[i+1][j-1] * 2;
              let l = i + 1;
              let r = j - 1;
              while(l <= r && S[l] != S[i]) l += 1;
              while(l <=r && S[r] != S[i]) r -= 1;
              if (l > r) {
                  dp[i][j] += 2;
              } else if (l == r) {
                  dp[i][j] += 1;
              } else {
                  dp[i][j] -= dp[l+1][r-1]
              }
          }
          dp[i][j] = dp[i][j] < 0 ? dp[i][j] + 1000000007 : dp[i][j] % 1000000007;
      }
  }
  return dp[0][n - 1];
};