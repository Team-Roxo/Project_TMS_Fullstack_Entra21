import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { LoginserviceService } from '../loginservice.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, Observable } from 'rxjs';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  readonly APIBirthNow: string = "http://34.95.208.13:8080/user/birthnow"

  readonly APIBirthMonth: string = "http://34.95.208.13:8080/user/birthmonth"

  birthnow!: string
  birthmonth!: string
  aniversariantes: Array<any> = new Array()
  aniversariantesMes: Array<any> = new Array()
  notificacoes: Array<any> = new Array()
  notificationCount!: number
  id!: number
  nome!: any
  email!: string
  birth!: string
  document!: string

  constructor(public loginService: LoginserviceService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {

    this.notificacoes = new Array()

    setTimeout(() => {
      this.notification()
    }, 450);

  }

  notification() {

    if (this.loginService.succeed == true) {

      try{
        this.nome = this.loginService.nome.split(' ').at(0)
        this.nome += ' '+this.loginService.nome.split(' ').at(1)?.split('').at(0)?.toUpperCase()+'.'
      }catch{
        this.nome = this.loginService.nome
      }

      setTimeout(() => {

        if (!this.loginService.birth) {
          this.notificacoes.push({ title: "Complete seu Cadastro!", text: "Clique aqui para concluir!", route: "edit" })
        }else if(!this.loginService.document){
          this.notificacoes.push({ title: "Complete seu Cadastro!", text: "Clique aqui para concluir!", route: "edit" })
        }
         else {
          console.log('DOCUMENTOS CORRETOS!');
        }

        // if (this.loginService.document) {
        //   console.log('DOCUMENTOS CORRETOS!');
        // } else {
        //   this.notificacoes.push({ title: "Complete seu Cadastro!", text: "Clique aqui para concluir!", route: "edit" })
        // }

      }, 500);

      this.http.get(this.APIBirthNow)
        .subscribe((resultado: any) => {

          var count = Object.keys(resultado).length

          for (let i = 0; i < count; i++) {

            if (resultado[i].id === this.loginService.pessoaID) {
              this.notificacoes.push({ title: "Hoje é seu Aniversário!🥳🎉", text: "Parabéns, "+this.loginService.nome.split(' ').at(0)+"! Para comemorar temos algumas ofertas especiais para você. Confira!🤩", route: "ship-quote" })
            }
          }

        })

        this.http.get(this.APIBirthMonth)
      .subscribe((resultado: any) => {

        var count = Object.keys(resultado).length

        for (let i = 0; i < count; i++) {

          this.aniversariantesMes.push({ id: resultado[i].id, nome: resultado[i].nome, email: resultado[i].email, birth: resultado[i].birth, document: resultado[i].document })

          if (resultado[i].id === this.loginService.pessoaID) {
            this.notificacoes.push({ title: "Seu aniversário é esse mês!🥳🎉", text: "Parabéns, "+this.loginService.nome.split(' ').at(0)+"! Esse mês você terá ofertas feitas apenas para você!🤑 Confira!🤩", route: "ship-quote" })
          }

        }

      });

      setTimeout(() => {

        this.notificationCount = this.notificacoes.length

        if (this.notificationCount === 0) {
          this.notificacoes.push({ title: 'Tudo certo por aqui, '+this.loginService.nome.split(' ').at(0)+'!', text: 'Te avisaremos qualquer coisa! 😉', route:'#' })
        }

      }, 600);

    }

    if(this.loginService.succeed == false){
      this.ngOnInit();
    }

  }

  sair() {
    this.loginService.succeed = false;
    this.ngOnInit();
  }
}
