/*
 * @Description: 给你一个二进制字符串数组 strs 和两个整数 m 和 n 。请你找出并返回 strs 的最大子集的大小，该子集中 最多 有 m 个 0 和 n 个 1 。如果 x 的所有元素也是 y 的元素，集合 x 是集合 y 的 子集 。
 * 我们把每个字符串看做是一件物品，把字符串中0的数目和1的数目看做是两种“重量”，所以就变成了一个二维01背包问题，书包的两个限重分别是 m 和 n，要求书包能装下的物品的最大数目（也相当于价值最大，设每个物品价值为1）。
 * demo
 * 输入：strs = ["10", "0001", "111001", "1", "0"], m = 5, n = 3
 * 输出：4
 * 解释：最多有 5 个 0 和 3 个 1 的最大子集是 {"10","0001","1","0"} ，因此答案是 4 。
 * 其他满足题意但较小的子集包括 {"0001","1"} 和 {"10","1","0"} 。{"111001"} 不满足题意，因为它含 4 个 1 ，大于 n 的值 3 。
 * https://leetcode-cn.com/problems/ones-and-zeroes/
 */
/**
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
  let len = strs.length;
  let w0, w1;
  let dp = new Array(m + 1);
  for (let i = 0; i <= m; i++) {
      dp[i] = new Array(n + 1).fill(0)
  }
  for (let i = 1; i <= len; i++) {
      w0 = getStrNum(strs[i-1], '0');
      w1 = getStrNum(strs[i-1], '1');
      for(let j = m; j >= w0; j--){
          for(let k = n; k >= w1; k--){
              dp[j][k] = Math.max(dp[j][k], 1 + dp[j - w0][k - w1])
          }
      }
  }
  return dp[m][n];
};
function getStrNum(str, i) {
  let num = 0
  str.split('').forEach(k => {
      if (k === i){
          num++
      }
  })
  return num
}