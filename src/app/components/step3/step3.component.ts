import { Component, inject } from '@angular/core';
import { DataService } from '../../commons/data/data.service';
import { CurrencyPipe } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-step3',
  standalone: true,
  imports: [CurrencyPipe, NgIf],
  templateUrl: './step3.component.html',
  styleUrl: './step3.component.scss'
})
export class Step3Component {
dataService: DataService = inject(DataService)
towHitchPrice = 0;
yokePrice = 0;


constructor() {
  if(this.dataService.towHitch) {
    this.towHitchPrice = this.towHitchPrice + 1000;
  }

  if(this.dataService.yoke) {
    this.yokePrice = this.yokePrice + 1000;
  }
}

}
