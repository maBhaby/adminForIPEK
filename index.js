// const binarySearch<T> = (arrItem: T[], item:T): T | null=> {
// }
// binarySearch<number>()
function binarySearch(arrItem, item) {
    var low = 0;
    var high = arrItem.length - 1;
    while (low <= high) {
        var mid = (low + high) / 2; // середина массива
        var guess = arrItem[mid];
        if (guess === item) {
            return mid;
        }
        else if (guess > item) {
            high = mid - 1;
        }
        else {
            high = mid + 1;
        }
        return null;
    }
}
var createArray = function (count) {
    var result = [];
    for (var i = 0; i <= count; i++) {
        result.push(i);
    }
    return result;
};
binarySearch(createArray(100), 3);
