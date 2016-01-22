function solve(input){
    var jumpsAllowed = Number(input[0]),
        lengthTrack = Number(input[1]),
        athletes = [],
        isFinish = false,
        winner = '',
        maxJump = 0;

    for(var i = 2; i < input.length; i++){
        var line = input[i].split(', ');
        var name = line[0];
        var jump = Number(line[1]);
        var athlete = {name: name, jump: jump, position: 0};
        athletes.push(athlete);
    }

    for(var j = 1; j <= jumpsAllowed; j++){
        for (var a in athletes) {
            var lengthJump =  athletes[a].jump;
            athletes[a].position = j * lengthJump;
            var currentJump = athletes[a].position;

            if(currentJump >= maxJump){
                maxJump = currentJump;
                winner = athletes[a].name;
            }

            if(athletes[a].position === lengthTrack - 1){
                isFinish = true;
                break;
            }

            if(athletes[a].position >= lengthTrack){
                athletes[a].position = lengthTrack - 1;
                isFinish = true;
                break;
            }
        }

        if(isFinish){
            jumpsAllowed = j;
        }
    }

    String.prototype.replaceAt=function(index, character) {
        return this.substr(0, index) + character + this.substr(index+character.length);
    }

    console.log( Array(lengthTrack + 1).join('#'));
    console.log( Array(lengthTrack + 1).join('#'));

    for (var v in athletes) {
        var firstLetter = athletes[v].name.substring(0,1).toUpperCase();
        var line = Array(lengthTrack + 1).join('.');
        console.log(line.replaceAt(athletes[v].position, firstLetter));
    }

    console.log( Array(lengthTrack + 1).join('#'));
    console.log( Array(lengthTrack + 1).join('#'));

    console.log('Winner: ' + winner);
}

var data = [
    "10",
    "19",
    "angel, 9",
    "Boris, 10",
    "Georgi, 3",
    "Dimitar, 7"
];

var dataSecond = [
    "3",
    "40",
    "S, 5",
    "L, 1",
    "O, 7",
    "C, 3",
    "H, 10",
    "A, 12",
    "I, 5",
    "N, 8",
    "O, 0",
    "S, 6"
];

solve(data);
solve(dataSecond);
