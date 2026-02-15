import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../../model/employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  empList: Employee[] = [];

  constructor(
    private empService: EmployeeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllEmployee();
  }

  getAllEmployee() {
    this.empList = this.empService.getAllEmployees();
  }

  editEmployee(emp: Employee) {
    this.router.navigate(['/employee-form', emp.id]);
  }

  deleteEmployee(emp: Employee) {
    this.empService.deleteEmployee(emp.id);
    alert('Employee Deleted');
    this.getAllEmployee();
  }
}
