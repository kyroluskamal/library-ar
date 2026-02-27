import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  authService = inject(AuthService);
  router = inject(Router);
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  login() {
    if (this.form.valid) {
      this.authService
        .login(this.form.value.email!, this.form.value.password!)
        .subscribe({
          next: () => {
            this.router.navigateByUrl('/home');
          },
          error: (error) => {
            console.log(error.message);
          },
        });
    }
  }
}
