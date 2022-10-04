import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(public usersService: UsersService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.users = new Array()
    this.usersService.listUsers().pipe().subscribe((response: any) => {

      console.log(response);  
      
      var count = Object.keys(response).length;

      for (let i = 0; i < count; i++) {

        this.name = response[i].nome;
        this.email = response[i].email;
        this.document = response[i].document;
        this.birth = response[i].birth;
        
    
        this.users.push({name:this.name, email:this.email, document:this.document, birth:this.birth});

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

    this.users.push({name:this.name, email:this.email, document:this.document, birth:this.birth});
  }

  deletar(){
    
  }

  alterar(){
    
  }
  

}
