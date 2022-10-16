import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  readonly TMSLoginAPI: string = "http://34.95.208.13:8080"



  user!:string
  password!:string

  constructor(private router:Router, public loginService:LoginserviceService, private http:HttpClient) { }

  ngOnInit(): void {
  }

  submit():void{

    if(this.user != null && this.password != null){

      this.loginService.logging(this.user, this.password)

    }else{

      alert('DIGITE TODOS OS CAMPOS OBRIGATÓRIOS!')
      this.loginService.progress = false

    }
  }}
