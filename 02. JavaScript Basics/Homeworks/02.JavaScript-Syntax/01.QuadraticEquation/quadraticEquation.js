function getRoots(a, b, c) {
    var a = parseInt(a);
    var b = parseInt(b);
    var c = parseInt(c);

    var d = (Math.pow(b, 2) - (4 * a * c));
    var x1 = 0;
    var x2 = 0;

    if(d > 0) {
        x1 = (-b - Math.sqrt(d)) / (2 * a);
        x2 = (-b + Math.sqrt(d)) / (2 * a);
        console.log("x1 = " + x1 + "\nx2 = " + x2);
    }
    else if(d === 0) {
        x1 = (-b) / (2 * a);
        console.log("x = " + x1);
    }
    else {
        console.log("No real roots");
    }
}

getRoots(2, 5, -3);
console.log();
getRoots(2, -4, 2);
console.log();
getRoots(4, 2, 1);