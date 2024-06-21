import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly USER_KEY = 'authenticatedUser';
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(MyCustomDriver)
    const storage = await this.storage.create();
    this._storage = storage;
  }

  async isAuthenticated(): Promise<boolean> {
    const user = await this.getUserFromStorage();
    return !!user;
  }

  async setUser(user: any): Promise<void> {
    await this._storage?.set(this.USER_KEY, user);
  }

  async getUser(): Promise<any> {
    return await this.getUserFromStorage();
  }

  async clearUser(): Promise<void> {
    await this._storage?.remove(this.USER_KEY);
  }

  private async getUserFromStorage(): Promise<any> {
    return await this._storage?.get(this.USER_KEY);
  }
}
