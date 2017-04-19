import {Inject, Injectable} from '@angular/core';
import { TRANSLATIONS } from './translations';


@Injectable()
export class TranslateService {

  private _currentLang: string;

  constructor(@Inject(TRANSLATIONS) private __translations: any) { }

  public get currentLang() {
    return this._currentLang;
  }

  public use(lang: string): void {
    this._currentLang = lang;
  }

  public instant(key: string) {
    return this.translate(key);

  }

  private translate(key: string): string {
    const translation = key;

    if (this.__translations[this.currentLang] && this.__translations[this.currentLang][key.toUpperCase()]) {
      return this.__translations[this.currentLang][key.toUpperCase()];
    }

    return translation;
  }

}
