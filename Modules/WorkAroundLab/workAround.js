//import {Employee, cadre, tax, benefits, bonus, reimbursement} from './employee.js';
/*
const Employee = require('Employee');
const cadre = require('cadre');
const tax = require('tax');
const benefits = require('benefits');
const bonus = require('bonus');
const reimbursement = require('reimbursement');
*/
const Employee = require('./employee');


function getEmployeeInformation(inputSalary) {
    Employee.salary = inputSalary;
    console.log('Cadre: ' + Employee.getCadre());
    console.log('Tax: ' + calculateTax());
    console.log('Benefits: ' + getBenefits());
    console.log('Bonus: ' + calculateBonus());
    console.log('Reimbursement Eligibility: ' + reimbursementEligibility() + '\n');
  }
  
  getEmployeeInformation(10000);
  getEmployeeInformation(50000);
  getEmployeeInformation(100000);
  
  