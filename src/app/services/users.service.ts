import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url: any
  constructor(private _HttpClient: HttpClient) {
    this.url = environment.apiUrl;
   }

  login(data: any) {
    return this._HttpClient.post(this.url + '/auth/login', data);
  }

  register(data: any) {
    return this._HttpClient.post(this.url + '/users/add', data);
  }
}
