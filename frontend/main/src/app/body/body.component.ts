import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { LoginserviceService } from '../loginservice.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  readonly APIBirthNow: string = "http://localhost:8080/user/birthnow" 
 
  readonly APIBirthMonth: string = "http://localhost:8080/user/birthmonth" 

  birthnow! : string
  birthmonth! : string
  aniversariantes!: Array<any>
  id!: number
  nome!: string
  email!: string 
  birth!: Date
  document!: string

  constructor(public loginService:LoginserviceService, private router:Router, private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.APIBirthNow)
    .subscribe((resultado:any) => {
     this.birthnow = resultado
    });

    this.http.get(this.APIBirthMonth)
    .subscribe((resultado:any) => {
     this.birthmonth=resultado
    });



  }

  sair(){

    this.loginService.succeed = false;

  }

  aniversariante(){
    this.aniversariantes.push ({id: this.id ,nome: this.nome, email: this.email, birth: this.birth, document: this.document})
  }

}
