import {Injectable, OnDestroy} from '@angular/core';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Employee } from './employee.model';
import {Subject} from 'rxjs/Subject';
import {Helper} from '../helper';



@Injectable()
export class EmployeeService implements OnDestroy {

  /**
   * Web api url
   * @type {string}
   */
  private employeeApiUrl = 'api/employees';
  private employeeList = new Subject<any[]>();
  public employeeList$ = this.employeeList.asObservable();
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  /**
   * Returns an Observable of type Employee retrieved via http.get
   *
   */
  getEmployees() {
    return this.http.get(this.employeeApiUrl).map(Helper.extractData).catch(Helper.handleError)
      .subscribe(e => { this.employeeList.next(e); });
  }

  /**
   * Add an employee by calling http.post
   * @param employee
   * @returns {Observable<Employee>}
   */
  addEmployee(employee: Employee) {
    const options = new RequestOptions({headers: this.headers});
    this.http.post(this.employeeApiUrl, employee, options)
      .map(Helper.extractData)
      .catch(Helper.handleError).subscribe(() => this.getEmployees());
  }

  /**
   * Update an employee by calling http.put
   * @param employee
   */
  updateEmployee(employee: Employee) {
    const url = `${this.employeeApiUrl}/${employee.id}`;
    const options = new RequestOptions({headers: this.headers});
    return this.http.put(url, employee, options)
      .catch(Helper.handleError);
  }

  /**
   * Remove an employee by calling http.delete
   * @param employee
   */
  removeEmployee(employee: Employee) {
    const url = `${this.employeeApiUrl}/${employee.id}`;
    const options = new RequestOptions({headers: this.headers});
    return this.http.delete(url, options)
      .catch(Helper.handleError);
  }

  /**
   * Simulates a search on the server with callback function
   * @param searchKey
   * @param searchValue
   * @returns {Observable<Employee[]>}
   */
  search(searchKey: string, searchValue: any)  {
    (searchKey !== '' && searchValue !== '') ?
       this.http.get(this.employeeApiUrl)
         .map(response => this.searchEmployee(response, searchKey, searchValue))
         .catch(Helper.handleError).subscribe(e => this.employeeList.next(e))
     : this.getEmployees();
  }


  /**
   * QuickSort
   * @param array
   * @param key
   * @param descending
   */
  sortObjects (array, key, descending: boolean)  {

    for (let i = 0; i < array.length; i++) {
      const currVal = array[i][key];
      const currElem = array[i];
      let j = i - 1;
      while ((j >= 0) && Helper.sortDirection(array[j][key], currVal, descending)) {
        array[j + 1] = array[j];
        j--;
      }
      array[j + 1] = currElem;
    }
    this.employeeList.next(array);
  }


  /**
   * Search employee by giving a key and value (searchKey all iniaties a full scale search on all elements)
   * @param res
   * @param searchKey
   * @param searchValue
   * @returns {Array}
   */
  private searchEmployee(res: Response, searchKey: string, searchValue: any): Employee[] {
    const data = Helper.extractData(res);
    const foundValues = [];
    const regex = new RegExp(searchValue, 'gi');

    data.filter(employee => {
      // search all keys indiscriminately
      if (searchKey === 'all') {
        const keyArr: any[] = Object.keys(employee);
        keyArr.forEach((key: any) => {
          if (employee[key].toString().match(regex) && !Helper.inArray(employee, foundValues)) {
            foundValues.push(employee);
          }
        });
      } else if (employee.hasOwnProperty(searchKey) && employee[searchKey].toLowerCase().match(regex)) {
        foundValues.push(employee);
      }
    });

    return foundValues;
  }

  ngOnDestroy() {
    this.employeeList.subscribe();
  }



}
