import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService implements CanActivate {

  user!:string
  TMSLoginAPI:string = "https://imagina-uma-api-bem-daora-aqui.com"
  succeed!:boolean

  constructor(private router:Router, private http:HttpClient) {}

  logging(user:string, password:string){
    this.user = user
    return this.http.get<any>(this.TMSLoginAPI+'/'+user+'/'+password)
  }

  registering(user:string, password:string, email:string){
    this.user = user
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    if(!this.succeed){
      this.router.navigateByUrl('');
    }
    return this.succeed
  }

}
