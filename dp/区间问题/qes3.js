/*
 * @Description: 给定 N，想象一个凸 N 边多边形，其顶点按顺时针顺序依次标记为 A[0], A[i], ..., A[N-1]。假设您将多边形剖分为 N-2 个三角形。对于每个三角形，该三角形的值是顶点标记的乘积，三角剖分的分数是进行三角剖分后所有 N-2 个三角形的值之和。返回多边形进行三角剖分后可以得到的最低分。
 * @Demo 
 * 输入：[1,2,3]
 * 输出：6
 * 解释：多边形已经三角化，唯一三角形的分数为 6。
 * https://leetcode-cn.com/problems/minimum-score-triangulation-of-polygon/
 */
/* dp表示从点i到j中值最小为dp[i][j] */
var minScoreTriangulation = function(A) {
  let dp = new Array(A.length).fill(0).map(x=>Array(A.length).fill(0));
  for(let j = 2; j < A.length; j++) {
      for(let i = j - 2; i >=0; i--) {
          for(let m = i+1; m < j; m++){
              if(dp[i][j]==0){
                  dp[i][j] = A[i] * A[j] * A[m] + dp[i][m] + dp[m][j];
              } else {
                  dp[i][j] = Math.min(dp[i][j], A[i]*A[j]*A[m] + dp[i][m] + dp[m][j])
              }
          }
      }
  }
  return dp[0][A.length - 1]
};