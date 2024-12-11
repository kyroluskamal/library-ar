import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from '../CustomValidation/customvalidtors';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  styles: ``,
  standalone: false,
})
export class AppComponent {
  title = 'Coding Bible library';
  fb = inject(FormBuilder);
  form = this.fb.group(
    {
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    },
    { validators: CustomValidators.passwordMatch2() }
  );

  submit() {
    if (this.form.invalid) return;
    console.log(this.form.value);
  }
}
