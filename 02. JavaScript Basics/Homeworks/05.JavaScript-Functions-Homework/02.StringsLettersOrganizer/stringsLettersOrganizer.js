function sortLetters(str, order) {

    var letters = str.split('').sort(function(a, b) {
        a = a.toLowerCase();
        b = b.toLowerCase();

        if(order){
            return a > b;
        }
        else {
            return a < b;
        }
    });

    var sortedString = letters.join('');

    console.log(sortedString);
}

sortLetters('HelloWorld', true);
sortLetters('HelloWorld', false)
