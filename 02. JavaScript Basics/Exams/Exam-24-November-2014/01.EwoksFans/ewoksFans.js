function solve(input){
    var minYear = new Date('01-01-1900'),
        maxYear = new Date('01-01-2015'),
        frontier = new Date('05-25-1973'),
        biggestFan = new Date('01-01-1900'),
        biggestHater = new Date('01-01-2015'),
        notFind = true,
        isFindBiggestFans = false,
        isFindBiggestHater = false;

    function toDate(dateStr) {
        var parts = dateStr.split(".");
        return new Date(parts[2], parts[1] - 1, parts[0]);
    }

    for(var i = 0; i < input.length; i++){
        var currentDate = toDate(input[i]);
        if(currentDate > minYear && currentDate < frontier){
            if(currentDate < biggestHater){
                biggestHater = currentDate;
                isFindBiggestHater =true;
                notFind = false;
            }
        }
        else if(currentDate < maxYear && currentDate >= frontier){
            if(currentDate > biggestFan){
                biggestFan = currentDate;
                isFindBiggestFans = true;
                notFind = false;
            }
        }
    }

    if(isFindBiggestFans){
        console.log('The biggest fan of ewoks was born on ' + biggestFan.toDateString());
    }

    if(isFindBiggestHater){
        console.log('The biggest hater of ewoks was born on ' + biggestHater.toDateString())
    }

    if(notFind){
        console.log('No result');
    }
}

var data = [
    "24.03.2036",
    "09.12.2042",
    "03.11.2049",
    "26.04.1956",
    "07.07.1990",
    "13.11.1998",
    "11.05.2049",
    "06.10.1932",
    "08.09.1994",
    "28.01.1958",
    "16.11.1889",
    "06.09.2037",
    "20.09.1868",
    "11.09.1968",
    "18.04.1936",
    "15.05.2004",
    "20.05.1910",
    "24.10.1975",
    "03.01.1974",
    "01.03.1994"
];

solve(data);

