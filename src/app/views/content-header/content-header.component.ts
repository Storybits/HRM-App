import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html',
  styles: []
})
export class ContentHeaderComponent {

  @Input() pageTitle: string;
  @Input() pageDescription: string;
  @Input() levels = [];


}
