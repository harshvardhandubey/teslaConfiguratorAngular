import { Component, inject } from '@angular/core';
import { DataService } from '../../commons/data/data.service';
import { CurrencyPipe } from '@angular/common';
import { NgIf } from '@angular/common';
import { ImageComponent } from '../image/image.component';

@Component({
  selector: 'app-step3',
  standalone: true,
  imports: [CurrencyPipe, NgIf, ImageComponent],
  templateUrl: './step3.component.html',
  styleUrl: './step3.component.scss'
})
export class Step3Component {
dataService: DataService = inject(DataService)
towHitchPrice = 0;
yokePrice = 0;


constructor() {
  if(this.dataService.towHitch) {
    this.towHitchPrice = this.towHitchPrice + 1000; //if tow hitch is selected in the checkbox, add 1000 to the tow hitch price for the final calculation
  }

  if(this.dataService.yoke) {
    this.yokePrice = this.yokePrice + 1000; //if yoke is selected in the checkbox, add 1000 to the yoke price for the final calculation
  }
}

}
