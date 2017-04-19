import {Injectable, OnDestroy} from '@angular/core';
import {Subject} from 'rxjs/Subject';


@Injectable()
export class ModalService implements OnDestroy {

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

  /**
   * Send an object to subscribers
   * @param object
   */
  sendObject(object: any) {
    this.objectToSend.next(object);
  }

  /**
   * Send object to save to subscribers
   * @param object
   */
  saveObject(object: any) {
    this.objectToSave.next(object);
  }

  /**
   * Send obkect to delete to subscribers
   * @param object
   */
  deleteObject(object: any) {
    this.objectToDelete.next(object);
  }

  /**
   * Send close command to subscribers (parent)
   */
  closeModal() {
    this.actionCloseModal.next(true);
  }

  ngOnDestroy() {
    this.objectToSave.unsubscribe();
    this.objectToSend.unsubscribe();
    this.objectToDelete.unsubscribe();
    this.actionCloseModal.unsubscribe();

  }

}
