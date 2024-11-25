import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  private currentUser = new BehaviorSubject<any>(null);
  private signedup = new BehaviorSubject<boolean>(false);

  public isLoggedIn$ = this.loggedIn.asObservable();
  public currentUser$ = this.currentUser.asObservable();
  public signedup$ = this.signedup.asObservable();

  constructor() {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.currentUser.next(JSON.parse(storedUser));
      this.loggedIn.next(true);
    }
  }

  signup(status: boolean) {
    this.signedup.next(status);
  }

  login(user: any) {
    this.loggedIn.next(true);
    this.currentUser.next(user);
    localStorage.setItem('user', JSON.stringify(user));
  }

  logout() {
    this.loggedIn.next(false);
    this.currentUser.next(null);
    localStorage.removeItem('user');
  }

  getLoggedInUser(): any {
    return this.currentUser.value;
  }
}
