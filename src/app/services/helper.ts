import { Observable } from 'rxjs/Observable';
import {  Response } from '@angular/http';

export class Helper {

  // helper function
  public static isEmpty = function(val) { return (val === undefined || val == null  || val.length <= 0) ? true : false; }

  /**
   * Catches errors when calling http.get
   * @param error
   * @returns {any}
   */
  public static handleError(error: Response | any) {
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

  /**
   * Convenience function to search inArray by object
   * @param employee
   * @param array
   * @returns {boolean}
   */
  public static inArray(object: any, array: any[]) {
    return array.indexOf(object) > -1;
  }


  /**
   * Extracts data found by http call
   * @param res
   * @returns {}
   */
  public static extractData(res: Response): any [] {
    const body = res.json();
    return body.data || {};
  }


}
