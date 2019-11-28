var C = /** @class */ (function () {
    function C() {
    }
    C.prototype.aData = function () {
        console.log("interface A member invoked");
    };
    C.prototype.bData = function () {
        console.log("interface B member invoked");
    };
    C.prototype.cData = function () {
        console.log("class C member invoked");
    };
    return C;
}());
var obj = new C();
obj.aData();
obj.bData();
obj.cData();
