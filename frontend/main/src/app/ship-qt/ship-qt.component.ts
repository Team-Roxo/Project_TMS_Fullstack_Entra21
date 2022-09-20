import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, of } from 'rxjs';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-ship-qt',
  templateUrl: './ship-qt.component.html',
  styleUrls: ['./ship-qt.component.css']
})

export class ShipQtComponent implements OnInit {
  quotes!: Array<any>
  cepOrigem!: string
  cepDestino!: string
  comprimento!: number
  largura!: number
  altura!: number
  peso!: number
  precoFrete!: number
  tempo!: number
  end_address!:string
  start_adress!:string
  taxQuote!:number
  carrier!:string
  vol!:number
  cubagem!:number
  priceFix!:number
  fatorCub!:number


  constructor(public quoteService:QuoteService) {}

  ngOnInit(): void {
    this.quotes = new Array()
   //this.quotes.push({ precoFrete: 45.50, tempo: 3, trackid: "BR23154546TR", cepOrigem: 88058086, cepDestino: 88058086, comprimento: 50, largura: 50, altura: 50, peso: 10 })
   //this.quotes.push({ precoFrete: 94.50, tempo: 6, trackid: "BR22315445TR", cepOrigem: 46513265, cepDestino: 65898454, comprimento: 100, largura: 200, altura: 10, peso: 25 })

  }

  quote() {

    if(this.cepOrigem != null && this.cepDestino != null){
      this.quoteService.quote(this.cepOrigem, this.cepDestino)
      .pipe()
      .subscribe((response:any) => {
        console.log(response);
        console.log(response.routes[0].legs[0].distance.value);
        console.log(response.routes[0].legs[0].duration.value);

        this.fatorCub = 300; //fator cubado - rodoviário
        this.taxQuote = 0.041;
        this.carrier= "Total Express";
        this.priceFix = 14.55;

        this.start_adress = response.routes[0].legs[0].start_address;
        this.end_address = response.routes[0].legs[0].end_address;

        this.vol = (this.comprimento*this.altura*this.largura)/1000000;

        this.cubagem = this.vol*this.fatorCub;
        console.log(this.cubagem);
        

        this.tempo = Math.ceil((((response.routes[0].legs[0].distance.value)/1000)/80)/7); //dividido por 1000 para converter, /80 velocidade med, /7 horas diárias
        this.precoFrete = this.priceFix + ((response.routes[0].legs[0].distance.value/10000)*this.taxQuote)*(this.cubagem);

        console.log(this.tempo);
        console.log(this.precoFrete); 
        
      

        

       // this.quotes.push({precoFrete:this.precoFrete, tempo:this.tempo , start_adress:this.start_adress, end_address:this.end_address})
        this.quotes.push({precoFrete:this.precoFrete, tempo:this.tempo , start_adress:this.start_adress, end_address:this.end_address, carrier:this.carrier, vol:this.vol, cubagem:this.cubagem});
        this.cepDestino=""
        this.cepOrigem=""
        this.comprimento=0
        this.largura=0
        this.altura=0
        this.peso=0


      })
    }else{
      alert('DIGITE TODOS OS DADOS!')
    }

  }

}
