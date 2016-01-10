function calcExp() {
    var argument = document.getElementById('expression').value;
    var evaluate = eval(argument);

    if (evaluate === undefined) {
        document.getElementById('result').innerHTML = 'Type something to evaluate.';
    }
    else {
        document.getElementById('result').innerHTML = evaluate;
        document.getElementById('evaluate').value = '';
    }
}