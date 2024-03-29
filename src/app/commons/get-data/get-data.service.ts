import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Model } from '../types/model';
import { ConfigDetails } from '../types/options';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

/**
 * A service class created to get the Model and Color data from the main.ts mock
 */
export class GetDataService {
  constructor(private http: HttpClient) {}

  getModels(): Observable<Model[]> {
    return this.http.get<Model[]>('/models') //make and http call to the /models endpoint to get Models
  }

  getConfig(modelCode: string): Observable<ConfigDetails> {
    return this.http.get<ConfigDetails>('/options/' + modelCode) //make and http call to the /options/modelCode endpoint to get Configs
  }
}
