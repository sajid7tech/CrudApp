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

}
