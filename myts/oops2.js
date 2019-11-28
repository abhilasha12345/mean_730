var Add = /** @class */ (function () {
    function Add() {
    }
    Add.prototype.getData = function () {
        this.a = 100;
        this.b = 200;
    };
    Add.prototype.addData = function () {
        this.c = this.a + this.b;
    };
    Add.prototype.showData = function () {
        console.log("a = " + this.a);
        console.log("b = " + this.b);
        console.log("add = " + this.c);
    };
    return Add;
}());
var obj = new Add();
obj.getData();
obj.addData();
obj.showData();
console.log(obj);
console.log(typeof obj);
