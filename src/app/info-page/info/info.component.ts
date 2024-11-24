import { CommonModule, NgIf } from '@angular/common';
import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [FormsModule, NgIf, CommonModule],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css',
})
export class InfoComponent {
  val = {
    email: 'Write your email here',
    password: 'Write your password here',
    message: 'Write your message here',
  };

  infoSubmit: string | { [key: string]: any } = '';
  onSubmit(infoForm: NgForm, ngSubmit: Event) {
    console.log(ngSubmit);
    console.log(infoForm.value);

    this.infoSubmit = infoForm.value;
    infoForm.reset();
    setTimeout(() => {
      this.infoSubmit = '';
    }, 3500);
  }

  onEmailChange(change: Event) {
    console.log(change);
  }
}
