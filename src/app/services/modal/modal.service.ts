import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';


@Injectable()
export class ModalService {

  // Subjects
  private objectToSend = new Subject<any>();
  private objectToSave = new Subject<any>();
  private objectToDelete = new Subject<any>();
  private actionCloseModal = new Subject<boolean>();

  // Announced
  objectSend$ = this.objectToSend.asObservable();
  objectSave$ = this.objectToSave.asObservable();
  objectDelete$ = this.objectToDelete.asObservable();
  closeModalAnnounced$ = this.actionCloseModal.asObservable();

  sendObject(object: any) {
    this.objectToSend.next(object);
  }

  saveObject(object: any) {
    this.objectToSave.next(object);
  }

  deleteObject(object: any) {
    this.objectToDelete.next(object);
  }

  closeModal() {
    this.actionCloseModal.next(true);
  }




}
