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
  tempo!: string
  trackid!: string

  constructor(public quoteService:QuoteService) {}

  ngOnInit(): void {

   //this.quotes.push({ precoFrete: 45.50, tempo: 3, trackid: "BR23154546TR", cepOrigem: 88058086, cepDestino: 88058086, comprimento: 50, largura: 50, altura: 50, peso: 10 })
   //this.quotes.push({ precoFrete: 94.50, tempo: 6, trackid: "BR22315445TR", cepOrigem: 46513265, cepDestino: 65898454, comprimento: 100, largura: 200, altura: 10, peso: 25 })

  }

  quote() {

    if(this.cepOrigem != null && this.cepDestino != null){
      this.quoteService.quote(this.cepOrigem, this.cepDestino)
      .pipe()
      .subscribe((response:any) => {
        console.log(response);
        console.log(response.rows);
        console.log(response.rows);
        alert(`${response.rows.elements.duration.text}`)
      })
    }else{
      alert('DIGITE TODOS OS DADOS!')
    }

  }

}
