import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
users!:Array<any>
name!:string
email!:string
cpf!:string

  constructor() { }

  ngOnInit(): void {
    this.users = new Array()
    this.users.push({name:"Mateus Felipe", email:"mateusgoettems@gmail.com", cpf:"03215415454"})
    this.users.push({name:"Bruno Roberto", email:"bruno@gmail.com", cpf:"03215415454"})
    this.users.push({name:"Cristian Schaufer", email:"cristian@gmail.com", cpf:"03215415454"})
    this.users.push({name:"Kalil", email:"kalil@gmail.com", cpf:"03215415454"})

  }

  adicionar(){
    if(this.name != null && this.email != null && this.cpf != null){
      this.users.push({name:this.name, email:this.email, cpf:this.cpf})
      this.name =""
      this.email=""
      this.cpf=""
    }else{
      alert('DIGITE TODOS OS DADOS!')
    }
    }


  deletar(index:number){
    this.users.splice(index,1)
  }

  alterar(index:number){
   // this.users.splice(index,1)
  }


}
