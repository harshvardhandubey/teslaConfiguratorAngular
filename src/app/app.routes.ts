import { Routes } from '@angular/router';
import { Step1Component } from './components/step1/step1.component';
import { Step2Component } from './components/step2/step2.component';
import { Step3Component } from './components/step3/step3.component';
import { step2Guard } from './commons/guards/step2.guard';
import { step3Guard } from './commons/guards/step3.guard';

//Created routes for each step component
export const routes: Routes = [
    { path: '', redirectTo: 'step1', pathMatch: 'full' },
    { path: 'step1', title: 'Step1', component: Step1Component },
    { path: 'step2', title: 'Step2', component: Step2Component, canActivate: [step2Guard] },
    { path: 'step3', title: 'Step3', component: Step3Component, canActivate: [step3Guard] }
];