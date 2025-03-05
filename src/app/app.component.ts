import { Component, ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
interface UserLogin {
  email: string;
  password: string;
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
  user: UserLogin = {
    email: '',
    password: '',
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
