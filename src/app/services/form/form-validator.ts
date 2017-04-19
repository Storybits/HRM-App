import { FormControl, FormGroup} from '@angular/forms';

interface ValidationResult {
  [key: string]: boolean;
}

export class FormValidator {

  /**
   * E-mail validator
   * @param control
   * @returns {any}
   */
  static mailFormat(control: FormControl): ValidationResult {
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (control.value !== '' && (control.value.length <= 5 || !regex.test(control.value))) {
      return { 'incorrectMailFormat': true };
    }

    return null;
  }


  /**
   * Clear form values
   * @param form
   */
  static clearFormValues(form: FormGroup): void {
    for (const name in form.controls) {
      form.controls[name].setValue('');
    }
  }

  /**
   * Clear form errors
   * @param form
   */
  static clearFormErrors(form: FormGroup): void {
    for (const name in form.controls) {
      form.controls[name].setErrors(null);
    }

  }


}


