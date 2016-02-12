if (!Object.create) {
    Object.create = function (proto) {
        function F() {}
        F.prototype = proto;
        return new F();
    };
}

if(!Object.prototype.extends){
    Object.prototype.extends = function(parent){
        this.prototype = Object.create(parent.prototype);
        this.prototype.constructor = this;
    }
}

var shapeModule = (function(){
    var Shape = (function(){
        function Shape(x, y, color){
            this._x = x;
            this._y = y;
            this._color = color;
        }

        Shape.prototype.toString = function(){
            return 'Color: ' + this._color + ', Point A (x: ' + this._x + ', y: ' + this._y + ')';
        };

        return Shape;
    }());

    var Circle = (function(){
        function Circle(x, y, color, radius){
            Shape.call(this, x, y, color);
            this._radius = radius;
        }

        Circle.extends(Shape);

        Circle.prototype.toString = function() {
            return 'Shape: Circle, ' + Shape.prototype.toString.call(this) + ', Radius: ' + this._radius;
        };

        return Circle;
    })();

    var Rectangle = (function(){
        function Rectangle(x, y, color, width, height){
            Shape.call(this, x, y, color);
            this._width = width;
            this._height = height;
        }

        Rectangle.extends(Shape);

        Rectangle.prototype.toString = function(){
          return 'Shape: Rectangle, ' + Shape.prototype.toString.call(this) +
              ', Width: ' + this._width + ', Height: ' + this._height;
        };

        return Rectangle;
    })();

    var Triangle = (function(){
        function Triangle(x, y, color, bX, bY, cX, cY){
            Shape.call(this, x, y, color);
            this._bX = bX;
            this._bY = bY;
            this._cX = cX;
            this._cY = cY;
        }

        Triangle.extends(Shape);

        Triangle.prototype.toString = function(){
            return 'Shape: Triangle, ' + Shape.prototype.toString.call(this) +
                    'Point B (x: ' + this._bX + ' , y: ' + this._bY + ')' +
                    ', Point C (x: ' + this._cX + ' , y: ' + this._cY + ')'
        };

        return Triangle;
    })();

    var Line = (function(){
        function Line(x, y, color, bX, bY){
            Shape.call(this, x, y, color);
            this._bX = bX;
            this._bY = bY;
        }

        Line.extends(Shape);

        Line.prototype.toString = function(){
            return 'Shape: Line, ' + Shape.prototype.toString.call(this) +
                ', Point B (x: ' + this._bX + ', y: ' + this._bY + ')';
        };

        return Line;
    })();

    var Segment = (function() {
        function Segment(x, y, color, bX, bY) {
            Shape.call(this, x, y, color);
            this._bX = bX;
            this._bY = bY;
        }

        Segment.extends(Shape);

        Segment.prototype.toString = function() {
            return 'Shape: Segment, ' + Shape.prototype.toString.call(this) +
                ', Point B (x: ' + this._bX + ', y: ' + this._bY + ')';
        };

        return Segment;
    }());

    return {
        Circle: Circle,
        Rectangle: Rectangle,
        Triangle: Triangle,
        Segment: Segment,
        Line: Line
    };
})();


var circle = new shapeModule.Circle(10, 20, '#7F7F7E', 25);
var rectangle = new shapeModule.Rectangle(15, 18, '#996666', 20, 20);
var triangle = new shapeModule.Triangle(5, 5, '#865AB3', 7, 10, 20, 15);
var line = new shapeModule.Line(30, 40, '#9D9892', 80, 100);
var segment = new shapeModule.Segment(25, 25, '#F0E3D3', 40, 40);
console.log(circle.toString());
console.log(rectangle.toString());
console.log(triangle.toString());
console.log(line.toString());
console.log(segment.toString());