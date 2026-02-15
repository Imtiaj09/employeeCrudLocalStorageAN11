import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  empObj: Employee = new Employee(); // For the form input
  empList: Employee[] = [];          // For the table list
  isEdit: boolean = false;

  constructor(private empService: EmployeeService) { }

  ngOnInit(): void {
    this.getAllEmployee();
  }

  getAllEmployee() {
    this.empList = this.empService.getAllEmployees();
  }

  addEmployee() {
    this.empService.addEmployee(this.empObj);
    alert('Employee Added Successfully');
    this.resetForm(); // FIX 1: Fixed spelling (was resetFrom)
  }

  editEmployee(emp: Employee) {
    this.isEdit = true;
    this.empObj = Object.assign({}, emp);
  }

  updateEmployee() {
    this.empService.updateEmployee(this.empObj);
    alert('Employee Updated Successfully');
    this.resetForm();
  }

  deleteEmployee(emp: Employee) {
    this.empService.deleteEmployee(emp.id);
    alert('Employee Deleted');
    this.getAllEmployee();
  }

  // FIX 2: Moved this function INSIDE the class
  resetForm() {
    this.empObj = new Employee();
    this.isEdit = false;
    this.getAllEmployee();
  }

}
