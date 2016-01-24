function solve(input){
    var regTag = /(<p>(.*?)<\/p>)/g,
        array = [],
        matchElements,
        text = '',
        newChar;
    
    matchElements = regTag.exec(input[0]);
    while(matchElements !== null){
        text = matchElements[2];
        var regSmallLetters = /([^a-z\d]+)/g;
        text = text.replace(regSmallLetters, ' ');
        for(var j = 0; j < text.length; j++){
            var currentChar = text[j];
            var asciiCode = currentChar.charCodeAt(0);
            if(asciiCode >= 97 && asciiCode <= 109){
                newChar = String.fromCharCode(asciiCode + 13);
            }
            else if(asciiCode >= 110 && asciiCode <= 122){
                newChar = String.fromCharCode(asciiCode - 13);
            }
            else{
                newChar = currentChar;
            }

            array.push(newChar);
        }
        matchElements = regTag.exec(input[0]);
    }

    console.log(array.join(''));
}

var data = [
   "\<html><head><title></title></head><body><h1>hello</h1><p>znahny!@#%&&&&****" +
   "\</p><div><button>dsad</button></div><p>grkg^^^^%%%)))([]12</p></body></html>"
];

var dataSecond = [
   "\<html><head><title></title></head><body><h1>Intro</h1><ul><li>Item01</li><li>Item02</li><li>Item03</li></ul>" +
   "\<p>jura qevivat va jrg%^&%^&^%&^))))()%^&%^&^%&^))))()%^&%^&^%&^))))() fyvccrel fabjl</p>" +
   "\<div><button>Click me, baby!</button></div><p> pbaqvgvbaf fabj punvaf ner nofbyhgryl nygubhtu fabj punvaf znl ybbx </p>" +
   "\<span>This manual is false, do not trust it! The illuminati %^&%^&^%&^))))()wrote it down to trick you!</span>" +
   "\<p>vagvzvqngvat gur onfvp vqrn vf ernyyl fvzcyKJHJHHV&^&^&r svg gurz bire lbhe gverf qevir sbejneq fybjyl naq gvtugra gurz hc va pbyq jrg</p>" +
   "\<p> pbaqvgvbaf guvf vf rnfvre %^&%^&^%&^))))()%^&%^&^%&^))))()fnvq guna qbar ohg vs lbh chg ba lbhe gverf </p>" +
   "\<pig>it is frustrating that you have not put car chains yet... embarrassing...</pig>" +
   "\<p>orsber lbh HGVKHGVHKernpu fabjl ebnqf lbh jvyy znxr lbhe yvsr jnl rnfvre</p>" +
   "\<span>it is not that fun making tests sometIUGVUJimes, onlysometimes :)</span>" +
   "\<p>orsber lbh HGVKHGVHKernpu fabjl ebnqf lbh jvyy znxr lbhe yvsr jnl rnfvre</p>" +
   "\<p>orsber lbh HGVKHGVHKernpu fabjl ebnqf lbh jvyy znxr lbhe yvsr jnl rnfvre</p>" +
   "\<p>orsber lbh HGVKHGVHKernpu fabjl ebnqf lbh jvyy znxr lbhe yvsr jnl rnfvre</p>" +
   "\<pig>orsber lbh HGVKHGVHKernpu fabjl ebnqf lbh jvyy znxr lbhe yvsr jnl rnfvre</pig>" +
   "\<p>orsber lbh HGVKHGVHKernpu fabjl ebnqf lbh jvyy ^%#^$%#^znxr lbhe yvsr jnl rnfvre</p>" +
   "\<p>orsber lbh HGVKHGVHKernpu fabjl ebnqf lbh jvyy znxr lbhe yvsr jnl rnfvre</p>" +
   "\<p>orsber lbh HGVKHGVHKernpu fabjl ebnqf lbh jvyy znxr lbhe yvsr jn&^%&^%&l rnfvre</p>" +
   "\<p>orsber lbh HGVKHGVHKernpu fabjl ebnqf lbh jvyy znxr lbhe yvsr jnl rnfvre</p>" +
   "\<p>orsber lbh HGVKHGVHKernpu fabjl ebnqf lbh jvyy znxr lbhe yvsr jnl rnfvre</p>" +
   "\<p>orsber lbh HGVKHGVHKernpu fabjl ebnqf lbh jvyy znxr lbhe yvsr jnl rnfvre</p>" +
   "\<p>orsber lbh HGVKHGVHKernpu fabjl ebnqf lbh jvyy znxr lbhe yvsr jnl rnfvre</p></body>"
];

solve(data);
solve(dataSecond);