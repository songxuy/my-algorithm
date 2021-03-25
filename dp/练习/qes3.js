/*
 * @Description: 给定一个整数数组 prices ，它的第 i 个元素 prices[i] 是一支给定的股票在第 i 天的价格。设计一个算法来计算你所能获取的最大利润。你最多可以完成 k 笔交易。
 * 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）
 * @Demo 
 * 输入：k = 2, prices = [2,4,1]
 * 输出：2
 * 解释：在第 1 天 (股票价格 = 2) 的时候买入，在第 2 天 (股票价格 = 4) 的时候卖出，这笔交易所能获得利润 = 4-2 = 2 。
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iv/
 */
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */

 // 第一步:定义状态
 // 可以定义如下
 // dp[i][j][0] 表示第i天交易了j次时卖出后的累计最大利润
 // dp[i][j][1] 表示第i天交易了j次时买入后的累计最大利润



 // 第二步：确定状态转移方程
 // dp[i][j][0] 当第i天不持股的话，我们需要确定昨天是否持有股票
 // dp[i][j][0] = max(dp[i - 1][j][0], dp[i - 1][j][1] + prices[i])
 // dp[i][j][1] 同样的第i天,我们需要去确定昨天是否持有股票
 // dp[i][j][1] = max(dp[i - 1][j][1], dp[i - 1][j - 1][0] - prices[i])


 // 初始化状态

 var maxProfit = function(k, prices) {
  let len = prices.length;
  if(len === 0) return 0;
  if(k >= len/2) return maxProfit2(prices);
  let dp = Array.from(new Array(len), () => new Array(k+1));
  for (let i = 0; i < len; i++) {
      for (let j = 0; j <= k; j++) {
          dp[i][j] = new Array(2).fill(0);
      }
  }
  for (let i = 0; i < len; i++) {
      for (let j = k; j > 0; j--) {
          if(i===0) {
              dp[i][j][0] = 0;
              dp[i][j][1] = -prices[i];
              continue;
          }
          dp[i][j][0] = Math.max(dp[i-1][j][0], dp[i-1][j][1] + prices[i]);
          dp[i][j][1] = Math.max(dp[i-1][j][1], dp[i-1][j-1][0] - prices[i]);
      }
  }
  return dp[len-1][k][0];
};

function maxProfit2(prices) {
  let profits = 0;
  for (let i = 0; i < prices.length + 1; i++) {
      if(prices[i + 1] - prices[i] > 0) {
          profits += prices[i + 1] - prices[i]
      }
  }
  return profits;
};

/*
  * k固定为两次
 https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iii/submissions/
 */
var maxProfit = function(prices) {
  if(prices==null || prices.length==0) {
      return 0;
  }
  let n = prices.length;
  //定义二维数组，5种状态  
  let dp = new Array(n).fill(0).map(x => new Array(5).fill(0));
  //初始化第一天的状态
  dp[0][0] = 0;
  dp[0][1] = -prices[0];
  dp[0][2] = 0;
  dp[0][3] = -prices[0];
  dp[0][4] = 0;
  for(let i=1;i<n;++i) {
      //dp[i][0]相当于初始状态，它只能从初始状态转换来
      dp[i][0] = dp[i-1][0];
      //处理第一次买入、第一次卖出
      dp[i][1] = Math.max(dp[i-1][1],dp[i-1][0]-prices[i]);
      dp[i][2] = Math.max(dp[i-1][2],dp[i-1][1]+prices[i]);
      //处理第二次买入、第二次卖出
      dp[i][3] = Math.max(dp[i-1][3],dp[i-1][2]-prices[i]);
      dp[i][4] = Math.max(dp[i-1][4],dp[i-1][3]+prices[i]);
  }
  //返回最大值
  return Math.max(dp[n-1][0],dp[n-1][1],dp[n-1][2],dp[n-1][3],dp[n-1][4]);
};