import { Component, inject } from '@angular/core';
import { DataService } from '../../commons/data/data.service';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [],
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss'
})
export class ImageComponent {
  dataService: DataService = inject(DataService)
}
