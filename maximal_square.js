/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    if(matrix.length < 1 || matrix == NaN){ return 0}

    var row = matrix.length;
    var col = matrix[0].length;

    //var dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    var dp = Array.from({length: row+1}, () => Array(col+1).fill(0));
    var max_matrix = 0;

    for(var r = 0; r < row; r++){
        for(var c = 0; c < col ; c++){
            if(matrix[r][c] == "1"){
                dp[r+1][c+1] = Math.min(dp[r+1][c], dp[r][c+1], dp[r][c]) + 1;
                max_matrix = Math.max(max_matrix, dp[r+1][c+1])
            }
        }
    }
    return max_matrix * max_matrix
};