import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // Create a new employee
  addEmployee(emp: Employee) {
    let empList = this.getAllEmployees();
    emp.id = empList.length + 1; // Auto-increment ID
    empList.push(emp);
    localStorage.setItem('empData', JSON.stringify(empList));
  }

  // Read all employees
  getAllEmployees(): Employee[] {
    const data = localStorage.getItem('empData');
    return data ? JSON.parse(data) : [];
  }

  // Delete employee
  deleteEmployee(id: number) {
    let empList = this.getAllEmployees();
    const index = empList.findIndex(e => e.id === id);
    if (index > -1) {
      empList.splice(index, 1);
      localStorage.setItem('empData', JSON.stringify(empList));
    }
  }

  // Edit employee
  updateEmployee (emp: Employee) {
    let empList = this.getAllEmployees();

    //Find the index of the employee with the matching ID
    const index = empList.findIndex(e => e.id === emp.id);

    if (index > -1) {
      empList[index] = emp; //replace old data with new data
      localStorage.setItem('empData', JSON.stringify(empList));  //save data to local storage
    }

  }
}
