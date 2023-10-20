// Prototype is a property of a function that points to an object
// It allows the developer to attach methods or member functions to its objects.
function Reactangle(w, h) {
    this.width = w;
    this.height = h;
}

Reactangle.prototype.area = function() {
    return this.width * this.height;
}

Reactangle.prototype.toString = function() {
    return "[Rectangle " + this.width + "x" + this.height + "]";
}

var r = new Reactangle(2, 3);
console.log(r.area());
console.log(r.toString());
// 6