import { CanActivateFn, Router } from '@angular/router';
import { DataService } from '../data/data.service';
import { inject } from '@angular/core';

export const step2Guard: CanActivateFn = (route, state) => {
  let dataService = inject(DataService)
  const router = inject(Router);
  if(dataService.step2) {
    return true;
  } else {
    router.navigate(['/step1']);
    return false;
  }
};
