import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-favorites-page',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './favorites-page.component.html',
  styleUrl: './favorites-page.component.css',
})
export class FavoritesPageComponent {
  form: any;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(60),
        ],
      ],
      date: [this.formatDate(new Date()), [Validators.required]],
      checked: [false, Validators.requiredTrue],
      description: ['', [Validators.required, Validators.minLength(3)]],
      selector: ['Beginner', [Validators.required]],
    });
  }
  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${day}-${month}-${year}`;
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
