import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { LoginserviceService } from '../loginservice.service';
import * as $ from 'jquery'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailReg!:string
  nameReg!:string
  passwordReg!:string

  user!:string
  password!:string

  constructor(private router:Router, private loginService:LoginserviceService) { }

  ngOnInit(): void {
    this.loginService.succeed = false
    document.addEventListener("keypress", function(e){
      if(e.key === 'Enter'){
        $('#submitButton')
        alert('Ainda na luta pra fazer funcionar esse button pelo Enter')
      }
    })
  }

  submit():void{
    if(this.user != null && this.password != null){
      this.loginService.logging(this.user, this.password)
      .pipe(
        catchError((error)=>{
          return of(['Deu erro parcero é isso', 'tu não vai encontrar detalhe aqui','pode sair já...', error, 'só pq sou teu amigo vou deixar esse error ai'])
        })
      )
      .subscribe((response)=>{
        console.log('Running...', response);
      });
    }else{
      alert('DIGITE TODOS OS CAMPOS OBRIGATÓRIOS!')
    }
  }

  gotoHome(){
    this.router.navigateByUrl('home')
  }

  register(){
    if(this.nameReg != null && this.passwordReg != null && this.emailReg != null){
      this.loginService.succeed = true
      this.router.navigateByUrl('home')
      this.loginService.registering(this.nameReg, this.nameReg, this.passwordReg)
    }else{
      alert('DIGITE TODOS OS CAMPOS OBRIGATÓRIOS!')
    }

  }

}
