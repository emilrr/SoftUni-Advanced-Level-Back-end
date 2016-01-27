function solve(input){
    var matrix = [],
        copyMatrix = [];
    for(var i = 0; i < input.length; i++){
        matrix[i] = input[i].split('');
        copyMatrix[i] = input[i].split('');
    }

    for(var row = 1; row < input.length - 1; row++){
        for(var col = 1; col < matrix[row].length - 1; col++){

            var currentValue = matrix[row][col].toLowerCase();

            if(col < matrix[row - 1].length && col < matrix[row + 1].length
                && currentValue === matrix[row][col - 1].toLowerCase()
                && currentValue === matrix[row][col + 1].toLowerCase()
                && currentValue === matrix[row - 1][col].toLowerCase()
                && currentValue === matrix[row + 1][col].toLowerCase()){

                copyMatrix[row][col] = '';
                copyMatrix[row][col - 1] = '';
                copyMatrix[row][col + 1] = '';
                copyMatrix[row - 1][col] = '';
                copyMatrix[row + 1][col] = '';
            }
        }
    }

    for (var j in copyMatrix) {
        console.log(copyMatrix[j].join(''));
    }
}

var data = [
    "fs2s6",
    "sssss",
    "1S2s8"
];

solve(data);