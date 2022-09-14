import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InjectSetupWrapper } from '@angular/core/testing';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService implements CanActivate {

  user!: string
  TMSLoginAPI: string = "https://randomuser.me/api/?results=1"
  succeed!: boolean
  progress: boolean = false

  constructor(private router: Router, private http: HttpClient) { }

  logging(user: string, password: string) {
    this.progress = true
    fetch(this.TMSLoginAPI)
      .then((resp) => resp.json())
      .then((data) => {
        let ranUsers = data.results;
        return ranUsers.map((ranUser: any) => {
          this.user = `${ranUser.name.first}`
          this.succeed = true
          new LoginComponent(this.router, this).gotoHome()
        })
      })
      .catch((error) => {
        console.log(error);
        this.progress = false
      })

    return this.http.get<any>(this.TMSLoginAPI + '/' + user + '/' + password)
  }

  registering(user: string, password: string, email: string) {
    this.progress = true
    fetch(this.TMSLoginAPI)
      .then((resp) => resp.json())
      .then((data) => {
        let ranUsers = data.results;
        return ranUsers.map((ranUser: any) => {
          this.user = `${ranUser.name.first}`
          this.succeed = true
          new LoginComponent(this.router, this).gotoHome()
        })
      })
      .catch((error) => {
        console.log(error);
        this.progress = false
      })

    return this.http.get<any>(this.TMSLoginAPI + '/' + user + '/' + password)

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    if (!this.succeed) {
      this.router.navigateByUrl('');
    }
    return this.succeed
  }

}
