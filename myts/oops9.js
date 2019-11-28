var Employee = /** @class */ (function () {
    function Employee() {
        this.eno = 0;
        this.enm = 'NULL';
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
var obj = new Employee();
obj.getEmployee();
obj.setEmployee(1001, 'chiku');
obj.getEmployee();
