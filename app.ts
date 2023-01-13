

import { WageEmployee } from "./WageEmployee";
import { SalesePerson } from "./SalesPerson";
import { Company } from "./Company";
import { Employee } from "./Employee";

const employee: WageEmployee = new WageEmployee(123, "Vasya", 2000, "QA",
 10000, 100,50);
 console.log(`1.`, employee.id);
 console.log(`1.`,employee.computeSalary());
 //console.log(wageemployee.id)
 employee.basicSalary = 45000;
 const sales:SalesePerson = new SalesePerson (456, "Nik", 1990, "Commercial",
 14000, 120,75, 222, 55);
 console.log(`2.`, sales.id);
 console.log(`2.`, sales.computeSalary());
 
 const company: Company = new Company([
    new SalesePerson (777, "Zak", 1999, "Marketing",
    15000, 110,95, 111, 66),
    new WageEmployee (111, "Jack", 1995, "QA",
    10000, 125,35),
   // new Employee 
 ]);

 console.log (`3`, company,{});


