import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.model';
import { HttpErrorResponse } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  imports: [MatTableModule,MatIconModule,MatDividerModule,MatButtonModule,RouterLink],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeeService : EmployeeService, private router :Router){
    this.getEmployeeList();
  }

  dataSource:Employee[] = [];
  displayedColumns: string[] = ['employeeId', 'employeeName', 'employeeContactNumber', 'employeeAddress', 'employeeGender','employeeDepartment','employeeSkills', 'edit','delete'];

  ngOnInit(): void {
    console.log("I am ng on in")
  }

  getEmployeeList():void{
    this.employeeService.getEmployee().subscribe(
      {
        next:(res:Employee[]) =>{
          this.dataSource=res;
        },
        error : (err : HttpErrorResponse) =>{
          console.log(err);
        }
      }
    ); 
  }

  deleteEmp(employeeId:number) : void {
    this.employeeService.deleteEmployee(employeeId).subscribe(
      {
        next:(res) => {
          console.log(res);
          this.getEmployeeList();
        },
        error : (err : HttpErrorResponse) => {
          console.log(err);
        }
      }
    )
  }

  updateEmp(employeeId:number) :void{
    this.router.navigate(['/employee', {employeeId:employeeId}]);
  }

}
