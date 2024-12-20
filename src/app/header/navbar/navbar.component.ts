import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isLoggedin = false;
  isSignup = false;

  constructor(private authService: AuthService, private router: Router) {
    this.authService.isLoggedIn$.subscribe((loggedIn) => {
      this.isLoggedin = loggedIn;
    });
    this.authService.signedup$.subscribe((subscribe) => {
      this.isSignup = subscribe;
    });
  }

  onSignout() {
    this.authService.logout();
    this.router.navigate(['']);
  }
}
