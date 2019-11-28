var Add = /** @class */ (function () {
    function Add() {
    }
    Add.prototype.addData = function () {
        var ar = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            ar[_i] = arguments[_i];
        }
        var res = 0;
        for (var i = 0; i < ar.length; i++)
            res += ar[i];
        console.log("Result : " + res);
        //console.log("Result : "+ar) 
    };
    return Add;
}());
var obj = new Add();
obj.addData();
obj.addData(10);
obj.addData(10, 20);
obj.addData(10, 20, 30);
obj.addData(10, 20, 30, 40);
obj.addData(10, 20, 30, 40, 50);
