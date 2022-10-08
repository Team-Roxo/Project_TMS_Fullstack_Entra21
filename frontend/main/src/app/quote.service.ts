import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { type } from 'os';
import { catchError } from 'rxjs';
import { LoginserviceService } from './loginservice.service';
import { RctQtComponent } from './rct-qt/rct-qt.component';
import { ShipQtComponent } from './ship-qt/ship-qt.component';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

   apiURL:string = 'http://localhost:8080/ship'
   apiURL2:string = 'http://localhost:8080/quote'

   APIBouncePut:string = "http://localhost:8080/user/disbounce/"
   newBounce!:any


  constructor(private router: Router, private http: HttpClient, private login:LoginserviceService) { }

  quote(cepOrigem:string, cepDestino:string):any{

    //ATUALIZA BOUNCE
    new LoginserviceService(this.router, this.http)

    this.newBounce = {
      "id":this.login.idBounce,
      "user":this.login.userBounce,
      "date":this.login.dateBounce,
      "time":this.login.timeBounce,
      "bounce_rate":false
    }

    console.log(this.newBounce);

    this.http.post(this.APIBouncePut+this.login.idBounce, this.newBounce)
    //FIM DO BOUNCE

    return this.http.get(this.apiURL+'/'+cepOrigem+'/'+cepDestino)

  }

  recQuote():any{

    //ATUALIZA BOUNCE
     new LoginserviceService(this.router, this.http)

     this.newBounce = {
       "id":this.login.idBounce,
       "user":this.login.userBounce,
       "date":this.login.dateBounce,
       "time":this.login.timeBounce,
       "bounce_rate":false
     }

     console.log(this.newBounce);

     this.http.post(this.APIBouncePut+this.login.idBounce, this.newBounce)
    //FIM DO BOUNCE

    return this.http.get(this.apiURL2+`/recent/`+this.login.pessoaID)

  }

  regRecentQuotes(object:any){

    //ATUALIZA BOUNCE
    new LoginserviceService(this.router, this.http)

    this.newBounce = {
      "id":this.login.idBounce,
      "user":this.login.userBounce,
      "date":this.login.dateBounce,
      "time":this.login.timeBounce,
      "bounce_rate":false
    }

    console.log(this.newBounce);

    this.http.post(this.APIBouncePut+this.login.idBounce, this.newBounce)
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
