var D = /** @class */ (function () {
    function D() {
    }
    D.prototype.aData = function () {
        console.log("interface A member invoked");
    };
    D.prototype.bData = function () {
        console.log("interface B member invoked");
    };
    D.prototype.cData = function () {
        console.log("interface C member invoked");
    };
    D.prototype.dData = function () {
        console.log("class D member invoked");
    };
    return D;
}());
var obj = new D();
obj.aData();
obj.bData();
obj.cData();
obj.dData();
