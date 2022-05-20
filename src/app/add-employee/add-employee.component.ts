import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Employee } from '../employee/employee';
import { EmployeeService } from '../employee/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  employee: Employee;

  constructor(
    private service: EmployeeService,
    private router: Router
  ) {

    this.employee = history.state.employee;
    console.log(this.employee);

    this.employeeForm = new FormGroup({
      id: new FormControl(''),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      age: new FormControl(''),
      sex: new FormControl(''),
    });

    if (this.employee) {
      this.employeeForm.setValue(this.employee);
    }
  }

  ngOnInit(): void {
  }

  saveEmployee(): void {
    console.log(this.employeeForm.value);

    this.service.create(this.employeeForm.value).subscribe((employee: Employee) => {
      console.log(employee);
      this.router.navigateByUrl('employees');
     
    }, (error: any) => {
      console.log(error);
    });

  }
}
