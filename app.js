"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WageEmployee_1 = require("./WageEmployee");
const SalesPerson_1 = require("./SalesPerson");
const Company_1 = require("./Company");
const employee = new WageEmployee_1.WageEmployee(123, "Vasya", 2000, "QA", 10000, 100, 50);
console.log(`1.`, employee.id);
console.log(`1.`, employee.computeSalary());
//console.log(wageemployee.id)
employee.basicSalary = 45000;
const sales = new SalesPerson_1.SalesePerson(456, "Nik", 1990, "Commercial", 14000, 120, 75, 222, 55);
console.log(`2.`, sales.id);
console.log(`2.`, sales.computeSalary());
const company = new Company_1.Company([
    new SalesPerson_1.SalesePerson(777, "Zak", 1999, "Marketing", 15000, 110, 95, 111, 66),
    new WageEmployee_1.WageEmployee(111, "Jack", 1995, "QA", 10000, 125, 35),
    // new Employee 
]);
console.log(`3`, company, {});
//# sourceMappingURL=app.js.map