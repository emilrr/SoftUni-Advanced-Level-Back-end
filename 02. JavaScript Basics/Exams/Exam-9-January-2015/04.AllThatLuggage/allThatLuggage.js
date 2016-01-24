function solve(input){
    var luggageByOwners = {};

    for(var i = 0; i < input.length - 1; i++){
        var reg = /\.*\*\.*/g,
            inline = input[i].split(reg),
            owner = inline[0],
            luggageName = inline[1],
            isFood = inline[2] == 'true' ? true : false,
            isDrink = inline[3] == 'true' ? true : false,
            isFragile = inline[4] == 'true' ? true : false,
            weight = Number(inline[5]),
            transferredWith = inline[6];

        if(!luggageByOwners[owner]){
            luggageByOwners[owner] = {};
        }

        luggageByOwners[owner][luggageName] = {
            kg: weight,
            fragile: isFragile,
            type: isFood ? 'food' : (isDrink ? 'drink' : 'other'),
            transferredWith: transferredWith
        };
    }

    var sortingCriteria = input[input.length - 1];

    switch (sortingCriteria) {
        case 'strict':
            console.log(JSON.stringify(luggageByOwners));
            break;
        case 'luggage name':
            console.log(JSON.stringify(sortByLuggageName(luggageByOwners)));
            break;
        case 'weight':
            console.log(JSON.stringify(sortByWeight(luggageByOwners)));
            break;
        default: break;
    }

    function sortByLuggageName(luggageByOwners) {
        var sortedObj = {};

        Object.keys(luggageByOwners).forEach(function(key) {
            sortedObj[key]={};
            var sortedInnerKeys = Object.keys(luggageByOwners[key]).sort();

            sortedInnerKeys.forEach(function (innerkey) {
                sortedObj[key][innerkey] = luggageByOwners[key][innerkey];
            })
        });

        return sortedObj;
    }

    function sortByWeight(luggageByOwners) {
        var sortedObj = {};

        Object.keys(luggageByOwners).forEach(function(key) {
            sortedObj[key]={};
            var a = Object.keys(luggageByOwners[key]).sort(function (a,b) {
                return luggageByOwners[key][a].kg- luggageByOwners[key][b].kg;
            });
            a.forEach(function (value) {
                sortedObj[key][value] = luggageByOwners[key][value];
            })
        });

        return sortedObj;
    }
}

var data = [
        "Yana Slavcheva.*.clothes.*.false.*.false.*.false.*.2.2.*.backpack",
        "Kiko.*.socks.*.false.*.false.*.false.*.0.2.*.backpack",
        "Kiko.*.banana.*.true.*.false.*.false.*.3.2.*.backpack",
        "Kiko.*.sticks.*.false.*.false.*.false.*.1.6.*.ATV",
        "Kiko.*.glasses.*.false.*.false.*.true.*.3.*.ATV",
        "Manov.*.socks.*.false.*.false.*.false.*.0.3.*.ATV",
        "weight"
];

solve(data);