import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class VisitsService {

  readonly APICountVisits:string = "http://34.95.208.13:8080/user/countVisitors"

  constructor(private router: Router, private http: HttpClient) { }


  listVisits():any{

    return this.http.get(this.APICountVisits)

  }



}
