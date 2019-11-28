var Add = /** @class */ (function () {
    function Add() {
    }
    Add.prototype.setAdd = function (a, b) {
        this.a = a;
        this.b = b;
    };
    Add.prototype.addData = function () {
        this.c = this.a + this.b;
    };
    Add.prototype.getAdd = function () {
        return { a: this.a, b: this.b, c: this.c };
    };
    return Add;
}());
var obj = new Add();
obj.setAdd(10, 20);
obj.addData();
var d = obj.getAdd();
console.log("a = " + d.a);
console.log("b = " + d.b);
console.log("add = " + d.c);
