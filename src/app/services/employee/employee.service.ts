import { Injectable } from '@angular/core';
import {Http, RequestOptions, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Employee} from './employee';


@Injectable()
export class EmployeeService {

  /**
   * Web api url
   * @type {string}
   */
  private employeeApiUrl = 'api/employees';

  constructor(private http: Http) { }

  /**
   * Returns an Observable of type Employee retrieved via http.get
   * @returns {Observable<Employee>}
   */
  getEmployees(): Observable<Employee[]> {
    return this.http.get(this.employeeApiUrl).map(this.extractData).catch(this.handleError);
  }

  /**
   * Add an employee
   * @param employee
   * @returns {Observable<R>}
   */
  addEmployee(employee: Employee): Observable<Employee> {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});
    return this.http.post(this.employeeApiUrl, employee, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    const url = `${this.employeeApiUrl}/${employee.id}`;
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});
    return this.http.put(url, employee, options)
      .catch(this.handleError);
  }


  removeEmployee(employee: Employee): Observable<void> {
    const url = `${this.employeeApiUrl}/${employee.id}`;
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});
    return this.http.delete(url, options)
      .catch(this.handleError);
  }

  /**
   * Simulates a search on the server with callback function
   * @param searchKey
   * @param searchValue
   * @returns {Observable<Employee[]>}
   */
  search(searchKey: string, searchValue: any) {
    return (searchKey !== '' && searchValue !== '') ? this.http.get(this.employeeApiUrl)
      .map(response => this.searchEmployee(response, searchKey, searchValue))
      .catch(this.handleError) : this.getEmployees();
  }

  /**
   * Extracts data found by http call
   * @param res
   * @returns {}
   */
  private extractData(res: Response): any [] {
    const body = res.json();
    return body.data || {};
  }

    /**
   * Search employee by giving a key and value (searchKey all iniaties a full scale search on all elements)
   * @param res
   * @param searchKey
   * @param searchValue
   * @returns {Array}
   */
  private searchEmployee(res: Response, searchKey: string, searchValue: any): any[] {
    const data = this.extractData(res);
    const foundValues = [];
    const regex = new RegExp(searchValue, 'gi');

    for (const employee of data) {
      /**
       * search for specific key O(n) worst case
       */
      if (employee.hasOwnProperty(searchKey) && employee[searchKey].toLowerCase().match(regex)) {
        foundValues.push(employee);
      } else {
        /**
         * search all keys O(n*n) worst case
         */
        for (const key in employee) {
          if (employee[key].toString().toLowerCase().match(regex)
            && !this.inArray(employee, foundValues)) {
              foundValues.push(employee);
          }
        }
      }
    }
    return foundValues;
  }

  /**
   * Convenience function to search inArray by object
   * @param employee
   * @param array
   * @returns {boolean}
   */
  private inArray(employee: Employee, array: Employee[]) {
    return array.indexOf(employee) > -1;
  }

/**
   * Catches errors when calling http.get
   * @param error
   * @returns {any}
   */
  private handleError(error: Response | any) {
    let errorMessage: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errorMessage = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errorMessage = error.message ? error.message : error.toString();
    }
    console.log(errorMessage);
    return Observable.throw(errorMessage);
  }

}
