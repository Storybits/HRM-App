import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Employee} from '../../../services/employee/employee.model';
import {EmployeeService} from '../../../services/employee/employee.service';
import {PaginatorService} from '../../../services/paginator/paginator.service';
import {ModalDialogComponent} from '../../modal-dialog/modal-dialog.component';
import {ModalService} from '../../../services/modal/modal.service';
import {Subscription} from 'rxjs/Subscription';
import {UserService} from '../../../services/user/user.service';
import {Helper} from '../../../services/helper';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  providers: [ EmployeeService, PaginatorService, ModalService, UserService ],
  styleUrls: ['../../../../../node_modules/admin-lte/plugins/datatables/dataTables.bootstrap.css']
})
export class EmployeeListComponent implements OnInit, OnDestroy {

  // some static variables
  public pageTitle: string = 'Employee list';
  public pageDescription: string = 'A list of all employees';
  public currentLevel: [{}] = [ {'name': 'Employee', 'class': ''}, {'name': 'list', 'class': 'active'}];

  // Employee list and object initializers
  private employees: Employee[];
  private employee = new Employee();

  // subscriptions
  private delSub = new Subscription();
  private editSub = new Subscription();
  private employeeSub = new Subscription();

  public searchFilter = { text: 'All fields', filter: 'all'};
  public isSearching: boolean = false; // true when search is ongoing
  pager: any = {}; // // pager object
  pagedItems: any[]; // paged items used for paginator = limited set of employees
  private sort = { column: 'id', descending: false}; // storing sort values

  // Dialog windows
  @ViewChild('createDialog') private createDialogModal: ModalDialogComponent;
  @ViewChild('deleteDialog') private deleteDialogModal: ModalDialogComponent;

  constructor(private employeeService: EmployeeService,
              private paginatorService: PaginatorService,
              private modalService: ModalService) {

    // subscription of observable delete object
    this.delSub = this.modalService.objectDelete$.subscribe(
      employee => this.deleteEmployee(employee)
    );

    // subscription of observable saveObject
    this.editSub = this.modalService.objectSave$.subscribe(
      employee => this.editEmployee(employee));

    // subscription of observable employees
    this.employeeSub = this.employeeService.employeeList$.subscribe(
      e => { this.employees = <Employee[]>e; this.setPage(this.pager.currentPage); }
    );

  }

  ngOnInit() {
    this.getEmployees();
  }

  /**
   * Get an employee
   * @param page
   */
  getEmployees(page?: number): void {
    page = (isNaN(page)) ? 1 : page;
    this.employeeService.getEmployees();
    this.pager.currentPage = page;
  }

  /**
   * Search an employee
   * @param term
   */
  searchEmployee(term: string): void {
    this.isSearching = true;
    this.employeeService.search(this.searchFilter.filter, term);
  }

  /**
   * Edit an employee
   * @param employee
   */
  editEmployee(employee: Employee): void {
    // add new Employee
    if (Helper.isEmpty(employee.id)) {
      employee.id = undefined;
      this.employeeService.addEmployee(employee);
    } else {
      // update employee
      this.employeeService.updateEmployee(employee).subscribe(
        () => {
          this.employees = this.employees.map(e => {return (e.id === employee.id) ? employee : e; });
          this.setPage(this.pager.currentPage);
        }
      );
    }
  }

  /**
   * Delete an employee
   * @param employee
   */
  deleteEmployee(employee: Employee): void {
    this.employeeService.removeEmployee(employee).subscribe(
      () => {
        this.employees = this.employees.filter(e => e.id !== employee.id);
        this.pagedItems = this.pagedItems.filter(e => e.id !== employee.id);
      }
    );
  }

  /**
   * Open up a dialog window
   * @param employee
   * @param action: default = create/edit dialog
   */
  openDialog(employee: Employee = new Employee(), action: string = 'create') {
    this.modalService.sendObject(employee);
    if (action === 'delete') {
      this.deleteDialogModal.show();
    } else  {
      this.createDialogModal.show();
    }
  }

 /**
   * Initiate sorting
   * @param columnName
   */
  sortEmployees(columnName: string): void {
    if (this.sort.column === columnName) {
      this.sort.descending = !this.sort.descending;
    } else {
      this.sort.column = columnName;
      this.sort.descending = false;
    }

    this.employeeService.sortObjects(this.employees, columnName, this.sort.descending);

  }

  /**
   * Sets the page for the paginator
   * @param page
   */
  setPage(page: number = 1): void {
    this.isSearching = false;
    page = (page < 1 || page > this.pager.totalPages) ? 1 : page;
    // get pager object from service
    this.pager = this.paginatorService.getPager(this.employees.length, page);
    // get current page of items
    this.pagedItems = this.employees.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  /**
   * Set the selected class for sorting
   * @param columnName
   * @returns {any}
   */
  selectedClass(columnName): string {
    const styleClass = 'hidden-xs ';
    if (columnName === this.sort.column) {
      return styleClass + this.sort.descending ? 'sorting_desc' : 'sorting_asc';
    }
    return styleClass + ' sorting';
  }

  /**
   * Set search class when searching
   * @returns {[string,string]|[string]}
   */
  getSearchButtonClass(): string[] {
    return (this.isSearching) ? ['fa-spinner', 'fa-spin'] : ['fa-search'];
  }

  /**
   * Unsubscribing subscriptions clearing memory
   */
  ngOnDestroy() {
    this.editSub.unsubscribe();
    this.delSub.unsubscribe();
    this.employeeSub.unsubscribe();
  }




}
