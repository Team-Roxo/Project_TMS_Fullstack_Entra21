import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PackService {

  apiURL:string = 'http://34.95.208.13:8080/quote/packs/user'

  constructor(private router: Router, private http: HttpClient) { }

  listPack(id:number):any{

    return this.http.get(this.apiURL+'/'+id)

  }
}
