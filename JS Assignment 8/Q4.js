function shape()
{}
shape.prototype.draw = function (){
    console.log("drawing a generic shape.");
};

function circle (radius){
    this.radius = radius;
}
circle.prototype.draw = function(){
    console.log("drawing a circle with redius" + this.radius);
};
function rectangle(width, height){
    this.width = width ;
    this.height = height;
}

rectangle.prototype = Object.create(shape.prototype)

rectangle.prototype.draw = function() {
    console.log("drawing a reactangle with width" + this.width + " and height " + this.height)
};

let  shapes = [new circle(3), new rectangle (4, 6), new circle(5)];

for(let i = 0 ; i < shapes.length; i++){
    shapes[i].draw();
}