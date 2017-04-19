import { InjectionToken } from '@angular/core';

// import translation files
import { LANG_EN_TRANS } from './lang-en';
import { LANG_NL_TRANS } from './lang-nl';


// translation token
export const TRANSLATIONS = new InjectionToken('translations');

// translation dict
export const dictionary = {
  'en': LANG_EN_TRANS,
  'nl': LANG_NL_TRANS,
};



// providers
export const TRANSLATION_PROVIDERS = [ { provide: TRANSLATIONS, useValue: dictionary }];
