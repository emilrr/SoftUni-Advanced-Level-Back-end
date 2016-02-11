function printArgsInfo(){
    if(arguments.length === 0){
        console.log('No arguments');
    }

    for (var i in arguments) {
        if(arguments.hasOwnProperty(i)){
            var type = typeof (arguments[i]);

            if(Array.isArray(arguments[i])){
                type = 'array';
            }

            console.log(arguments[i] + ' (' + type + ')');
        }
    }
}

printArgsInfo.call(null);
printArgsInfo.call(null, 3, 'Gosho', undefined);

printArgsInfo.apply(null);
printArgsInfo.apply(null, [2, 5]);