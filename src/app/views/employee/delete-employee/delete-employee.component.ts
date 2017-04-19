import {Component, OnDestroy} from '@angular/core';
import {Employee} from '../../../services/employee/employee.model';
import {ModalService} from '../../../services/modal/modal.service';
import {Subscription} from 'rxjs/Subscription';


@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html'
})
export class DeleteEmployeeComponent implements OnDestroy {


  private subscription = new Subscription;
  private employee =  new Employee();

  constructor(private modalService: ModalService) {
    // Subscription to modalservice
    this.subscription = this.modalService.objectSend$.subscribe(
      employee => {
        this.employee = employee;
      }
    );

  }

  /**
   * Send the delete commmand to the subscribed parent (employee-list)
   * @param employee
   */
  deleteAction(employee: Employee): void {
      this.modalService.deleteObject(employee);
      this.hideModal();
  }

  /**
   * Hide the modal
   */
  hideModal(): void {
    this.modalService.closeModal();
  }


  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
}
