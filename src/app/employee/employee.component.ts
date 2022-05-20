import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Employee } from './employee';
import { Router, NavigationBehaviorOptions } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[] = [];
  employee!: Employee;

  constructor(
    private service: EmployeeService,
    private router: Router
  ) {
    this.getEmployees();
  }

  getEmployees() {
    this.service.getAll().subscribe((employees: Employee[]) => {
      console.log("employees" + employees);
      this.employees = employees;
      
    }, (error: any) => {
        alert("Failure");
        console.log(error);
      });
  }

  getEmployee(id: string) {
    this.service.get(id).subscribe((employee: Employee) => {

      this.router.navigateByUrl('employees/create', {
        state: { employee: employee }
      });
    }, (error: any) => {
      alert("Failure");
      console.log(error);
    });
  }

  cancel() {
    console.log("Cancel pressed");
  }

  createEmployee() {
    this.router.navigateByUrl('employees/create');
  }

  deleteEmployee(id: string) {
   
    this.service.delete(id).subscribe((employee: Employee) => {
      for (let i = 0; i < this.employees.length; i++) {
        if (this.employees[i].id == id) {
          this.employees.splice(i, 1);
          break;
        }
      }
      
    }, (error: any) => {
      console.log(error);
    });
    
  }

  ngOnInit(): void {
  }

}
