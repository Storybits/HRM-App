import {Component,  OnDestroy, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {FormValidator} from '../../services/form/form-validator';
import {Employee} from '../../services/employee/employee';
import {ModalService} from '../../services/modal/modal.service';
import {Subscription} from 'rxjs/Subscription';



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
    this.subscription = this.modalService.objectSend$.subscribe(
      employee =>  {
        this.employee = employee;
        this.populateForm();
      }
    );
  }
  ngOnInit() {
    // set default value for radio button
    this.form.controls['gender'].setValue('Male');

  }

  createForm() {
    this.id = new FormControl('');
    this.first_name = new FormControl('', Validators.required);
    this.last_name = new FormControl('', Validators.required);
    this.email = new FormControl('', Validators.compose([Validators.required, FormValidator.mailFormat]));
    this.gender = new FormControl('', Validators.required);
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


  populateForm() {
    for (const field in this.form.controls) {
      if (this.employee.hasOwnProperty(field)) {
        this.form.controls[field].setValue(this.employee[field]);
        this.form.controls[field].setErrors(null);
      }
    }
  }


  validateInput(inputField: string): boolean {
    return this.form.controls[inputField].valid || (this.form.controls[inputField].pristine && !this.submitted);
  }

  save(employee: Employee, isValid: boolean): void {
    this.submitted = true;

    if (isValid) {

      // this.addEmployee.emit(model);
      this.modalService.saveObject(employee);
      this.hideModal();

    }
  }


  hideModal() {
    for (const name in this.form.controls) {
      this.form.controls[name].setValue('');
      this.form.controls[name].setErrors(null);
    }
    this.employee = new Employee();
    this.form.controls['gender'].setValue('Male');
    this.modalService.closeModal();
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

}
