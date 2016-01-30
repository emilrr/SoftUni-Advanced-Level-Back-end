function solve(input){
    var bill = Number(input[0]),
        mood = input[1],
        tips = 0;

    switch (mood){
        case 'happy':
            tips = (10/100) * bill;
            break;
        case 'married':
            tips = (5 / 10000) * bill;
            break;
        case 'drunk':
            bill = (15 / 100) * bill;
            var n = bill.toString()[0];
            tips = Math.pow(bill, n);
            break;
        default:
            tips = (5 / 100) * bill;
    }

    console.log(tips.toFixed(2));
}

var data = [
    "1242192.33",
    "married"
];

solve(data);