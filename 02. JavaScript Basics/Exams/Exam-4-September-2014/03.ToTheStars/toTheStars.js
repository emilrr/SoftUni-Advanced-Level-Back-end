function solve(input){
    var firstStarData = input[0].split(' '),
        secondStarData = input[1].split(' '),
        thirdStarData = input[2].split(' '),
        coordinatesNormandy = input[3].split(' '),
        numberOfTurns = input[4],
        firstStarName = firstStarData[0],
        firstX = Number(firstStarData[1]),
        firstY = Number(firstStarData[2]),
        secondStarName = secondStarData[0],
        secondX = Number(secondStarData[1]),
        secondY = Number(secondStarData[2]),
        thirdStarName = thirdStarData[0],
        thirdX = Number(thirdStarData[1]),
        thirdY = Number(thirdStarData[2]),
        normandyX = Number(coordinatesNormandy[0]),
        normandyY = Number(coordinatesNormandy[1]);



    for(var i = 0; i <= numberOfTurns; i++){
        if(normandyX >= firstX - 1 && normandyX <= firstX + 1
            && normandyY >= firstY -1 && normandyY <= firstY + 1){
            console.log(firstStarName.toLocaleLowerCase());
        }
        else if(normandyX >= secondX - 1 && normandyX <= secondX + 1
            && normandyY >= secondY -1 && normandyY <= secondY + 1){
            console.log(secondStarName.toLocaleLowerCase());
        }
        else if(normandyX >= thirdX - 1 && normandyX <= thirdX + 1
            && normandyY >= thirdY -1 && normandyY <= thirdY + 1){
            console.log(thirdStarName.toLocaleLowerCase());
        }
        else{
            console.log('space');
        }
        normandyY ++;
    }
}

var data = [
    "Terra-Nova 16 2",
    "Perseus 2.6 4.8",
    "Virgo 1.6 7",
    "2 5",
    "4"
];

solve(data);