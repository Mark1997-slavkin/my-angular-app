import { PasswordStrengthDirective } from './../../directives/password-strength-directive';
import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-signup',
  standalone: true,
  imports: [NgIf, FormsModule, PasswordStrengthDirective],
  templateUrl: './login-signup.component.html',
  styleUrl: './login-signup.component.css',
})
export class LoginSignupComponent {
  login = true;
  formInfo: string | { [key: string]: any } = '';
  onChange() {
    this.login = !this.login;
  }
  onSubmit(form: NgForm) {
    console.log(form.value);
    form.reset();

    this.formInfo = form.value;
  }
}
