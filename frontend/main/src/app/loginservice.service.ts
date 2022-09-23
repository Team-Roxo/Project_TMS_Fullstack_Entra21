import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InjectSetupWrapper } from '@angular/core/testing';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { catchError, Observable } from 'rxjs';
import { LoginComponent } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService implements CanActivate {

  user!: string
  TMSLoginAPI: string = "http://localhost:8080"
  succeed!: boolean
  progress: boolean = false

  constructor(private router: Router, private http: HttpClient) { }

  logging(user: string, password: string) {

    this.progress = true

    let build:any = {
      'user':user,
      'senha':password
    }

    this.http.post(this.TMSLoginAPI +'/login', build)
    .pipe(
      catchError((error)=>{
        this.progress = false
        return error
      })
    )
    .subscribe((response:any)=>{
      this.http.get(this.TMSLoginAPI+'/user/'+response[0].pessoa_id)
      .subscribe((resp:any) =>{
        console.log(resp);
        this.user = resp.nome
      })
      return response
    })

    return this.http.post(this.TMSLoginAPI +'/login', build)
  }

  registering(name:string ,user: string, email: string, password: string) {

    this.progress = true

    let build:any = {
      'nome':name,
      'user':user,
      'email':email,
      'senha':password
    }

    this.http.post(this.TMSLoginAPI+'/register', build)
    .pipe(
      catchError((error)=>{
        return error
      })
    )
    .subscribe((response:any)=>{
      return response
    })

    return this.http.get(this.TMSLoginAPI +'/login', build)

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    if (!this.succeed) {
      this.router.navigateByUrl('');
    }
    return this.succeed
  }

}
