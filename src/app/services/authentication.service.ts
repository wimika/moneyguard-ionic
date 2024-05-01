import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  async isAuthenticated() {
    return false;
  }

  constructor() { }
}
