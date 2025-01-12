import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-employee-list',
  imports: [],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeeService : EmployeeService){
    this.getEmployeeList();
  }
  ngOnInit(): void {
    console.log("I am ng on in")
  }

  getEmployeeList():void{
    this.employeeService.getEmployee().subscribe(
      {
        next:(res:Employee[]) =>{
          console.log(res);
        },
        error : (err : HttpErrorResponse) =>{
          console.log(err);
        }
      }
    );
  }
}
