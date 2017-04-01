import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  private data: any;
  appVersion: string;
  appName: string;
  errors: any;

  constructor() {
    this.appVersion = '4.0.0';
    this.appName = 'HRM App';

  }

  ngOnInit() {

  }



}
