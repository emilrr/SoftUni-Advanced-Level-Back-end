function solve(input){
    for (var i in input) {
        //var reg = /([a-zA-Z]+)\s+([a-z]+)\s+([\d+])\s+([\d]+\.?[\d]*)/;
        var line = input[i].split(' '),
            carModel = line[0],
            fuelType = line[1],
            routeNumber = Number(line[2]),
            luggageWeight = Number(line[3]),
            coefficient = 0,
            baseConsumption = 10,
            normalRoad = 0,
            snowyRoad = 0,
            road = 0,
            totalConsumption = 0,
            extraSnowConsumption = 0,
            snowDistance  = 0;

        switch (fuelType){
            case 'gas':
                coefficient = 1.2;
                break;
            case 'petrol':
                coefficient = 1;
                break;
            case 'diesel':
                coefficient = 0.8;
                break;
        }

        var extraFuelConsumption = luggageWeight * 0.01;
        baseConsumption = (baseConsumption * coefficient) + extraFuelConsumption;
        extraSnowConsumption = 0.3 * baseConsumption;

        if(routeNumber === 1){
            road = 110;
            normalRoad = 100;
            snowyRoad = 10;
            totalConsumption = road * (baseConsumption / 100);
            snowDistance = snowyRoad * (extraSnowConsumption / 100);

        }
        else{
            road = 95;
            normalRoad = 65;
            snowyRoad = 30;
            totalConsumption = road * (baseConsumption / 100);
            snowDistance = snowyRoad * (extraSnowConsumption / 100);
        }

        var totalAmount =  snowDistance + totalConsumption;
        var roundedTheTotalFuelConsumption = Math.round(totalAmount);
        console.log(carModel + ' ' + fuelType + ' ' + routeNumber + ' ' +roundedTheTotalFuelConsumption);
    }

}

var data =
    [
        'BMW petrol 1 320.5',
        'Golf petrol 2 150.75',
        'Lada gas 1 202',
        'Mercedes diesel 2 312.54'
    ];

solve(data);