let matrix: number[][] = [[0, 1, 1, 2],
                          [0, 5, 0, 0],
                          [2, 0, 3, 3]];

const matrixElementsSum = matrix => {
    let sum: number = 0;
    // Duyệt theo chiều dọc, gặp số 0 là break luôn
    for (let i = 0; i < matrix[0].length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[j][i] === 0) {
                break;
            }
            sum += matrix[j][i];
        }
    }
    return sum;
}

console.log(matrixElementsSum(matrix)); // 7