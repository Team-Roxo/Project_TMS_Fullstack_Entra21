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
  userReg!:string
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
    if(this.nameReg != null && this.emailReg != null && this.passwordReg != null && this.userReg != null){
      this.loginService.registering(this.nameReg, this.userReg , this.emailReg, this.passwordReg)
      .pipe(
        catchError((error)=>{
          return of(['Error!', error])
        })
      )
      .subscribe((response:any)=>{
        console.log(response);

        console.log('Successful Login!');
        if(response == ""){
          this.loginService.progress = false;
          alert("ERRO!")
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

}