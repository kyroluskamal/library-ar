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
  form = this.fb.group({
    email: [
      '',
      {
        validators: [Validators.required],
        asyncValidators: [CustomValidators.AsyncEmailAvaliabilityValidator2],
        updateOn: 'blur',
      },
    ],
  });
  ngOnInit() {
    this.form.controls.email.statusChanges.subscribe((status) => {
      console.log(status);
    });
  }
  submit() {
    if (this.form.invalid) return;
    console.log(this.form.value);
  }
}
