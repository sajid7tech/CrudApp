import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient : HttpClient) { }

  url = "http://localhost:9090";

  public saveEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(`${this.url}/save/employee` , employee);
  }

  public getEmployee() :Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.url}/get/employees`)
  }

  public deleteEmployee(employeeId:number) : Observable<Employee> {
    return this.httpClient.delete<Employee>(`${this.url}/delete/employee/${employeeId}`);
  } 

  public getEmployeeByID(employeeId:number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.url}/get/employee/${employeeId}`);
  }

  public updateEmployee(employee : Employee) :Observable<Employee>{
    return this.httpClient.put<Employee>(`${this.url}/update/employee`,employee);
  }

}
