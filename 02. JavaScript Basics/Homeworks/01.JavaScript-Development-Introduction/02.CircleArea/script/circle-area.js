function calcCircleArea(r) {
    var area = Math.PI * r * r;
    return area;
}

function printResult(r, area, isNewRow) {
    document.body.innerHTML += 'r = ' + r + '; area = ' + area + (isNewRow == true ? '<br/>' : '');
}

printResult(7, calcCircleArea(7), true);
printResult(1.5, calcCircleArea(1.5), true);
printResult(20, calcCircleArea(20));