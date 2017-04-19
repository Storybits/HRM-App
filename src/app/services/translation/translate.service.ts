import {Inject, Injectable} from '@angular/core';
import { TRANSLATIONS } from './translations';


@Injectable()
export class TranslateService {

  private _currentLang: string;

  constructor(@Inject(TRANSLATIONS) private __translations: any) { }

  /**
   * Get the current language
   * @returns {string}
   */
  public get currentLang() {
    return this._currentLang;
  }

  /**
   * Set the language to use
   * @param lang
   */
  public use(lang: string): void {
    this._currentLang = lang;
  }

  /**
   * Instant translation
   * @param key
   * @returns {string}
   */
  public instant(key: string) {
    return this.translate(key);

  }

  /**
   * Translation function
   * @param key
   * @returns {any}
   */
  private translate(key: string): string {
    const translation = key;

    if (this.__translations[this.currentLang] && this.__translations[this.currentLang][key.toUpperCase()]) {
      return this.__translations[this.currentLang][key.toUpperCase()];
    }

    return translation;
  }

}
