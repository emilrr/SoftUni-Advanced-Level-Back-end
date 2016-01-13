function scallingGrade(arr){

    var data = arr.map(function(x){
        x['score'] = Math.round(x['score'] * 110) / 100;
        if(x['score'] < 100){
            x['hasPassed'] = false;
        }
        else {
            x['hasPassed'] = true;
        }
        return x;
    });

    data = data.filter(function(x){
        return x['hasPassed'];
    });

    data = data.sort(function(x, y){
        return x['name'] > y['name'];
    });

    console.log(data);
}

scallingGrade([{ 'name' : 'Пешо', 'score' : 91 }, { 'name' : 'Лилия', 'score' : 290 }, { 'name' : 'Алекс', 'score' : 343 }, { 'name' : 'Габриела', 'score' : 400 }, { 'name' : 'Жичка', 'score' : 70 }]);
