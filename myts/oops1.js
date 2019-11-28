var Add = /** @class */ (function () {
    function Add() {
    }
    Add.prototype.addData = function () {
        var a, b, c;
        a = 100;
        b = 200;
        c = a + b;
        console.log("a = " + a);
        console.log("b = " + b);
        console.log("add = " + c);
    };
    return Add;
}());
var obj = new Add();
obj.addData();
//console.log(obj)
//console.log(typeof obj)
