import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  taxValorFrete!:number
  
    constructor(
      private router:Router
    ) { }
  
    ngOnInit(): void {
      this.carriers = new Array()
      this.carriers.push({name:"Total Express", email:"total@express.com", cnpj:"4564564566454655", taxValorFrete:0.081})
      this.carriers.push({name:"Jadlog", email:"jadlog@jadlog.com", cnpj:"4564664656565456", taxValorFrete:0.084})
      this.carriers.push({name:"Braspress", email:"braspress@braspress.com", cnpj:"1231323132312", taxValorFrete:0.089})
      this.carriers.push({name:"Correios", email:"correios@correios.com", cnpj:"7897987899789", taxValorFrete:0.078})
      
    }
  
    adicionar(){
      if(this.name){
        this.carriers.push({name:this.name, email:this.email, cnpj:this.cnpj, taxValorFrete:this.taxValorFrete})
        this.name ="" 
        this.email=""
        this.cnpj="" 
        this.taxValorFrete= 0  
      }
      let listaCarrier:any = [
        {name:this.name, email:this.email, cnpj:this.cnpj, taxValorFrete:this.taxValorFrete}
      ]
      this.router.navigate(['ship-qt', JSON.stringify(listaCarrier)])
      }
    
  
    deletar(index:number){
      this.carriers.splice(index,1)
    }

    alterar(index:number){
    //  this.carriers.splice(index,1)
    }
  
  }