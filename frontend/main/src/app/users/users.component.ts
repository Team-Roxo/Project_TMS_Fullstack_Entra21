import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { LoginserviceService } from '../loginservice.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users!: Array<any>
  name!: string
  email!: string
  document!: string
  birth!: string
  id!: number

  constructor(public usersService: UsersService, private router: Router, private http: HttpClient, public login: LoginserviceService) { }

  ngOnInit(): void {
    this.users = new Array()

    if (!this.login.admin) {

      this.usersService.getLinks()
        .pipe(
          catchError((error) => {
            return error
          })

        ).subscribe((response: any) => {

          var count = Object.keys(response).length;

          for (let i = 0; i < count; i++) {

            this.usersService.listUsersByLink(response[i].receiver)
              .subscribe((result: any) => {

                console.log(result);

                this.id = result.id;
                this.name = result.nome;
                this.email = result.email;
                this.document = result.document;
                this.birth = result.birth;

                this.users.push({ id: this.id, name: this.name, email: this.email, document: this.document, birth: this.birth });
              })

          }

          this.name = "";
          this.email = "";
          this.document = "";
          this.birth = "";

        })

    } else {

      this.usersService.listUsers()
        .pipe(
          catchError((error) => {
            return error
          })

        ).subscribe((response: any) => {

          console.log(response);

          var count = Object.keys(response).length;

          for (let i = 0; i < count; i++) {

            this.id = response[i].id;
            this.name = response[i].nome;
            this.email = response[i].email;
            this.document = response[i].document;
            this.birth = response[i].birth;

            this.users.push({ id: this.id, name: this.name, email: this.email, document: this.document, birth: this.birth });

          }

          this.name = "";
          this.email = "";
          this.document = "";
          this.birth = "";

        })

    }

  }

  adicionar(name: string, email: string, documento: string, birth: string) {

    this.http.put('http://34.95.208.13:8080/user/disbounce/' + this.login.idBounce, null)
      .subscribe((response) => {
        console.log(response);
      })

    let build = {
      "nome": name,
      "email": email,
      "document": documento,
      "birth": birth
    }

    this.usersService.adicionar(build)

    document.getElementById('load-screen')?.setAttribute('style', 'display: block')

    setTimeout(() => {
      document.getElementById('load-screen')?.setAttribute('style', 'display: none')
    }, 600);

    setTimeout(() => {
      this.ngOnInit();
    }, 500);

    //  this.users.push({name:this.name, email:this.email, document:this.document, birth:this.birth});
  }

  deletar(idReceiver: number, idSender: number) {

    this.http.put('http://34.95.208.13:8080/user/disbounce/' + this.login.idBounce, null)
      .subscribe((response) => {
        console.log(response);
      })

    if (this.login.admin) {
      this.http.delete('http://34.95.208.13:8080/user/links/' + idReceiver + '/' + idSender).subscribe();
      this.http.delete('http://34.95.208.13:8080/user/' + idReceiver).subscribe();
      console.log('DELETE EXECUTA BY ADMIN');

    } else {
      this.http.delete('http://34.95.208.13:8080/user/links/' + idReceiver + '/' + idSender).subscribe();
      console.log('DELETE EXECUTA BY CLIENT');
    }

    document.getElementById('load-screen')?.setAttribute('style', 'display: block')

    setTimeout(() => {
      document.getElementById('load-screen')?.setAttribute('style', 'display: none')
    }, 600);

    setTimeout(() => {
      this.ngOnInit();
    }, 500);

  }

  alterar(id: number, name: string, email: string, document: string, birth: string) {

    this.http.put('http://34.95.208.13:8080/user/disbounce/' + this.login.idBounce, null)
      .subscribe((response) => {
        console.log(response);


      })

    let build = {
      "id": id,
      "nome": name,
      "email": email,
      "document": document,
      "birth": birth
    }

    this.http.put('http://34.95.208.13:8080/user', build)
      .subscribe((response) => {

        console.log(response);


      })



    setTimeout(() => {
      this.ngOnInit();
    }, 500);



  }

  openModal() {

    this.name = ""
    this.email = ""
    this.document = ""
    this.birth = ""

    var modal = document.getElementById('modal2')

    modal?.setAttribute('style', 'display:block;')

    modal?.setAttribute('class', 'portfolio-modal modal fade show')
    modal?.removeAttribute('aria-hidden')

    modal?.setAttribute('arial-modal', 'true')

  }

  closeModal() {
    var modal = document.getElementById('modal2')

    modal?.setAttribute('class', 'portfolio-modal modal fade')
    setTimeout(() => {
      modal?.setAttribute('style', 'display:none;')
    }, 500)

  }

  openModalEdit(id: number, name: string, email: string, documents: string, birth: string) {

    this.id = id
    this.name = name
    this.email = email
    this.document = documents
    this.birth = birth

    var modal = document.getElementById('modal3')

    modal?.setAttribute('style', 'display:block;')

    modal?.setAttribute('class', 'portfolio-modal modal fade show')
    modal?.removeAttribute('aria-hidden')

    modal?.setAttribute('arial-modal', 'true')

  }

  closeModalEdit() {
    var modal = document.getElementById('modal3')

    modal?.setAttribute('class', 'portfolio-modal modal fade')
    setTimeout(() => {
      modal?.setAttribute('style', 'display:none;')
    }, 500)

  }


}
