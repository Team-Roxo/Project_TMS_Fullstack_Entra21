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

  readonly TMSLoginAPI: string = "http://localhost:8080"
  readonly APIBounceInit: string = "http://localhost:8080/login/init"

  //DADOS BÁSICOS
  nome!: string
  user!: string
  email!: string
  password!: string
  birth!: Date
  document!: string

  //DADOS DE CONTROLE
  succeed!: boolean
  progress!: boolean
  admin!: boolean
  enterprise!: boolean
  pessoaID!: number
  adminEnter:boolean = false

  //DADOS ESTATÍSTICOS
  idBounce!: number
  userBounce!: string
  dateBounce!: string
  timeBounce!: string

  constructor(private router: Router, private http: HttpClient) { }

  logging(user: string, password: string) {

    this.progress = true

    let build: any = {
      'user': user,
      'senha': password
    }

    this.http.post(this.TMSLoginAPI +'/login', build)
    .pipe(
      catchError((error)=>{
        this.progress = false
        return error
      })
    )
    .subscribe((response:any)=>{

      this.admin = response[0].admin
      this.enterprise = response[0].enterprise
      this.user = response[0].user

      if(this.admin == true){
        this.adminEnter = true;
        if(this.enterprise == true){
          this.adminEnter = true
        }
      }

      if(response == ""){
        this.progress = false;
        alert("USUARIO OU SENHA ERRADOS")
      }else{
        this.succeed = true
        new LoginComponent(this.router, this, this.http).gotoHome();
      }

      this.http.get(this.TMSLoginAPI+'/user/'+response[0].pessoa_id)
      .subscribe((resp:any) =>{
        console.log(resp);
        this.nome = resp.nome
        this.pessoaID = response[0].pessoa_id
        this.birth = resp.birth
        this.document = resp.document
        this.email = resp.email
        this.password = response[0].senha
      })

      let bounce: any = {
          "user": response[0].user
        }

        this.http.post(this.APIBounceInit, bounce)
          .subscribe((response: any) => {
            console.log(response);
            this.idBounce = response.id
            this.userBounce = response.user
            this.dateBounce = response.date
            this.timeBounce = response.time
          })
      })
  }

  registering(name: string, user: string, email: string, password: string) {

    this.progress = true

    let build: any = {
      'nome': name,
      'user': user,
      'email': email,
      'senha': password
    }

    let buildLogin: any = {
      'user': user,
      'senha': password
    }

    this.http.post(this.TMSLoginAPI + '/register', build)
      .pipe(
        catchError((error) => {
          return error
        })
      )
      .subscribe((response) => {
        buildLogin = response
        return buildLogin
      })

    return buildLogin

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    if (!this.succeed) {
      this.router.navigateByUrl('');
    }
    return this.succeed
  }

}
