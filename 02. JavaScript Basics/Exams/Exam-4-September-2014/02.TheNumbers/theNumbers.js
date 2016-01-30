function solve(input){
    var data = input[0].split(/\D+/g).filter(Boolean).map(Number);
    var finalData = [];

    for (var i in data) {
        var hexString = data[i].toString(16).toLocaleUpperCase();
        if(hexString.length < 4){
            hexString = Array(5 - hexString.length).join('0') + hexString;
        }

        hexString = '0x' + hexString;
        finalData.push(hexString);
    }
    console.log(finalData.join('-'));
}

var data = [
    "482vMWo(*&^%$213;k!@41341((()&^>><///]42344p;e312"
];

solve(data);