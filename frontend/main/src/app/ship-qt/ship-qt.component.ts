import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, of } from 'rxjs';
import { CarriersComponent } from '../carriers/carriers.component';
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
  trackid!: string
  startAdress!: string
  endAdress!: string
  durationTime!:number
  distanceKm!:string

  constructor(
    public quoteService: QuoteService, private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.quotes = new Array();
    //this.quotes.push({ precoFrete: 45.50, tempo: 3, trackid: "BR23154546TR", cepOrigem: 88058086, cepDestino: 88058086, comprimento: 50, largura: 50, altura: 50, peso: 10 })
    //this.quotes.push({ precoFrete: 94.50, tempo: 6, trackid: "BR22315445TR", cepOrigem: 46513265, cepDestino: 65898454, comprimento: 100, largura: 200, altura: 10, peso: 25 })

  }

  quote() {
    if (this.cepOrigem != null && this.cepDestino != null) {
      this.quoteService.quote(this.cepOrigem, this.cepDestino)
        .pipe()
        .subscribe((response: any) => {
          console.log(response);
          console.log(response.routes[0].legs[0].duration.text);
          console.log(response.routes[0].legs[0].distance.text);
          console.log(response.routes[0].legs[0].start_address);
          console.log(response.routes[0].legs[0].end_address);

          this.durationTime = response.routes[0].legs[0].duration.value;
          this.distanceKm = response.routes[0].legs[0].distance.value;
          this.startAdress = response.routes[0].legs[0].start_address;
          this.endAdress = response.routes[0].legs[0].end_address;



          this.precoFrete = (parseFloat(this.distanceKm)/1000) * 0.081;
          console.log(this.precoFrete);
          this.durationTime = Math.ceil((parseFloat(this.distanceKm)/500)/1000);
          console.log(this.durationTime);

          this.quotes.push({precoFrete:this.precoFrete, durationTime:this.durationTime, startAdress:this.startAdress, endAdress:this.endAdress, comprimento:this.comprimento, largura:this.largura, altura:this.altura, peso:this.peso})
        })
    } else {
      alert('DIGITE TODOS OS DADOS!')
    }

  }

}
