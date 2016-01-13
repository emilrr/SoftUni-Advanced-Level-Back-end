function replaceATag(str) {
    var text = str.split('\n');
    text.forEach(function(line){
        if(line.trim().slice(0, 3) === '<a '){
            var newLine = line.replace("<a ", "[URL ").replace('>', ']').replace('</a>', '[/URL]');
            console.log(newLine);
        }
        else{
            console.log(line);
        }
    });
}

replaceATag('<ul>\n <li>\n  <a href=http://softuni.bg>SoftUni</a>\n </li>\n</ul>');
