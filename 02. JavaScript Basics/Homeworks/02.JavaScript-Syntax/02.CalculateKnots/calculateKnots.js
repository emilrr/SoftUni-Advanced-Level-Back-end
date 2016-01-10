function calculateKnots(km){
    var km = parseFloat(km);
    var knots = (km / 1.852);
    console.log(knots.toFixed(2))
}

calculateKnots(20);
calculateKnots(112);
calculateKnots(400);