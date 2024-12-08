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
  validators = [Validators.required, Validators.minLength(3)];
  fb = inject(FormBuilder);
  form = this.fb.group({
    birthdate: ['', [Validators.required, CustomValidators.minAge18()]],
  });
  ngOnInit() {
    this.form.valueChanges.subscribe((value) => {
      console.log(this.form.controls.birthdate.errors);
    });
  }
  submit() {
    if (this.form.invalid) return;
    console.log(this.form.value);
  }
}
