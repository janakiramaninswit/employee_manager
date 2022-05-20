import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { API_URL } from '../app.constants';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url: string = `${ API_URL }/employees`;

  constructor(
    private http: HttpClient
  ) { }

    create(employee: Employee): any {
      return this.http.post<Employee[]>(this.url, employee);
    }

    getAll(): Observable<Employee[]> {
      return this.http.get<Employee[]>(this.url);
    }

    get(empCode: string): Observable<Employee> {

      return this.http.get<Employee>(this.url + "/" + empCode);
    }

    delete(empCode: string): any {
      return this.http.delete<Employee[]>(this.url + "/" + empCode);
    }

    update(employee: Employee): any {
      return this.http.put<Employee[]>(this.url, employee);
    }
}
