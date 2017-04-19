import {Component, OnDestroy} from '@angular/core';
import {ModalService} from '../../services/modal/modal.service';
import {Subscription} from 'rxjs/Subscription';


@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html'
})
export class ModalDialogComponent implements  OnDestroy {

  public visible = false;
  private visibleAnimate = false;
  subscription: Subscription;

  constructor(private modalService: ModalService) {
    this.subscription = this.modalService.closeModalAnnounced$.subscribe(
      closeDialog => {
        if (closeDialog) { this.hide(); }
    });
  }

  /**
   * Show the modal dialog
   */
  public show(): void {
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true);
  }

  /**
   * Hide the modal dialog
   */
  public hide(): void {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

}
