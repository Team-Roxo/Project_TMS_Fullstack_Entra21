import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarrierService } from '../carrier.service';
import { LoginserviceService } from '../loginservice.service';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-rct-qt',
  templateUrl: './rct-qt.component.html',
  styleUrls: ['./rct-qt.component.css']
})
export class RctQtComponent implements OnInit {


  recQuotes!: Array<any>
  id!: number
  price!: number
  await!: number
  origin!: string
  destiny!: string
  carrier_id!: number
  cub_height!: number
  pessoa_id!: number
  nomePessoa!: string
  razaoTransportadora!: string
  


  constructor(private loginService: LoginserviceService, public quoteService: QuoteService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.recQuotes = new Array()

     this.quoteService.recQuote().pipe().subscribe((response: any) => {

      console.log(response);
      
      var count = Object.keys(response).length;

      for (let i = 0; i < count; i++) {

         this.id = response[i].id
         this.price = response[i].price
         this.await = response[i].await
         this.origin = response[i].origin
         this.destiny = response[i].destiny
         this.cub_height = response[i].cub_height

         this.recQuotes.push({id: this.id, price: this.price, await: this.await, origin: this.origin, destiny: this.destiny, cub_height: this.cub_height, razaoTransportadora: "ABC", nomePessoa: "Mateus"})
         

      }

      console.log();
      

     }) 
  }


  regPackage(price: number, time: number, origin: string, destiny: string, carrier_id: number, cub_height: number, pessoa_id: number) {

    let build = {
      "price": price,
      "await": time,
      "origin": origin,
      "destiny": destiny,
      "carrier_id": carrier_id,
      "cub_height": cub_height,
      "pessoa_id": pessoa_id
    }

    console.log(build);
    
    this.quoteService.regPackage(build)




  }

}
