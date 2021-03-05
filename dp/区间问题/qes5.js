/*
 * @Description: 有台奇怪的打印机有以下两个特殊要求：打印机每次只能打印同一个字符序列。每次可以在任意起始和结束位置打印新字符，并且会覆盖掉原来已有的字符。
 * 给定一个只包含小写英文字母的字符串，你的任务是计算这个打印机打印它需要的最少次数。
 * @Demo 
 * 输入: "aba"
 * 输出: 2
 * 解释: 首先打印 "aaa" 然后在第二个位置打印 "b" 覆盖掉原来的字符 'a'。
 * https://leetcode-cn.com/problems/strange-printer/
 */
/**
 * @param {string} s
 * @return {number}
 */
var strangePrinter = function(s) {
  let n = s.length;
  if (n === 0) {
      return 0;
  }
  let dp = new Array(n + 1).fill(0).map(x=>Array(n + 1).fill(0));
  for (let i = 0; i < n; i++){
      dp[i][i] = 1;
  }
  for (let len = 2; len <= n; len++){
    for(let i = 0; i + len -1 < n; i++) {
      let j = i + len -1;
      dp[i][j] = dp[i+1][j] + 1;
      for(let k = i+ 1; k <= j; k++){
        if(s.charAt(i) == s.charAt(k)){
          dp[i][j] = Math.min(dp[i][j], dp[i][k-1] + dp[k+1][j])
        }
      }
    }
  }
  return dp[0][n-1]
};