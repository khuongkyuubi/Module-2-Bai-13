// let matrix: number[][] = [[0, 1, 1, 2],
//                           [0, 5, 0, 0],
//                           [2, 0, 3, 3]];
//
// const matrixElementsSum = matrix => {
//     let sum: number = 0;
//     // Duyệt theo chiều dọc, gặp số 0 là break luôn
//     for (let i = 0; i < matrix[0].length; i++) {
//         for (let j = 0; j < matrix.length; j++) {
//             if (matrix[j][i] === 0) {
//                 break;
//             }
//             sum += matrix[j][i];
//         }
//     }
//     return sum;
// }
//
// console.log(matrixElementsSum(matrix)); // 7
var matrix = [[0, 1, 0, 0],
    [0, 5, 3, 2],
    [2, 0, 3, 3]];
var matrixElementsSum = function (matrix) {
    var sum = 0;
    // Duyệt theo chiều dọc, gặp số 0 là break luôn
    for (var i = 0; i < matrix[0].length; i++) {
        for (var j = 0; j < matrix.length; j++) {
            if ( /*matrix[j][i] === 0 || */(j > 0 && matrix[j - 1][i] === 0)) {
                continue;
            }
            sum += matrix[j][i];
        }
    }
    return sum;
};
console.log(matrixElementsSum(matrix)); // 7
