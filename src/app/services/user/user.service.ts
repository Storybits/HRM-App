import { Injectable } from '@angular/core';
import { Http,  Response } from '@angular/http';
import {User} from './user.model';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import {Helper} from '../helper';

@Injectable()
export class UserService {

  private userApiUrl = 'api/users';

  constructor(private http: Http) { }

  findUser(user: User) {
    this.http.get(this.userApiUrl).map(response => this.searchUser(response, user)).catch(Helper.handleError).subscribe();
  }


  stillLoggedIn(): boolean {
    const storedUser: string = localStorage.getItem('user');

    if (Helper.isEmpty(storedUser)) {
      return true;
    }
    return false;
  }

  searchUser(res: Response, user: User) {
    const userData = Helper.extractData(res);
    const foundPerson: any[] = userData.filter(res => res.username === user.username);
    if (user.password === foundPerson[0].password) {
      console.log('Access granted');
      localStorage.setItem('user', foundPerson[0].username);
    } else {
      console.log('Access denied');
    }
  }


}
