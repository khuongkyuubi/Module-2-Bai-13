function countNumber(arr, number) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === number) {
            count++;
        }
    }
    console.log(count);
    return count;
}
var arr = [1, 2, 3, 4, 5, 2, 2, 3, 4, 1, 5, 3, 2, 1];
countNumber(arr, 1);
countNumber(arr, 2);
countNumber(arr, 3);
countNumber(arr, 4);
countNumber(arr, 5);
