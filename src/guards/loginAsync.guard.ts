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
export class LoginAsyncGuard implements CanActivate {
  authService = inject(AuthService);
  router = inject(Router);
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): MaybeAsync<GuardResult> {
    console.log(
      '%c[%cLoginGuardAsync%c] running for:' + state.url,
      'color:#00c853',
      'color:#4da5ff; font-weight:700',
      'color:#00c853',
    );
    return this.authService.isLoggedInAsync().then((loggedIn) => {
      if (!loggedIn) {
        return this.router.createUrlTree(['/login']);
        // this.router.navigateByUrl('/login');
        // return false;
      }
      return true;
    });
  }
}
