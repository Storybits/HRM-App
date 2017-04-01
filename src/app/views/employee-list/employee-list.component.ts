import {Component, OnInit, ViewChild} from '@angular/core';
import {Employee} from '../../services/employee/employee';
import {EmployeeService} from '../../services/employee/employee.service';
import {Subject} from 'rxjs/Subject';
import {PaginatorService} from '../../services/paginator/paginator.service';
import {ModalDialogComponent} from '../modal-dialog/modal-dialog.component';
import {ModalService} from '../../services/modal/modal.service';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute, Router} from '@angular/router';



@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  providers: [ EmployeeService, PaginatorService, ModalService ],
  styleUrls: ['../../../../node_modules/admin-lte/plugins/datatables/dataTables.bootstrap.css']
})
export class EmployeeListComponent implements OnInit {

  private pageTitle: string;
  private pageDescription: string;
  private currentLevel: {}[];
  private employees: Employee[];
  private errorMessage: string;
  private searchTermStream = new Subject<string>();
  @ViewChild(ModalDialogComponent)
  private modal: ModalDialogComponent;
  private employee = new Employee();
  private delSub = new Subscription();
  private editSub = new Subscription();

  // array of all items to be paged
  private allItems: any[];
  // pager object
  pager: any = {};
  // paged items
  pagedItems: any[];


  constructor(private employeeService: EmployeeService, private paginatorService: PaginatorService,
  private modalService: ModalService, private router: Router) {
    this.delSub = this.modalService.objectDelete$.subscribe(
      employee => this.deleteEmployee(employee)
    );

    this.editSub = this.modalService.objectSave$.subscribe(
      employee => this.editEmployee(employee)
    );
  }

  ngOnInit() {
    this.pageTitle = 'Employee list';
    this.pageDescription = 'A list of all employees';
    this.currentLevel = [ {'name': 'Employee', 'class': ''}, {'name': 'list', 'class': 'active'}];
    this.getEmployees();
  }

  search(term: string) {
    this.searchTermStream.next(term);
      this.employeeService.search('all', term).subscribe(
        employees => { this.employees = employees; this.allItems = employees; this.setPage(1); },
        error => this.errorMessage = <any>error
      );


  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe(
      employees => { this.employees = employees; this.allItems = employees; this.setPage(1); },
      error => this.errorMessage = <any>error
    );
  }



  editEmployee(employee: Employee) {
    if (this.isEmpty(employee.id)) {
      console.log('adding new employee ' + employee.last_name);
      employee.id = undefined;
      this.employeeService.addEmployee(employee)
        .subscribe(
          newEmployee => this.employees.push(newEmployee),
          error => this.errorMessage = <any>error,
          () => this.ngOnInit()
        );
    }
    else {
      console.log('editing employee "' + employee.id + '"');
      this.employeeService.updateEmployee(employee).subscribe(
        () => this.router.navigate(['/employees'])
      );
    }
  }

  deleteEmployee(employee: Employee) {
    console.log('Deleting employee ' + employee.id);

    this.employeeService.removeEmployee(employee).subscribe(
      error => this.errorMessage = <any>error,
      () =>  {
        this.employees.filter(h => h !== employee);

      }
    );

  }

  isEmpty(val) {
    return (val === undefined || val == null  || val.length <= 0) ? true : false;
  }




  sortEmployees(key: string) {

  }

  editEmployeeDialog(employee: Employee) {
    this.modalService.sendObject(employee);
    this.modal.show();
  }

  deleteEmployeeDialog(employee: Employee) {
    this.modalService.sendObject(employee);
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }
    // get pager object from service
    this.pager = this.paginatorService.getPager(this.allItems.length, page);
    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }



}
