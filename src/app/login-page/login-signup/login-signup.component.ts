import { AuthService } from './../../auth/auth.service';
import { CommonModule, NgIf } from '@angular/common';
import { Component, Pipe } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { users } from '../../mock/mock.user.data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-signup',
  standalone: true,
  imports: [NgIf, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login-signup.component.html',
  styleUrl: './login-signup.component.css',
})
export class LoginSignupComponent {
  savedUsers = users;
  userNotFound = false;
  form!: FormGroup;
  login = true;
  loggedIn: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  } = { email: '', password: '', firstName: '', lastName: '' };
  signedUp: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    address: string;
    zipCode: string;
  } = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    address: '',
    zipCode: '',
  };

  constructor(private router: Router, private authService: AuthService) {
    this.buildForm();
  }

  buildForm() {
    this.form = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email],
        updateOn: 'blur',
      }),
      password: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(15),
        ],
      }),
    });

    if (!this.login) {
      this.form.addControl(
        'firstName',
        new FormControl('', {
          validators: [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(10),
          ],
          updateOn: 'blur',
        })
      );
      this.form.addControl(
        'lastName',
        new FormControl('', {
          validators: [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(10),
          ],
          updateOn: 'blur',
        })
      );
      this.form.addControl(
        'address',
        new FormControl('', {
          validators: [Validators.required],
          updateOn: 'blur',
        })
      );
      this.form.addControl(
        'zipcode',
        new FormControl('', {
          validators: [Validators.required],
        })
      );
    }
  }

  formInfo: string | { [key: string]: any } = '';
  onChange() {
    this.login = !this.login;
    this.form.reset();
    this.buildForm();
  }
  onLogin(form: FormGroup) {
    console.log(form.value, 'Logged in');

    const foundUser = this.savedUsers.find(
      (user) => user.email === form.value.email
    );

    if (foundUser) {
      console.log('user was found');

      this.loggedIn = foundUser;
      setTimeout(() => {
        this.router.navigate(['']);
        this.authService.login(foundUser);
      }, 1000);
      localStorage.setItem('user', JSON.stringify(this.loggedIn));
    } else {
      console.log('User not found');
      this.userNotFound = !this.userNotFound;
      this.loggedIn = { email: '', password: '', firstName: '', lastName: '' };
      setTimeout(() => {
        this.userNotFound = !this.userNotFound;
      }, 3000);
    }
  }

  onSignup(form: FormGroup) {
    this.signedUp = form.value;
    this.savedUsers.push(this.signedUp);
    console.log('SignedUp', this.savedUsers);
    form.reset();
    this.login = !this.login;
    setTimeout(() => {
      this.buildForm();
    });
  }
}
