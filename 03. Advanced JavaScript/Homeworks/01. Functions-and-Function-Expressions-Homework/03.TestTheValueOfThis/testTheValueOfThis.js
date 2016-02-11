function testContext() {
    console.log(this);
}

console.log('Global context:');
testContext();

function outer(){
    function inner(){
        testContext();
    }

    inner();
}

console.log("From within another function:");
outer();

var obj = {
    info: "the value of \"this\" is set to the object the function was called from."
};

console.log("From within an object:");
testContext.call(obj);

var context = new testContext();