import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { Employee } from '../employee.model';
import { FormsModule, NgForm } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDividerModule,
    MatButtonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent implements OnInit {
  // employee: Employee = {
  //   employeeId: 0,
  //   employeeName: '',
  //   employeeContactNumber: '',
  //   employeeAddress: '',
  //   employeeGender: '',
  //   employeeDepartment: '',
  //   employeeSkills: '',
  // };

  isCreatedEmployee : boolean = true;

  employee : any;

  constructor(private employeeServive : EmployeeService, private router:Router , private activeRoute : ActivatedRoute) {

  }

  skills: any = [];

  ngOnInit(): void {
    this.employee = this.activeRoute.snapshot.data['employee'];
    console.log(this.employee);
    if(this.employee && this.employee.employeeId>0){
      this.isCreatedEmployee = false;
      if(this.employee.employeeSkills != ''){
        this.skills = [];
        this.skills = this.employee.employeeSkills.split(',');
      }
    }else{
      this.isCreatedEmployee = true;
    }
  }

  selectGender(gender: string): void {
    this.employee.employeeGender = gender;
  }

  onSkillSelect(event: any): void {
    console.log(event);
    if (event.checked) {
      this.skills.push(event.source.value);
    } else {
      this.skills.forEach((item: string) => {
        if (item == event.source.value) {
          let index = this.skills.indexOf(item);
          this.skills.splice(index,1);
        }
      });
    }
    this.employee.employeeSkills=this.skills.toString();
  }
  
  print() : void {
    console.log(this.employee);
  }

  checkSkills(skill:string){
    return this.employee.employeeSkills != null && this.employee.employeeSkills.includes(skill);
  }

  saveEmployee(employeeForm:NgForm): void{
    if(this.isCreatedEmployee){
      this.employeeServive.saveEmployee(this.employee).subscribe(
        {
          next : (res:Employee) =>{
            console.log(res);
            employeeForm.reset();
            this.employee.employeeGender='';
            this.skills= [];
            this.employee.employeeSkills='';
            this.router.navigate(['/employee-list']);
          },
          error:(err:HttpErrorResponse) => {
            console.log(err);
          }
        }
      );
    }else{
      this.employeeServive.updateEmployee(this.employee).subscribe(
        {
          next : (res : Employee) => {
            this.router.navigate(['/employee-list']);
          },
          error : (err : HttpErrorResponse) => {
            console.log(err);
          }
        }
      )
    }
    
  }

}
