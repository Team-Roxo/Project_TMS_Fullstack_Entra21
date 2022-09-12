import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { LoginserviceService } from '../loginservice.service';

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

  constructor(private router:Router, public loginService:LoginserviceService) { }

  ngOnInit(): void {
    this.loginService.succeed = false
    this.loginService.progress = false
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
      this.loginService.progress = false
    }
  }

  gotoHome(){
    this.router.navigateByUrl('home')
  }

  register(){
    if(this.nameReg != null && this.emailReg != null && this.passwordReg != null){
      this.loginService.registering(this.nameReg, this.emailReg, this.passwordReg)
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
      this.loginService.progress = false
    }
  }

}
