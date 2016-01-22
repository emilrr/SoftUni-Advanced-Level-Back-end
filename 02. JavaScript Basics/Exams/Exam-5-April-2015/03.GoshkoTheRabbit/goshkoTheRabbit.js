function solve(input) {
    var command = input[0].split(', '),
        matrix = [],
        path = [],
        rows = 0,
        cols = 0,
        row = 0,
        col = 0,
        countOfLettuce = 0,
        countOfCabbage = 0,
        countOfTurnip = 0,
        countOfCarrots = 0,
        countOfWallHits = 0;


    for (var i = 1; i < input.length; i++) {
        matrix[i - 1] = input[i].split(', ');
        rows++;
        cols = matrix[i - 1].length;

    }
    rows--;
    cols--;

    for (var k = 0; k < command.length; k++) {
        var currentCommand = command[k];
        var currentRow = row;
        var currentCol = col;

        switch (currentCommand) {
            case 'right':
                if (col < rows) {
                    col++
                }
                else {
                    countOfWallHits++;
                }
                break;
            case 'left':
                if (col > 0) {
                    col--;
                }
                else {
                    countOfWallHits++;
                }
                break;
            case 'up':
                if (row > 0) {
                    row--;
                }
                else {
                    countOfWallHits++;
                }
                break;
            case 'down':
                if (row < rows) {
                    row++;
                }
                else {
                    countOfWallHits++;
                }
                break;
        }

        var nextRow = row;
        var nextCol = col;

        if (currentRow != nextRow || currentCol != nextCol) {
            var currentPosition = matrix[row][col];
            var reg = /({[\*\&\#\!]})/g;
            path.push(currentPosition.replace(reg, '@'));
            var matched = currentPosition.match(reg);

            for (var m in matched) {
                var symbol = matched[m];
                switch (symbol) {
                    case '{&}':
                        countOfLettuce++;
                        break;
                    case '{*}':
                        countOfCabbage++;
                        break;
                    case '{#}':
                        countOfTurnip++;
                        break;
                    case '{!}':
                        countOfCarrots++;
                        break;
                }
            }
        }
    }

    console.log("{"+"\"&\":" + countOfLettuce + ",\"*\":" + countOfCabbage + ",\"#\":" + countOfTurnip + ",\"!\":" + countOfCarrots +
        ",\"wall hits\":" + countOfWallHits + "}");

    if(path.length > 0){
        console.log(path.join('|'));
    }
    else {
        console.log('no')
    }
}


var data = [
    "right, up, up, down",
    "asdf, as{#}aj{g}dasd, kjldk{}fdffd, jdflk{#}jdfj",
    "tr{X}yrty, zxx{*}zxc, mncvnvcn, popipoip",
    "poiopipo, nmf{X}d{X}ei, mzoijwq, omcxzne"
];
var dataSecond = [
    "right",
    "qwekjs, asd{#}a",
    "qwekjs, asd{#}a"

];

solve(data);
solve(dataSecond);