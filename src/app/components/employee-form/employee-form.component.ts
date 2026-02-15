import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../model/employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  empObj: Employee = new Employee();
  isEdit: boolean = false;

  constructor(
    private empService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      const employees = this.empService.getAllEmployees();
      const employee = employees.find(e => e.id === +id);
      if (employee) {
        this.empObj = Object.assign({}, employee);
      }
    }
  }

  addEmployee() {
    this.empService.addEmployee(this.empObj);
    alert('Employee Added Successfully');
    this.router.navigate(['/']);
  }

  updateEmployee() {
    this.empService.updateEmployee(this.empObj);
    alert('Employee Updated Successfully');
    this.router.navigate(['/']);
  }

  resetForm() {
    this.empObj = new Employee();
    this.isEdit = false;
  }
}
