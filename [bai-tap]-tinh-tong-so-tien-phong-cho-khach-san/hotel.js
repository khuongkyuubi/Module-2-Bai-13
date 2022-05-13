var matrix = [[0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3]];
var matrixElementsSum = function (matrix) {
    var sum = 0;
    // Duyệt theo chiều dọc, gặp số 0 là break luôn
    for (var i = 0; i < matrix[0].length; i++) {
        for (var j = 0; j < matrix.length; j++) {
            if (matrix[j][i] === 0) {
                break;
            }
            sum += matrix[j][i];
        }
    }
    return sum;
};
console.log(matrixElementsSum(matrix)); // 7
