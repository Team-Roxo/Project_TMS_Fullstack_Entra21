import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { waitForDebugger } from 'inspector';
import { catchError, of } from 'rxjs';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  readonly TMSLoginAPI: string = "http://localhost:8080"

  emailReg!:string
  nameReg!:string
  userReg!:string
  passwordReg!:string

  user!:string
  password!:string

  constructor(private router:Router, public loginService:LoginserviceService, private http:HttpClient) { }

  ngOnInit(): void {
    this.loginService.succeed = false
    this.loginService.progress = false
  }

  submit():void{
    if(this.user != null && this.password != null){
      this.loginService.logging(this.user, this.password)
      .pipe()
      .subscribe((response:any)=>{
        console.log('Running...', response)
        if(response == ""){
          this.loginService.progress = false;
          alert("USUARIO OU SENHA ERRADOS")
        }else{
          this.loginService.succeed = true
          this.gotoHome()
        }
      });
    }else{
      alert('DIGITE TODOS OS CAMPOS OBRIGATÓRIOS!')
      this.loginService.progress = false
    }
  }

  gotoHome(){
    this.router.navigateByUrl('home')
  }

  register(){

    let email:boolean
    let user:boolean

    if(this.emailReg.match('@')){
      email = true
    }else{
      email = false
      console.log('FORMAÇÃO DE EMAIL ERRADO');
    }

    if(this.nameReg != null && email && this.passwordReg != null && this.userReg != null){

      let response:any = this.loginService.registering(this.nameReg, this.userReg , this.emailReg, this.passwordReg)

      console.log(response);

      let ID!:number;

      setTimeout(() =>{
        this.http.post(this.TMSLoginAPI+'/login', response)
      .subscribe((response:any)=>{
        console.log(response);

        if(response == ""){
          this.loginService.progress = false;
          alert("USUARIO OU SENHA ERRADOS")
        }else if(response.status == '500'){
          this.loginService.progress = false;
          console.log('Erro no Servidor! Por favor aguarde!');
        }
        else{
          ID = response[0].pessoa_id
          this.loginService.succeed = true
          this.gotoHome()
        }
      })
      setTimeout(()=>{
        this.http.get(this.TMSLoginAPI+'/user/'+ID)
        .subscribe((response:any)=>{
          console.log(response);
          this.loginService.user = response.nome
        })
      },500)

      },1500)

    }else{

      alert('DIGITE TODOS OS CAMPOS OBRIGATÓRIOS!')
      this.loginService.progress = false

    }
  }

}
