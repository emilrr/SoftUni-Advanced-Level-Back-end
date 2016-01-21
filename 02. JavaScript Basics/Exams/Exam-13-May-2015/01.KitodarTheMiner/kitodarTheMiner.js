function solve(array){
    var countGold = 0;
    var countSilver = 0;
    var countDiamonds = 0;
    var reg = /([\w]+)\-([\w]+)\:([0-9]+)/;

    for (var i in array) {
        var mineWord = array[i].substr(0, 4);
        var line = array[i].replace(/\s+/g, '');
        var data = reg.exec(line);
        if(mineWord === 'mine' && data !== null){
            var ore = data[2];
            var quantity = Number(data[3]);

            if(ore === 'gold'){
                countGold += quantity;
            }
            else if(ore === 'silver'){
                countSilver += quantity;
            }
            else if(ore === 'diamonds'){
                countDiamonds += quantity;
            }
        }
    }

    console.log('*Silver: ' + countSilver);
    console.log('*Gold: ' + countGold);
    console.log('*Diamonds: ' + countDiamonds);
}

var array = [
    "mine mina - gold - 5",
    "mine mina - silver - 5",
    "mine mina - diamonds : 5",
    "mine mina - gold:5"
];

var arrayTwo = [
 "mine bobovDol - gold: 10",
 "mine medenRudnik - silver: 22",
 "mine chernoMore - shrimps : 24",
 "gold: 50"
 ];

solve(array);
solve(arrayTwo);