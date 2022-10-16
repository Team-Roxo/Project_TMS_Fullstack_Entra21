import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CarrierService {

  apiURL:string = 'http://34.95.208.13:8080/carriers'

  constructor(private router: Router, private http: HttpClient) { }

  listCarrier():any{

    return this.http.get(this.apiURL)

  }

  adicionar(object:any){
    this.http.post(this.apiURL,object)
    .subscribe((response)=>{


      console.log(response);

    })


  }

  findName(id: number):any{

    return this.http.get(this.apiURL+'/'+id)




  }

}
