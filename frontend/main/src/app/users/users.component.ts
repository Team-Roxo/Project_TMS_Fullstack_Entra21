import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
users!:Array<any>
name!:string
email!:string
document!:string
birth!:string
id!: number

  constructor(public usersService: UsersService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.users = new Array()
    this.usersService.listUsers().pipe(
      catchError((error)=>{
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


        this.users.push({id: this.id, name:this.name, email:this.email, document:this.document, birth:this.birth});

      }

        this.name = "";
        this.email = "";
        this.document = "";
        this.birth = "";

    })

  }

  adicionar(name: string, email: string, document: string, birth: string) {


    let build ={
      "nome":name,
      "email":email,
      "document":document,
      // "birth":birth,

    }

    this.usersService.adicionar(build)

    setTimeout(() => {
      this.ngOnInit();
    }, 500);

  //  this.users.push({name:this.name, email:this.email, document:this.document, birth:this.birth});
  }

  deletar(id:number){

    console.log(id);

  this.http.delete('http://35.199.78.13:8080/user/'+id).subscribe();

  setTimeout(() => {
    this.ngOnInit();
  }, 500);

  }

  alterar(id:number, name:string, email:string, document:string, birth:string){

    console.log("É TETRA");
      let build ={
        "id": id,
        "nome":name,
        "email":email,
        "document": document,
        "birth": birth
      }

    this.http.put('http://35.199.78.13:8080/user',build)
    .subscribe((response)=>{


    console.log(response);

    })

    setTimeout(() => {
      this.ngOnInit();
    }, 500);

  }

  openModal(){

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

  closeModal(){
    var modal = document.getElementById('modal2')

    modal?.setAttribute('class', 'portfolio-modal modal fade')
    setTimeout(()=>{
      modal?.setAttribute('style', 'display:none;')
    },500)

  }

  openModalEdit(id:number, name:string, email:string, documents:string, birth:string){

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

  closeModalEdit(){
    var modal = document.getElementById('modal3')

    modal?.setAttribute('class', 'portfolio-modal modal fade')
    setTimeout(()=>{
      modal?.setAttribute('style', 'display:none;')
    },500)

  }


}
