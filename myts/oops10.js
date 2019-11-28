var Employee = /** @class */ (function () {
    function Employee(eno, enm) {
        this.eno = eno;
        this.enm = enm;
    }
    Employee.prototype.setEmployee = function (eno, enm) {
        this.eno = eno;
        this.enm = enm;
    };
    Employee.prototype.getEmployee = function () {
        console.log("Eno : " + this.eno);
        console.log("Enm : " + this.enm);
    };
    return Employee;
}());
var obj = new Employee(0, 'null');
obj.getEmployee();
obj.setEmployee(1001, 'chiku');
obj.getEmployee();
