import {Component, OnInit} from '@angular/core';
import {TranslateService} from './services/translation/translate.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ TranslateService ]
})
export class AppComponent implements OnInit {

  public translatedText: string;
  public supportedLanguages: any[];


  constructor(private _translate: TranslateService) {}

  ngOnInit() {
    this.supportedLanguages = [
      { display: 'English', value: 'en'},
      { display: 'Nederlands', value: 'nl'},
    ];

    // Default language setting on initial load
    this.selectLang('nl');
  }

  isCurrentLang(lang: string) {
    return lang === this._translate.currentLang;
  }

  selectLang(lang: string) {
    this._translate.use(lang);
    // this.refreshText();
  }

  refreshText() {
    this.translatedText = this._translate.instant('hello world');
  }



}
