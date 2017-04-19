import { Observable } from 'rxjs/Observable';
import {  Response } from '@angular/http';

/**
 * Helper class with some static methods that can be used throughout the project
 */
export class Helper {

  /**
   * Empty check
   * @param val
   * @returns {boolean}
   */
  public static isEmpty = function(val) { return (val === undefined || val == null  || val.length <= 0) ? true : false; }

  /**
   * Catches errors on http Response and logs to console
   * @param error
   * @returns {any}
   */
  public static handleError(error: Response | any): Observable<any> {
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

  /**
   * Generates a unique id
   * @returns {string}
   */
  public static generateUUID (): string {
    let d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
      d += performance.now();
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
  }

}
