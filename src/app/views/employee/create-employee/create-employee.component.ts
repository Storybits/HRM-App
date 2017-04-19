import {Component,  OnDestroy, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {FormValidator} from '../../../services/form/form-validator';
import {Employee} from '../../../services/employee/employee.model';
import {ModalService} from '../../../services/modal/modal.service';
import {Subscription} from 'rxjs/Subscription';
import {Helper} from '../../../services/helper';



@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',

  styles: []
})
export class CreateEmployeeComponent implements OnInit, OnDestroy {

  public form: FormGroup;
  public submitted: boolean;

  private employee = new Employee();
  private subscription: Subscription;

  id: FormControl;
  first_name: FormControl;
  last_name: FormControl;
  email: FormControl;
  gender: FormControl;
  address: FormControl;
  job_role: FormControl;


  constructor(private fb: FormBuilder, private modalService: ModalService) {
    this.createForm();
    // Subscribe to modalService to get data when sent
    this.subscription = this.modalService.objectSend$.subscribe(
      employee =>  {
        if ((Helper.isEmpty(employee.id))) {
          this.clearForm();
        } else {
          this.employee = employee;
          this.populateForm();
        }

      }
    );
  }

  ngOnInit() {

  }

  /**
   * Creates the form via FormControl
   */
  createForm(): void {
    this.id = new FormControl('');
    this.first_name = new FormControl('', Validators.required);
    this.last_name = new FormControl('', Validators.required);
    this.email = new FormControl('', Validators.compose([Validators.required, FormValidator.mailFormat]));
    this.gender = new FormControl('Male', Validators.required);
    this.address = new FormControl('');
    this.job_role = new FormControl('', Validators.required);

    this.form = this.fb.group( {
      'id': this.id,
      'first_name': this.first_name,
      'last_name': this.last_name,
      'email': this.email,
      'gender': this.gender,
      'address': this.address,
      'job_role': this.job_role
    });
  }

  /**
   * Populates the form in case of editing an employee
   * Uses the observable employee
   */
  populateForm(): void {
    for (const field in this.form.controls) {
      if (this.employee.hasOwnProperty(field)) {
        this.form.controls[field].setValue(this.employee[field]);
        this.form.controls[field].setErrors(null);
      }
    }
  }

  /**
   * Form validation
   * @param inputField
   * @returns {boolean}
   */
  validateInput(inputField: string): boolean {
    return this.form.controls[inputField].valid || (this.form.controls[inputField].pristine && !this.submitted);
  }

  /**
   * Save and employee's data by sending it back to the subscribers
   * @param employee
   * @param isValid
   */
  save(employee: Employee, isValid: boolean): void {
    this.submitted = true;

    if (isValid) {
      // this.addEmployee.emit(model);
      this.modalService.saveObject(employee);
      this.hideModal();

    }
  }

  /**
   * Hide the modal and clear the form fields
   */
  hideModal(): void {
    this.clearForm();
    this.modalService.closeModal();
  }

  /**
   * clear the form for the next dialog
   */
  private clearForm() {
    this.submitted = false;
    this.form.clearValidators();
    this.createForm();
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

}
