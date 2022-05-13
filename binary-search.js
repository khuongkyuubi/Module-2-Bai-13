var str = "012345679";
var arr = [];
for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
    var char = str_1[_i];
    arr.push(+char);
}
console.log(str.length);
console.log(arr);
// looking for 3
function finding(arr, left, right, number) {
    if (left <= right) {
        var mid = Math.floor(((right) + left) / 2);
        if (number === arr[mid]) {
            return mid;
        }
        else if (number < arr[mid]) {
            right = mid - 1;
        }
        else {
            left = mid + 1; // dịch 1 để k tìm lại mid đấy nữa
        }
        return finding(arr, left, right, number);
    }
    return -1; // nếu thoát khỏi if mà vẫn k return thì có nghĩa là không tìm được
}
var left = 0;
var right = arr.length - 1;
console.log("looking", finding(arr, 0, arr.length - 1, 0));
console.log("looking", finding(arr, 0, arr.length - 1, 1));
console.log("looking", finding(arr, 0, arr.length - 1, 2));
console.log("looking", finding(arr, 0, arr.length - 1, 3));
console.log("looking", finding(arr, 0, arr.length - 1, 4));
console.log("looking", finding(arr, 0, arr.length - 1, 5));
console.log("looking", finding(arr, 0, arr.length - 1, 6));
console.log("looking", finding(arr, 0, arr.length - 1, 7));
console.log("looking", finding(arr, 0, arr.length - 1, 9));
console.log("looking", finding(arr, 0, arr.length - 1, 8));
function binarySearch(arr, number, left, right) {
    if (left === void 0) { left = 0; }
    if (right === void 0) { right = arr.length - 1; }
    if (left <= right) {
        var mid = Math.floor(((right) + left) / 2);
        if (number === arr[mid]) {
            return mid;
        }
        else if (number < arr[mid]) {
            right = mid - 1;
        }
        else {
            left = mid + 1; // dịch 1 để k tìm lại mid đấy nữa
        }
        return finding(arr, left, right, number);
    }
    return -1; // nếu thoát khỏi if mà vẫn k return thì có nghĩa là không tìm được
}
console.log("test ", binarySearch(arr, 7));
