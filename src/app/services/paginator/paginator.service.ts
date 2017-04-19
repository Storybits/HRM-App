import { Injectable } from '@angular/core';

import * as _ from 'underscore';

@Injectable()
export class PaginatorService {

  public totalPages: number = 1;
  public pageSize: number = 10;

  /**
   * Calcluate the pages and set them
   * @param totalItems
   */
  calcPages(totalItems: number) {
    const noOfPages = Math.ceil(totalItems / this.pageSize);
    this.totalPages = (Math.ceil(this.totalPages / this.pageSize) > noOfPages) ? Math.ceil(this.totalPages / this.pageSize) : noOfPages;
  }

  /**
   * Get the pager object
   * @param totalItems
   * @param currentPage
   * @param pageSize
   * @returns {{totalItems: number, currentPage: number, pageSize: number, totalPages: number, startPage: number, endPage: number, startIndex: number, endIndex: number, pages: any}}
   */
  getPager(totalItems: number, currentPage: number = 1, pageSize?: number): {} {

    // calculate total pages
    this.pageSize = (isNaN(pageSize)) ? this.pageSize : pageSize;
    this.calcPages(totalItems);

    let startPage: number, endPage: number;
    if (this.totalPages <= 10) {
      // less than 10 total pages so show all
      startPage = 1;
      endPage = this.totalPages;
    } else {
      // more than 10 total pages so calculate start and end pages
      if (currentPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (currentPage + 4 >= this.totalPages) {
        startPage = this.totalPages - 9;
        endPage = this.totalPages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }

    // calculate start and end item indexes
    const startIndex = (currentPage - 1) * this.pageSize;
    const endIndex = Math.min(startIndex + this.pageSize - 1, totalItems - 1);

    // create an array of pages to ng-repeat in the pager control
    const pages = _.range(startPage, endPage + 1);

    // return object with all pager properties required by the view
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: this.pageSize,
      totalPages: this.totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };
  }

}
