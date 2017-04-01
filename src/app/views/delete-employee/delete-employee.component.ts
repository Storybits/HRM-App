import {Component, OnDestroy} from '@angular/core';
import {Employee} from '../../services/employee/employee';
import {ModalService} from '../../services/modal/modal.service';
import {Subscription} from 'rxjs/Subscription';


@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html'
})
export class DeleteEmployeeComponent implements OnDestroy {


  private subscription = new Subscription;
  private employee =  new Employee();
  announced = false;

  constructor(private modalService: ModalService) {
    this.subscription = this.modalService.objectSend$.subscribe(
      employee => {
        this.employee = employee;
        this.announced = true;
      }
    );

  }


  deleteAction(employee: Employee) {
      this.modalService.deleteObject(employee);
      this.hideModal();



  }

  hideModal() {
    this.modalService.closeModal();
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
}
