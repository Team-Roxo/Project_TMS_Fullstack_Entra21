import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-packreg',
  templateUrl: './packreg.component.html',
  styleUrls: ['./packreg.component.css']
})
export class PackregComponent implements OnInit {

  registers!:Array<any>
cd!:string
origem!:string
destino!:string
dimensao!:string

  constructor() { }

  ngOnInit(): void {
    this.registers = new Array()
    this.registers.push({cd:"Total Express", origem:"Blumenau", destino:"Fortaleza", dimensao:"Grande"})
    this.registers.push({cd:"Jadlog", origem:"Florianópolis", destino:"Rio de Janeiro", dimensao:"Pequeno"})
    this.registers.push({cd:"Braspress", origem:"São Paulo", destino:"Porto Alegre", dimensao:"Médio"})
    this.registers.push({cd:"Correios", origem:"Brusque", destino:"Florianópolis", dimensao:"Pequeno"})
    
  }

  adicionar(){
    if(this.cd){
      this.registers.push({cd:this.cd, origem:this.origem, destino:this.destino, dimensao:this.dimensao})
      this.cd = "" 
      this.origem=""
      this.destino=""   
      this.dimensao=""   
    }
    }
  

  deletar(index:number){
    this.registers.splice(index,1)
  }

}
