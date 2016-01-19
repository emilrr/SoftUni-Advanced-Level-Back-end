function countDivs(html) {
    html = html.map(function (x){
        return x.trim()
    }).join('');

    var countOpen = 0;
    var countClose = 0;
    var regexOpeningTags = /<div[^<>]*>/g;
    var regexClosingTags = /<\/div>/g;
    var match;

    while (match = regexOpeningTags.exec(html)) {
        countOpen++;
    }

    while (match = regexClosingTags.exec(html)) {
        countClose++;
    }

    return Math.min(countOpen, countClose);
}

var htmlData = [
    '<!DOCTYPE html>',
    '<html>',
    '<head lang="en">',
    '    <meta charset="UTF-8">',
    '    <title>index</title>',
    '    <script src="/yourScript.js" defer></script>',
    '</head>',
    '<body>',
    '    <div id="outerDiv">',
    '        <div',
    '    class="first">',
    '            <div><div>hello</div></div>',
    '        </div>',
    '        <div>hi<div></div></div>        ',
    '        <div>I am a div</div>',
    '    </div>',
    '</body>',
    '</html>'
];

console.log(countDivs(htmlData));