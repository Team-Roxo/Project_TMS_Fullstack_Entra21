import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { AboutService } from '../about.service';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  abouts!: Array<any>
  body!: string
  bruno_funcao!: string
  bruno_nome!: string
  cristian_funcao!: string
  cristian_nome!: string
  kalil_funcao!: string
  kalil_nome!: string
  mateus_funcao!: string
  mateus_nome!: string
  sub_titulo!: string
  titulo!: string

  bruno_email!: string
  bruno_foto!: string
  bruno_github!: string
  bruno_linkedin!: string

  cristian_email!: string
  cristian_foto!: string
  cristian_github!: string
  cristian_linkedin!: string

  kalil_email!: string
  kalil_foto!: string
  kalil_github!: string
  kalil_linkedin!: string

  mateus_email!: string
  mateus_foto!: string
  mateus_github!: string
  mateus_linkedin!: string





  constructor(public aboutService: AboutService, private router: Router, private http: HttpClient, private login:LoginserviceService) { }

  ngOnInit(): void {

    this.http.put('http://34.95.208.13:8080/user/disbounce/'+this.login.idBounce, null)
    .subscribe((response)=>{
      console.log(response);
    })

    this.abouts = new Array()

    this.aboutService.listAbout().pipe(
      catchError((error) => {
        return error
      })

    ).subscribe((response: any) => {
      console.log(response);

      var count = Object.keys(response).length

      for (let i = 0; i < count; i++) {

        this.body = response[i].body;
        this.bruno_funcao = response[i].brunoFuncao;
        this.bruno_nome = response[i].brunoNome;
        this.cristian_funcao = response[i].cristianFuncao;
        this.cristian_nome = response[i].cristianNome;
        this.kalil_funcao = response[i].kalilFuncao;
        this.kalil_nome = response[i].kalilNome;
        this.mateus_funcao = response[i].mateusFuncao;
        this.mateus_nome = response[i].mateusNome;
        this.sub_titulo = response[i].subTitulo;
        this.titulo = response[i].titulo;

        this.bruno_email = response[i].brunoEmail;
        this.bruno_foto = response[i].brunoFoto;
        this.bruno_github = response[i].brunoGithub;
        this.bruno_linkedin = response[i].brunoLinkedin;

        this.cristian_email = response[i].cristianEmail;
        this.cristian_foto = response[i].cristianFoto;
        this.cristian_github = response[i].cristianGithub;
        this.cristian_linkedin = response[i].cristianLinkedin;

        this.kalil_email = response[i].kalilEmail;
        this.kalil_foto = response[i].kalilFoto;
        this.kalil_github = response[i].kalilGithub;
        this.kalil_linkedin = response[i].kalilLinkedin;

        this.mateus_email = response[i].mateusEmail;
        this.mateus_foto = response[i].mateusFoto;
        this.mateus_github = response[i].mateusGithub;
        this.mateus_linkedin = response[i].mateusLinkedin;





        console.log(response);


        this.abouts.push({ mateus_linkedin: this.mateus_linkedin, mateus_github: this.mateus_github, mateus_foto: this.mateus_foto, mateus_email: this.mateus_email, kalil_linkedin: this.kalil_linkedin, kalil_github: this.kalil_github, kalil_foto: this.kalil_foto, kalil_email: this.kalil_email, cristian_linkedin: this.cristian_linkedin, cristian_github: this.cristian_github, cristian_foto: this.cristian_foto, cristian_email: this.cristian_email, bruno_linkedin: this.bruno_linkedin, bruno_github: this.bruno_github, bruno_foto: this.bruno_foto, bruno_email: this.bruno_email, body: this.body, bruno_funcao: this.bruno_funcao, bruno_nome: this.bruno_nome, cristian_funcao: this.cristian_funcao, cristian_nome: this.cristian_nome, kalil_funcao: this.kalil_funcao, kalil_nome: this.kalil_nome, mateus_funcao: this.mateus_funcao, mateus_nome: this.mateus_nome, sub_titulo: this.sub_titulo, titulo: this.titulo })


      }






    })

  }

}
