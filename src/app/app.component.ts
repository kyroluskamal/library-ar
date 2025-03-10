import { Component, ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { CustomValidators } from '../CustomValidation/customvalidtors';

interface UserLogin {
  email?: string;
  age: Date;
  password: string;
  confirmPassword: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  styles: ``,
  standalone: false,
})
export class AppComponent {
  title = 'Coding Bible library';
  ngOnChanges() {
    this.loginForm.form.controls.email.addAsyncValidators(
      CustomValidators.AsyncEmailAvaliabilityValidator2
    );
  }
  user: UserLogin = {
    email: '',
    age: new Date(),
    password: '',
    confirmPassword: '',
  };
  formContol = new FormControl('', { updateOn: 'blur' });
  @ViewChild('userForm', { read: NgForm }) loginForm!: NgForm;
  onSubmit(ngForm: NgForm, event: any) {
    if (this.loginForm.invalid) {
      console.error('Form is invalid');
      return;
    }

    console.log('Form submitted', this.user);
    console.log('Form submitted', this.loginForm.value);
    console.log('Form submitted', ngForm.value);
  }
}
