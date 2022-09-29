import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { type } from 'os';
import { catchError } from 'rxjs';
import { ShipQtComponent } from './ship-qt/ship-qt.component';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

   apiURL:string = 'http://localhost:8080/ship'
   apiURL2:string = 'http://localhost:8080/quote'

  constructor(private router: Router, private http: HttpClient) { }

  quote(cepOrigem:string, cepDestino:string):any{

    return this.http.get(this.apiURL+'/'+cepOrigem+'/'+cepDestino)

  }

  recQuote():any{

    return this.http.get(this.apiURL)

  }

  regRecentQuotes(object:any){
    this.http.post(this.apiURL2+'/recent',object)
    .subscribe((response)=>{

      
      console.log(response);
      
    })


  }



}
