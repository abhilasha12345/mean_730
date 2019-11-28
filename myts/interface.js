{
}
var B = /** @class */ (function () {
    function B() {
    }
    B.prototype.aData = function () {
        console.log("interface A member invoked");
    };
    B.prototype.bData = function () {
        console.log("class B member invoked");
    };
    return B;
}());
var obj = new B();
obj.aData();
obj.bData();
