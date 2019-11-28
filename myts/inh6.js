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
    }
    A.prototype.aData = function () {
        console.log("class A member invoked");
    };
    return A;
}());
var B = /** @class */ (function () {
    function B() {
    }
    B.prototype.bData = function () {
        console.log("class B member invoked");
    };
    return B;
}());
var C = /** @class */ (function (_super) {
    __extends(C, _super);
    function C() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    C.prototype.cData = function () {
        console.log("class C member invoked");
    };
    return C;
}(A));
var obj = new C();
obj.aData();
obj.bData();
obj.cData();
