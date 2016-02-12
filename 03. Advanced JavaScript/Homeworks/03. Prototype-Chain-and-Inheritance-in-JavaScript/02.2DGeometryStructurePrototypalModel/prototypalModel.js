Object.prototype.extends = function(properties) {
    function f() {}
    var prop;
    f.prototype = Object.create(this);
    for (prop in properties) {
        f.prototype[prop] = properties[prop];
    }

    f.prototype._super = this;
    return new f();
};

var Shapes = (function(){
    var shape = {
        init: function init(x, y, color){
            this._x = x;
            this._y = y;
            this._color = color;
            return this;
        },

        toString: function toString(){
            return 'Color: ' + this._color + ', Point: (x:' + this._x + ', y: ' + this._y + ')';
        }
    };

    var circle = shape.extends({
        init: function init(x, y, color, radius){
            this._super.init.call(this, x, y, color);
            this._radius = radius;
            return this;
        },

        toString: function toString(){
            return 'Shape: Circle, ' + this._super.toString.call(this) + ', Radius: ' + this._radius;
        }
    });

    var rectangle = shape.extends({
        init: function init(x, y, color, width, height) {
            this._super.init.call(this, x, y, color);
            this._width = width;
            this._height = height;
            return this;
        },

        toString: function toString() {
            return 'Shape: Rectangle, ' + this._super.toString.call(this) +
                ', Width: ' + this._width + ', Height: ' + this._height;
        }
    });

    var triangle = shape.extends({
        init: function init(x, y, color, bX, bY, cX, cY) {
            this._super.init.call(this, x, y, color);
            this._bX = bX;
            this._bY = bY;
            this._cX = cX;
            this._cY = cY;
            return this;
        },

        toString: function toString() {
            return 'Shape: Triangle, ' + this._super.toString.call(this) +
                'Point B (x: ' + this._bX + ' , y: ' + this._bY + ')' +
                ', Point C (x: ' + this._cX + ' , y: ' + this._cY + ')';
        }
    });

    var line = shape.extends({
        init: function init(x, y, color, bX, bY) {
            this._super.init.call(this, x, y, color);
            this._bX = bX;
            this._bY = bY;
            return this;
        },

        toString: function toString() {
            return 'Shape: Line, ' + this._super.toString.call(this) +
                ', Point B (x: ' + this._bX + ', y: ' + this._bY + ')';
        }
    });

    var segment = shape.extends({
        init: function init(x, y, color, bX, bY) {
            this._super.init.call(this, x, y, color);
            this._bX = bX;
            this._bY = bY;
            return this;
        },

        toString: function toString() {
            return 'Shape: Segment, ' + this._super.toString.call(this) +
                ', Point B (x: ' + this._bX + ', y: ' + this._bY + ')';
        }
    });

    return {
        circle: circle,
        rectangle: rectangle,
        triangle: triangle,
        segment: segment,
        line: line
    };
})();

var circle = Object.create(Shapes.circle).init(10, 20, '#7F7F7E', 25);
var rectangle = Object.create(Shapes.rectangle).init(15, 18, '#996666', 20, 20);
var triangle = Object.create(Shapes.triangle).init(5, 5, '#865AB3', 7, 10, 20, 15);
var line = Object.create(Shapes.line).init(30, 40, '#9D9892', 80, 100);
var segment = Object.create(Shapes.segment).init(25, 25, '#F0E3D3', 40, 40);
console.log(circle.toString());
console.log(rectangle.toString());
console.log(triangle.toString());
console.log(line.toString());
console.log(segment.toString());