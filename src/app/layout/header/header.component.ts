import {Component, Input} from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {User} from '../../services/user/user.model';
import {TranslateService} from '../../services/translation/translate.service';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent  {

  @Input() appName: string;
  @Input() user: User;

  constructor( private userService: UserService, private _translate: TranslateService) {}

  shortAppName() {
    return /(\w+)/.exec(this.appName)[1];
  }

  selectLang(lang: string) {
    this._translate.use(lang);
  }
  signOut() {
    this.userService.signOut();
  }
}
