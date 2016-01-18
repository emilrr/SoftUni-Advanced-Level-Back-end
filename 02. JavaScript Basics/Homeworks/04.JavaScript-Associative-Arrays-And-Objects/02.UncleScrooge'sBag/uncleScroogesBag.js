function findTheExactAmount(input) {
    var coinsGold = 0,
        coinsSilver = 0,
        coinsBronze = 0,
        coins = 0;

    for(var i = 0; i < input.length; i++){
        var item = input[i].split(' ');
        var element = item[0].toLowerCase();
        var amount = item[1];

        if(element === 'coin'){
            if(amount % 1 === 0 && amount > 0){
                var number = parseInt(amount);
                coins += number;
            }
        }
    }

    coinsGold = Math.floor(coins/100);
    coins = coins - coinsGold * 100;
    coinsSilver = Math.floor(coins/10);
    coinsBronze = coins - coinsSilver*10;

    console.log('gold : ' + coinsGold);
    console.log('silver : ' + coinsSilver);
    console.log('bronze : ' + coinsBronze);
}

findTheExactAmount(['coin 1','coin 2', 'coin 5', 'coin 10', 'coin 20', 'coin 50.00', 'coin 100', 'coin 200', 'coin 500','cigars 1']);
findTheExactAmount(['coin 1', 'coin two', 'coin 5', 'coin 10.50', 'coin 20', 'coin 50', 'coin hundred', 'cigars 1']);