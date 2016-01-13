function filtersOutTheNumbers(arr) {

    var numbers = arr.filter(isNumber);
    var min = Math.min.apply(null, numbers),
        max = Math.max.apply(null, numbers);
    var mostFrequentNumber = findMostFrequentNumber(numbers);
    numbers.sort(function(x, y) {
        return x < y;
    });

    function isNumber(obj) {
        return !isNaN(Number(obj))
    }

    function findMostFrequentNumber(array)
    {
        var modeMap = {};
        var num = array[0],
            count = 1;
        for(var i = 0; i < array.length; i++)
        {
            var el = array[i];
            if(modeMap[el] == null)
            {
                modeMap[el] = 1;
            }
            else
            {
                modeMap[el]++;
            }
            if(modeMap[el] > count)
            {
                num = el;
                count = modeMap[el];
            }
        }
        return num;
    }

    console.log("Min number: " + min + "\n" + "Max number: " + max + "\n" + "Most frequent number: " + findMostFrequentNumber(numbers));
    console.log(numbers);
}

filtersOutTheNumbers(["Pesho", 2, "Gosho", 12, 2, "true", 9, undefined, 0, "Penka", { bunniesCount : 10}, [10, 20, 30, 40]]);