import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {


  @Input() appName: string;
  @Input() appVersion: string;

  constructor() { }

  ngOnInit() {
  }

}
