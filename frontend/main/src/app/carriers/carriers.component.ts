import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carriers',
  templateUrl: './carriers.component.html',
  styleUrls: ['./carriers.component.css']
})
export class CarriersComponent implements OnInit {
  carriers!:Array<any>
  name!:string
  email!:string
  cnpj!:string
  
    constructor() { }
  
    ngOnInit(): void {
      this.carriers = new Array()
      this.carriers.push({name:"Total Express", email:"total@express.com", cnpj:"4564564566454655"})
      this.carriers.push({name:"Jadlog", email:"jadlog@jadlog.com", cnpj:"4564664656565456"})
      this.carriers.push({name:"Braspress", email:"braspress@braspress.com", cnpj:"1231323132312"})
      this.carriers.push({name:"Correios", email:"correios@correios.com", cnpj:"7897987899789"})
      
    }
  
    adicionar(){
      if(this.name){
        this.carriers.push({name:this.name, email:this.email, cnpj:this.cnpj})
        this.name ="" 
        this.email=""
        this.cnpj=""   
      }
      }
    
  
    deletar(index:number){
      this.carriers.splice(index,1)
    }
  
  }