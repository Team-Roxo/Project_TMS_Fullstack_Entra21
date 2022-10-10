import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  readonly API:string = "http://35.199.78.13:8080/aboutus"

  constructor(private router: Router, private http: HttpClient) { }


  listAbout():any{

    return this.http.get(this.API)

  }




}
