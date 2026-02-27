import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const adminGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (!authService.isLoggedIn()) {
    router.navigateByUrl('/login');
    return false;
  } else if (!authService.isAdmin()) {
    router.navigateByUrl('/access-denied');
    return false;
  }
  return true;
};
