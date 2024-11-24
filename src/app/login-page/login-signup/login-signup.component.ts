import { CommonModule, NgIf } from '@angular/common';
import { Component, Pipe } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { pipe } from 'rxjs';
import { createPasswordStrengthValidator } from '../../validators/password-strength.validator';

@Component({
  selector: 'app-login-signup',
  standalone: true,
  imports: [NgIf, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login-signup.component.html',
  styleUrl: './login-signup.component.css',
})
export class LoginSignupComponent {
  form!: FormGroup;
  login = true;

  constructor() {
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
          updateOn: 'blur',
        })
      );
    }
  }

  formInfo: string | { [key: string]: any } = '';
  onChange() {
    this.login = !this.login;
    this.buildForm();
  }
  onSubmit(form: FormGroup) {
    console.log(form.value);
    form.reset();

    this.formInfo = form.value;
  }
}
