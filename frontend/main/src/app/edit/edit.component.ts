import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id!: number
  name!: string
  user!: string
  birth!: string
  document!: string
  email!: string
  password!: string

  editPessoa: any
  editLogin: any
  api: string = "http://34.95.208.13:8080/user"
  api2: string = "http://34.95.208.13:8080/login"

  constructor(private router: Router, private login: LoginserviceService, private http: HttpClient) { }

  ngOnInit(): void {

    this.user = this.login.user
    this.name = this.login.nome
    this.birth = this.login.birth
    this.document = this.login.document
    this.email = this.login.email
    this.password = this.login.password
    this.id = this.login.pessoaID

  }

  alterar(id: number, name: string, email: string, birth: string, document: string, user: string, password: string) {
    console.log(this.login.pessoaID);
    console.log(name);
    console.log(email);
    console.log(document);
    console.log(birth);

    let build = {
      "id": id,
      "nome": name,
      "email": email,
      "document": document,
      "birth": birth
    }

    let build2 = {
      "id": this.login.idBounce,
      "user": user,
      "senha": password,
      "admin": this.login.admin,
      "enterprise": this.login.enterprise
    }

    this.http.put(this.api, build)
      .subscribe((response) => {
        console.log(response);
      })

    this.http.put(this.api2, build2)
      .subscribe((response) => {
        console.log(response);
      })

    console.log(this.login.idBounce);

    setTimeout(() => {
      this.login.logging(user, password);
    }, 500);

    this.http.put('http://34.95.208.13:8080/user/disbounce/'+this.login.idBounce, null)
    .subscribe((response)=>{
      console.log(response);
    })

  }

}
