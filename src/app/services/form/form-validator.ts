import { FormControl } from '@angular/forms';

interface ValidationResult {
  [key: string]: boolean;
}

export class FormValidator {

  static mailFormat(control: FormControl): ValidationResult {
    //const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (control.value !== '' && (control.value.length <= 5 || !regex.test(control.value))) {
      return { 'incorrectMailFormat': true };
    }

    return null;
  }

}


