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
import { FormsModule } from '@angular/forms';

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
  ],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent implements OnInit {
  employee: Employee = {
    employeeId: 0,
    employeeName: '',
    employeeContactNumber: '',
    employeeAddress: '',
    employeeGender: '',
    employeeDepartment: '',
    employeeSkills: '',
  };

  constructor() {}

  skills: any = [];

  ngOnInit(): void {
    console.log(this.employee)
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
}
