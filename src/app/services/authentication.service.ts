import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private user: any = null;


  constructor() { }

  async isAuthenticated(): Promise<boolean> {
    return !!this.user; 
  }

  setUser(user: any): void {
    this.user = user;
  }

  getUser(): any {
    return this.user;
  }

  clearUser(): void {
    this.user = null;
  }
}
