import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { type } from 'os';
import { catchError } from 'rxjs';
import { BodyComponent } from './body/body.component';
import { LoginserviceService } from './loginservice.service';
import { RctQtComponent } from './rct-qt/rct-qt.component';
import { ShipQtComponent } from './ship-qt/ship-qt.component';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

   apiURL:string = 'http://34.95.208.13:8080/ship'
   apiURL2:string = 'http://34.95.208.13:8080/quote'

   APIBouncePut:string = "http://34.95.208.13:8080/user/disbounce/"
   newBounce!:any


  constructor(private router: Router, private http: HttpClient, private login:LoginserviceService) { }

  quote(cepOrigem:string, cepDestino:string):any{

    //ATUALIZA BOUNCE
    this.http.put(this.APIBouncePut+this.login.idBounce, null)
    .subscribe((response)=>{
      console.log(response);
    })
    //FIM DO BOUNCE

    return this.http.get(this.apiURL+'/'+cepOrigem+'/'+cepDestino)

  }

  recQuote():any{

    //ATUALIZA BOUNCE
     this.http.put(this.APIBouncePut+this.login.idBounce, null)
     .subscribe((response)=>{
      console.log(response);
    })
    //FIM DO BOUNCE

    return this.http.get(this.apiURL2+`/recent/`+this.login.pessoaID)

  }

  regRecentQuotes(object:any){

    //ATUALIZA BOUNCE
    this.http.put(this.APIBouncePut+this.login.idBounce, null)
    .subscribe((response)=>{
      console.log(response);
    })
    //FIM DO BOUNCE

    this.http.post(this.apiURL2+'/recent',object)
    .subscribe((response)=>{

      console.log(response);

    })

  }

  regPackage(object:any){
    this.http.post(this.apiURL2+'/register',object)
    .subscribe((response)=>{
      console.log(response);

})
  }

  deleteRecentQuote(id:number){
    this.http.delete(this.apiURL2+'/recent/'+id)
  }

}
