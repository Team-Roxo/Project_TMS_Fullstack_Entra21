import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
name!:string
user!:string
birth!:string
document!:string
email!:string
password!:string
  edit: any;



  constructor(
    private router:Router,
  private login: LoginserviceService

  ) { }

  ngOnInit(): void {

this.user= this.login.user
this.name= this.login.nome
this.birth= this.login.birth
this.document= this.login.document
this.email= this.login.email
this.password = this.login.password

  }


  alterar(){
    alert("Funcionou!!!")
    //this.edit.splice()
  }


}
