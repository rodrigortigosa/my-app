import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  /* template: `
    <p>an employee would be here</p>
  `, */
  styleUrls: ['./employee.component.css']
 /*  styles: ["p{color: red};"] */
})
export class EmployeeComponent {
  name = "Rodrigo";
  surname = "Ortigosa";
  age = 24;
  company = "SMS Sudamérica";
}
