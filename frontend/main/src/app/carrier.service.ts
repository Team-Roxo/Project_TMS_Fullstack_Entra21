import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CarrierService {

  apiURL:string = 'http://localhost:8080/carriers'

  constructor(private router: Router, private http: HttpClient) { }

  listCarrier():any{

    return this.http.get(this.apiURL)

  }
}
