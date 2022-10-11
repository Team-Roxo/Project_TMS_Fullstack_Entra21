import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiURL:string = 'http://35.199.78.13:8080/user'

  constructor(private router: Router, private http: HttpClient) { }

  listUsers():any{

    return this.http.get(this.apiURL)

  }

  adicionar(object:any){
    this.http.post(this.apiURL,object)
    .subscribe((response)=>{


      console.log(response);

    })
}
}
