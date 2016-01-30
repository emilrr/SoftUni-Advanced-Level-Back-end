function solve(input){
    var result = {};
    for (var i in input) {
        var inline = input[i].split(' '),
            fileName = inline[0],
            fileExtension = inline[1],
            memoryMB = Number(inline[2].substr(0, inline[2].length - 2));

        if(!result[fileExtension]){
            result[fileExtension] = {
                files: [],
                memory: 0};
        }

        result[fileExtension].files.push(fileName);
        result[fileExtension].memory += memoryMB;
    }

    function sortingObject(obj){
        var sortedKeys = Object.keys(obj).sort();
        var sortedObj = {};
        for (var i in sortedKeys) {
            if(obj.hasOwnProperty(sortedKeys[i])){
                sortedObj[sortedKeys[i]] = {};
                sortedObj[sortedKeys[i]].files = obj[sortedKeys[i]].files.sort();
                sortedObj[sortedKeys[i]].memory = obj[sortedKeys[i]].memory.toFixed(2);
            }
        }

        return sortedObj;
    }

    var sortedResult = sortingObject(result);

    console.log(JSON.stringify(sortedResult));
}

var data = [
    "sentinel .exe 15MB",
    "zoomIt .msi 3MB",
    "skype .exe 45MB",
    "trojanStopper .bat 23MB",
    "kindleInstaller .exe 120MB",
    "setup .msi 33.4MB",
    "winBlock .bat 1MB"

];

solve(data);