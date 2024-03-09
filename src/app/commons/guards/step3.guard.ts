import { CanActivateFn, Router } from '@angular/router';
import { DataService } from '../data/data.service';
import { inject } from '@angular/core';

export const step3Guard: CanActivateFn = (route, state) => {
  let dataService = inject(DataService)
  const router = inject(Router);
  if(dataService.step3) {
    return true;
  } else {
    router.navigate(['/step1']); //navigate to step 1 if condition isnt satisfied
    return false;
  }
};
