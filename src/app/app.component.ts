import { Component, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';

/************************************
 * User interaction states
 *************************************/
// pristine
// dirty
// touched
// untouched
// disabled
// enabled
/************************************
 * Validation states
 *************************************/
// pending
// valid
// invalid
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
    email: [''],
    password: [''],
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

  patchVallue() {
    this.form.patchValue({
      email: 'email@gmail.com',
      password: 'password',
    });
  }

  onInput() {
    this.form.controls.password.setValue(this.form.controls.email.value + 'a');
  }
}
