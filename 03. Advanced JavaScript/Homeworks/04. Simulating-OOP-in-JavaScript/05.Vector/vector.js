var Vector = (function(){
    function Vector(dimensions){
        if(!dimensions || dimensions.length === 0){
            throw new Error("A vector must have dimensions.");
        }

        this._dimensions = dimensions;
    }

    function componentsCompatibilityCheck(currVector, otherVector) {
        var currVectorLen = currVector._dimensions.length;
        var otherVectorLen = otherVector._dimensions.length;

        if (!(otherVector instanceof Vector)) {
            throw new Error("A vector can only be added with another vector.");
        }

        if (currVectorLen != otherVectorLen) {
            throw new Error("The vectors have different dimensions.");
        }
    }

    Vector.prototype.toString = function(){
        var result = "(" + this._dimensions.join(", ") + ")";

        return result;
    };

    Vector.prototype.add = function(other){
        componentsCompatibilityCheck(this, other);

        var resultDimensions = [];
        var lengthDimensions = this._dimensions.length;

        for(var i = 0; i < lengthDimensions; i++){
            resultDimensions.push(this._dimensions[i] + other._dimensions[i]);
        }

        return new Vector(resultDimensions);
    };


    Vector.prototype.subtract = function(other){
        componentsCompatibilityCheck(this, other);

        var resultDimensions = [];
        var lengthDimensions = this._dimensions.length;

        for(var i = 0; i < lengthDimensions; i++){
            resultDimensions.push(this._dimensions[i] - other._dimensions[i]);
        }

        return new Vector(resultDimensions);
    };


    Vector.prototype.dot = function(other){
        componentsCompatibilityCheck(this, other);

        var dotResult = 0;
        var lengthDimensions = this._dimensions.length;

        for(var i = 0; i < lengthDimensions; i++){
            dotResult += this._dimensions[i] * other._dimensions[i];
        }

        return dotResult;
    };

    Vector.prototype.norm = function(){
        var normResult = 0;
        var lengthDimensions = this._dimensions.length;

        for(var i = 0; i < lengthDimensions; i++){
            normResult += this._dimensions[i] * this._dimensions[i];
        }

        return Math.sqrt(normResult);
    };

    return Vector;
})();


var a = new Vector([1, 2, 3]);
var b = new Vector([4, 5, 6]);
var c = new Vector([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
console.log(a.toString());
console.log(c.toString());

// The following throw errors
//var wrong = new Vector();
//var anotherWrong = new Vector([]);

a = new Vector([1, 2, 3]);
b = new Vector([4, 5, 6]);
c = new Vector([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
var result = a.add(b);
console.log(result.toString());

//a.add(c); // Error

a = new Vector([1, 2, 3]);
b = new Vector([4, 5, 6]);
c = new Vector([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
result = a.subtract(b);
console.log(result.toString());

//a.subtract(c); // Error

a = new Vector([1, 2, 3]);
b = new Vector([4, 5, 6]);
c = new Vector([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
result = a.dot(b);
console.log(result.toString());

//a.dot(c); // Error

a = new Vector([1, 2, 3]);
b = new Vector([4, 5, 6]);
c = new Vector([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
console.log(a.norm());
console.log(b.norm());
console.log(c.norm());
console.log(a.add(b).norm());





