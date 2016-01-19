function clone(obj){
    if (null == obj || "object" != typeof obj) {
        return obj;
    }
    var copy = obj.constructor();
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) copy[key] = obj[key];
    }
    return copy;
}

function compareObjects(a, b){
    console.log('a == b --> ' + (a == b));
}

var a = { name: 'Pesho', age: 21 }
var b = clone(a); // a deep copy
compareObjects(a, b); //a == b-- > false
var a = { name: 'Pesho', age: 21 };
var b = a; // not a deep copy
compareObjects(a, b); //a == b-- > true