var Add = /** @class */ (function () {
    function Add() {
    }
    Add.prototype.setA = function (a) {
        this.a = a;
    };
    Add.prototype.setB = function (b) {
        this.b = b;
    };
    Add.prototype.addData = function () {
        this.c = this.a + this.b;
    };
    Add.prototype.getA = function () {
        return this.a;
    };
    Add.prototype.getB = function () {
        return this.b;
    };
    Add.prototype.getC = function () {
        return this.c;
    };
    return Add;
}());
var obj = new Add();
obj.setA(10);
obj.setB(20);
obj.addData();
console.log("a = " + obj.getA());
console.log("b = " + obj.getB());
console.log("add = " + obj.getC());
