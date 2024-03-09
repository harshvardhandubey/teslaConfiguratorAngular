import { Component, OnInit, inject } from '@angular/core';
import { GetDataService } from '../../commons/get-data/get-data.service';
import { Color, Model } from '../../commons/types/model';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule, NgFor, NgIf } from '@angular/common'
import { FormsModule } from '@angular/forms';
import { DataService } from '../../commons/data/data.service';


@Component({
  selector: 'app-step1',
  standalone: true,
  imports: [AsyncPipe, NgIf, NgFor, CommonModule, FormsModule],
  templateUrl: './step1.component.html',
  styleUrl: './step1.component.scss'
})
export class Step1Component {
  getDataService = inject(GetDataService)
  dataService = inject(DataService)

  models$: Observable<Model[]>
  models: Model[] = []

  modelCode: string = '';
  colorCode: string = '';
  colors: Color[] = [];

  baseimgURL = 'https://interstate21.com/tesla-app/images';
  imgURLFinal = '';

  constructor() {

    if (this.modelCode !== this.dataService.modelCode) {
      this.dataService.towHitch = false;
      this.dataService.yoke = false;
      this.dataService.configCode = 0;
    }
    
    this.models$ = this.getDataService.getModels();
    this.models$.subscribe({
      next: (data) => {
        this.models = data;
        this.modelCode = this.dataService.modelCode;

        this.colors = this.models.find(model => model.code === this.dataService.modelCode)?.colors!;
        this.colorCode = this.dataService.colorCode;
        this.setData()
      },
      error: (error) => {
        console.error('Error fetching data:', error);
      },
      complete: () => {
        console.log('Data fetching completed');
      }
    });

  }

  setFinalModel() {
    this.colors = this.models.find(model => model.code === this.modelCode)?.colors!;
    this.colorCode = this.colors[0].code;
    // this.dataService.color = this.colors[0]
    this.dataService.step2 = true;
    this.setData();
  }

  generateImageUrl() {
    this.setData();
    // this.dataService.color = Object.assign({}, this.colors?.find(color => color.code === this.colorCode));
  }

  setData() {
    this.dataService.colorPrice = 0;
    this.imgURLFinal = (this.baseimgURL + "/" + this.modelCode + "/" + this.colorCode + ".jpg");
    this.dataService.colorCode = this.colorCode;
    this.dataService.modelCode = this.modelCode;
    this.dataService.colorPrice = this.dataService.colorPrice + this.colors?.find(color => color.code === this.colorCode)?.price!;
    this.dataService.modelName = this.models.find(model => model.code === this.modelCode)?.description!
    this.dataService.colorName = this.colors?.find(color => color.code === this.colorCode)?.description!
    // this.dataService.model = Object.assign({}, this.models.find(model => model.code === this.modelCode));
    // this.dataService.color = Object.assign({}, this.colors?.find(color => color.code === this.colorCode));
  }

}
