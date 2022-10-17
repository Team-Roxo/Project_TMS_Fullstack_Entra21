import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from './loginservice.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiURL:string = 'http://34.95.208.13:8080/user'

  constructor(private router: Router, private http: HttpClient, private login:LoginserviceService) { }

  listUsers():any{

    return this.http.get(this.apiURL)

  }

  getLinks():any{
    return this.http.get(this.apiURL+'/links/'+this.login.pessoaID)
  }

  listUsersByLink(id:number){
    return this.http.get(this.apiURL+'/'+id)
  }

  adicionar(object:any){
    this.http.post(this.apiURL,object)
    .subscribe((response:any)=>{

      this.http.post(this.apiURL+'/links', {'sender':this.login.pessoaID, 'receiver':response.id})
      .subscribe((response)=>{
        console.log(response);
      })

    })
}
}
