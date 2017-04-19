import { Pipe, PipeTransform } from '@angular/core';
import {TranslateService} from './translate.service';

@Pipe({
  name: 'translate',
  pure: false
})
export class TranslatePipe implements PipeTransform {

  constructor(private __translate: TranslateService) {}

  transform(value: any, args?: any): any {
    if (!value) { return; }
    return this.__translate.instant(value);
  }

}
