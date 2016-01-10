function calcSupply(age, maxAge, food, foodPerDay) {
    var age = parseInt(age);
    var maxAge = parseInt(maxAge);
    var food = food;
    var foodPerDay = parseFloat(foodPerDay);

    var remainingDays  = (maxAge - age) * 365;
    var totalFood  = remainingDays  * foodPerDay;

    console.log(totalFood  + 'kg of ' + food  + ' would be enough until I am ' + maxAge + ' years old.' )

}


calcSupply(38, 118,'chocolate', 0.5);
console.log();
calcSupply(20, 87, 'fruits', 2);
console.log();
calcSupply(16, 102, 'nuts', 1.1);