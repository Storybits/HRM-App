import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html',
  styles: []
})
export class ContentHeaderComponent implements OnInit {

  @Input() pageTitle: string;
  @Input() pageDescription: string;
  @Input() levels = [];

  constructor() { }

  ngOnInit() {
  }

}
