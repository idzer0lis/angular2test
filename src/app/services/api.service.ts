import { Injectable } from '@angular/core';

import { Http , Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { User } from './user';

@Injectable()
export class ApiService {
  title = 'World'; // used it for service testing POC, will be removed
  private usersUrl = 'api/users';  // URL mockup web API

  constructor(private http: Http) {}

  getUser(): Promise<User[]> {
    return this.http.get(this.usersUrl)
      .toPromise() // transform observable to a promise TODO: Study observables more
      .then(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }

  private handleError(error: Response | any) {
    // Remote logging infrastructure? for now this is the main error handler for responses
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }
}
