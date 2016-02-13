Array.prototype.flatten = function flattenArray() {

    var result = [];

    function traverseArr(array) {

        for (var i = 0; i < array.length; i++) {
            if (array[i] instanceof Array) {
                traverseArr(array[i]);
            } else {
                result.push(array[i]);
            }
        }
    }
    traverseArr(this);
    return result;
};

var array = [1, 2, 3, 4];
console.log(array.flatten());


array = [1, 2, [3, 4], [5, 6]];
console.log(array.flatten());
console.log(array); // Not changed

array = [0, ["string", "values"], 5.5, [[1, 2, true], [3, 4, false]], 10];
console.log(array.flatten());

