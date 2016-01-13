function scoreModification(arr) {
    var filteredScores = arr.map(function(x){
        if(x > 0 && x <= 400){
           return Math.round(x * 80) / 100;
        }
    }).filter(function(x){
        return x;
    });

    filteredScores.sort(function(x, y) {
        return x > y;
    });

    console.log(filteredScores);
}

scoreModification([200, 120, 23, 67, 350, 420, 170, 212, 401, 615, -1]);