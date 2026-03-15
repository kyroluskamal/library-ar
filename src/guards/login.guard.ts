import { inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  authService = inject(AuthService);
  router = inject(Router);
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): MaybeAsync<GuardResult> {
    console.log(
      '%c[%cLoginGuard%c] running for:' + state.url,
      'color:#ff4d4d',
      'color:#4da3ff; font-weight:700',
      'color:#ff4d4d',
    );
    if (!this.authService.isLoggedIn()) {
      this.router.navigateByUrl('/login');
      return false;
    }
    return true;
  }
}
