import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import {Router} from '@angular/router';

export const authGuardGuard: CanActivateFn = (route, state) => {
  let router = inject(Router);
  if(!!localStorage.getItem('token')) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
  return false;
};
