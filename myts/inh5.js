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
        console.log("class A constructor invoked");
    }
    A.prototype.aData = function () {
        console.log("class A member invoked");
    };
    return A;
}());
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B() {
        var _this = _super.call(this) || this;
        console.log("class B constructor invoked");
        return _this;
    }
    B.prototype.bData = function () {
        console.log("class B member invoked");
    };
    return B;
}(A));
var obj = new B();
obj.aData();
obj.bData();
