var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var A = /** @class */ (function () {
    function A() {
        this.a = 100;
    }
    A.prototype.aData = function () {
        console.log("class A member invoked");
    };
    return A;
}());
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.b = 200;
        return _this;
    }
    B.prototype.bData = function () {
        console.log("a = " + this.a);
        console.log("b = " + this.b);
        console.log("class B member invoked");
    };
    return B;
}(A));
var obj = new B();
obj.aData();
obj.bData();
console.log("a outside class= " + obj.a);
