import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import {User} from './user.model';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Helper} from '../helper';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class UserService {

  private userApiUrl = 'api/users';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http, private router: Router) { }

  /**
   * Find a user
   * @param user
   * @returns {Observable<User>}
   */
  findUser(user: User): Observable<any> {
    return this.http.get(this.userApiUrl).map(response => this.searchUser(response, user)).catch(Helper.handleError);
  }

  /**
   * Authenticate user
   * @returns {Observable<User>}
   */
  authenticate(): Observable<any> {
    return this.http.get(this.userApiUrl).map(res => this.searchForToken(Helper.extractData(res)));
  }

  /**
   * Sign out (clears session storage)
   */
  signOut(): void {
    sessionStorage.clear();
    this.router.navigate(['']);
  }


  /**
   * Search for user token
   * @param data
   * @returns {User}
   */
  private searchForToken(data: any): {} {
    const storedToken = sessionStorage.getItem('hrm-token');
    let user: User = new User('', '');
    if (!Helper.isEmpty(storedToken)) {
      const foundUser: any[]  = data.filter((user: User) => user.token === storedToken);
      user = (!Helper.isEmpty(foundUser[0])) ? foundUser[0] : new User('', '');
    }
    if (Helper.isEmpty(user.token)) {
      this.router.navigate(['']);
    }
    return user;


  }

  /**
   * Set user token in db and localSession
   * @param user
   */
  private setToken(user: User): void {
    const token: string  = Helper.generateUUID();
    sessionStorage.setItem('hrm-token', token);
    user.token = token;
    const url = `${this.userApiUrl}/${user.id}`;
    const options = new RequestOptions({headers: this.headers});
    this.http.put(url, user, options)
      .catch(Helper.handleError).subscribe();

  }

  /**
   * Search for a user in db
   * @param res
   * @param user
   * @returns {{authenticated: boolean}}
   */
  private searchUser(res: Response, user: User): any {
    const userData = Helper.extractData(res);
    const result = {authenticated: false};
    const foundPersons: any[] = userData.filter(res => res.username === user.username);
    if (user.password === foundPersons[0].password) {
      result.authenticated = true;
      this.setToken(foundPersons[0]);

    }
    return result;
  }
}
