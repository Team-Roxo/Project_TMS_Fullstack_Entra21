import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { ShipQtComponent } from './ship-qt/ship-qt.component';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

   apiURL:string = 'https://maps.googleapis.com/maps/api/directions/json?origin='

  constructor(private http: HttpClient) { }

  quote(cepOrigem:string, cepDestino:string):any{

    return this.http.get<any>(this.apiURL+cepOrigem+'&destination='+cepDestino+'&key=AIzaSyCKNjLUI0d01M0SfoDjIov4vZlR3DprotM')

  }

}
