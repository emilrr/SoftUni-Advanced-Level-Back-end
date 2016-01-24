function solve(input){
    var matrix = [],
        rows = 0,
        cols = 0,
        previousCol = 0,
        isDead = false;

    for(var i = 0; i < input.length; i++){
        matrix[i] = input[i].split('');
        rows++;
        cols = input[0].length;
    }

    for(var row = 0; row < rows; row++){
        if(isDead){
            break;
        }

        for(var col = 0; col < cols; col++){
            if(matrix[row][col] === 'o'){
                previousCol = col;
                break;
            }

            if(matrix[row][col] === '>'){
                previousCol++;
            }
            else if(matrix[row][col] === '<'){
                previousCol--;
            }
        }

        for(col = 0; col < cols; col++){
            if(matrix[row][col] === '_' && previousCol === col){
                console.log('Landed on the ground like a boss!');
                console.log(row + ' ' + col);
                isDead = true;
                break;
            }
            else if(matrix[row][col] === '~' && previousCol === col){
                console.log('Drowned in the water like a cat!');
                console.log(row + ' ' + col);
                isDead = true;
                break;
            }
            else if((matrix[row][col] === '\\' || matrix[row][col] === '/' || matrix[row][col] === '|') && previousCol === col){
                console.log('Got smacked on the rock like a dog!');
                console.log(row + ' ' + col);
                isDead = true;
                break;
            }
        }
    }
}

var data = [
    "--o----------------------",
    ">------------------------",
    ">------------------------",
    ">-----------------/\\-----",
    "-----------------/--\\----",
    ">---------/\\----/----\\---",
    "---------/--\\--/------\\--",
    "<-------/----\\/--------\\-",
    "\\------/----------------\\",
    "-\\____/------------------"

];

var dataSecond = [
    "-------------o-<<--------",
    "-------->>>>>------------",
    "---------------->-<---<--",
    "------<<<<<-------/\\--<--",
    "--------------<--/-<\\----",
    ">>--------/\\----/<-<-\\---",
    "---------/<-\\--/------\\--",
    "<-------/----\\/--------\\-",
    "\\------/--------------<-\\",
    "-\\___~/------<-----------"

];

solve(data);
solve(dataSecond);