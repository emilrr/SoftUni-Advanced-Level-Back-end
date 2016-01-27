function solve(input){

    for (var i in input) {
        var output = '';
        var inline = input[i].replace(/%20/g, ' ').replace(/\+/g, ' ').replace(/\s+/g, ' ');
        var tokens = inline.split(/[&\?]/),
            result = {};
        tokens.forEach(function(x){
           if(x.indexOf('=') != -1) {
               var params = x.split('='),
                   key = params[0].trim(),
                   value = params[1].trim();
               if(!result[key]){
                   result[key] = [value];
               }
               else{
                   result[key].push(value);
               }
           }
        });
        for (var key in result) {
            output += (key + '=[' + result[key].join(', ') + ']');
        }

        console.log(output);
    }
}

var data = [
    'foo=%20foo&value=+val&foo+=5+%20+203',
    'foo=poo%20&value=valley&dog=wow+',
    'url=https://softuni.bg/trainings/coursesinstances/details/1070',
    'https://softuni.bg/trainings.asp?trainer=nakov&course=oop&course=php'
];

solve(data);