import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { LoginserviceService } from '../loginservice.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NotificationService } from '../notification.service';

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
  aniversariantesMes!: Array<any>
  notificacoes!:Array<any>
  notificationCount!:number
  id!: number
  nome!: string
  email!: string
  birth!: Date
  document!: string

  constructor(public loginService:LoginserviceService, private router:Router, private http:HttpClient, private notify:NotificationService) { }

  ngOnInit(): void {

    this.aniversariantes = new Array()
    this.aniversariantesMes = new Array()
    this.notificacoes = new Array()

    if(this.loginService.document == null || this.loginService.birth == null){
      this.notificacoes.push({title:"Complete seu Cadastro!", text:"Clique aqui para concluir!", route:"edit"})
    }

    this.http.get(this.APIBirthNow)
    .subscribe((resultado:any) => {

      var count = Object.keys(resultado).length

      for(let i=0;i<count;i++){

        if(resultado[i].id == this.loginService.pessoaID){
          this.notificacoes.push({title:"Hoje é seu Aniversário!", text:"Parabéns! Para comemorar temos algumas ofertas para você. Confira!", route:"ship-quote"})
        }

        this.aniversariantes.push({id: resultado[i].id ,nome: resultado[i].nome, email: resultado[i].email, birth: resultado[i].birth, document: resultado[i].document})

      }

    });

    this.http.get(this.APIBirthMonth)
    .subscribe((resultado:any) => {

      var count = Object.keys(resultado).length

      for(let i=0;i<count;i++){

        this.aniversariantesMes.push({id: resultado[i].id ,nome: resultado[i].nome, email: resultado[i].email, birth: resultado[i].birth, document: resultado[i].document})

      }

    });

    this.notificationCount = this.notificacoes.length

  }

  sair(){
    this.loginService.succeed = false;
  }
}
