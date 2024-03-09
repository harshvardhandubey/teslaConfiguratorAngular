import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Config, ConfigDetails } from '../../commons/types/options';
import { GetDataService } from '../../commons/get-data/get-data.service';
import { DataService } from '../../commons/data/data.service';
import { AsyncPipe, CommonModule, NgFor, NgIf } from '@angular/common'
import { FormsModule } from '@angular/forms';
import { ImageComponent } from '../image/image.component';

@Component({
  selector: 'app-step2',
  standalone: true,
  imports: [AsyncPipe, NgIf, NgFor, CommonModule, FormsModule, ImageComponent],
  templateUrl: './step2.component.html',
  styleUrl: './step2.component.scss'
})
export class Step2Component {

  getDataService: GetDataService = inject(GetDataService)
  dataService:DataService = inject(DataService)
  options$: Observable<ConfigDetails> 
  configDetails!: ConfigDetails
  configs: Config[] = []

  configCode: number = this.dataService.configCode;
  config!: Config;


  constructor() {
    this.options$ = this.getDataService.getConfig(this.dataService.modelCode);
    
    this.options$.subscribe({
      next: (data) => {
        this.configDetails = data;
        this.configs = this.configDetails.configs;
      },
      error: (error) => {
        console.error('Error fetching data:', error);
      },
      complete: () => {
        console.log('Data fetching completed');
      }
    });
  }

  onConfigSelectChange(): void {
    this.dataService.configPrice = 0;
    this.config = this.configs.find(config => config.id === Number(this.configCode))!;
    this.setData();
  }

  setData(): void {
    this.dataService.configPrice = this.dataService.configPrice + this.config.price!;
    this.dataService.configDescr = this.config.description
    this.dataService.configRange = this.config.range
    this.dataService.configSpeed = this.config.speed
    this.dataService.configCode = this.configCode
    this.dataService.step3 = true;
  }
}
