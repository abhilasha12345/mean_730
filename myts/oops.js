var Demo = /** @class */ (function () {
    function Demo() {
    }
    Demo.prototype.demoData = function () {
        console.log("class Demo method demoData invoked");
    };
    Demo.prototype.demoData1 = function () {
        console.log("class Demo method  demoData1 invoked");
    };
    return Demo;
}());
var obj = new Demo();
obj.demoData();
obj.demoData1();
