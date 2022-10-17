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

  progress:number = -1
  succeed:number = -1
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
  carrier!: any

  constructor(private carrierService: CarrierService, private loginService: LoginserviceService, public quoteService: QuoteService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.recQuotes = new Array()

    this.progress = -1
    this.succeed = -1

     this.quoteService.recQuote()
     .pipe()
     .subscribe((response: any) => {

      console.log(response);

      var count = Object.keys(response).length;

      for (let i = 0; i < count; i++) {

        //  this.id = response[i].id
        //  this.price = response[i].price
        //  this.await = response[i].await
        //  this.origin = response[i].origin
        //  this.destiny = response[i].destiny
        //  this.cub_height = response[i].cub_height

        this.carrierService.findName(response[i].carrier_id).subscribe((resp:any) => {

        this.recQuotes.push({id: response[i].id, price: response[i].price, await: response[i].await, origin: response[i].origin, destiny: response[i].destiny, cub_height: response[i].cub_height, razaoTransportadora: resp.razao, carrier_id: resp.id, nomePessoa: this.loginService.nome})



         })

      }

     })

  }

  regPackage(id:number, price: number, time: number, origin: string, destiny: string, carrier_id: string, cub_height: number) {

    this.progress = id

    document.getElementById('load-screen')?.setAttribute('style', 'display: block')

    let build = {
      "price": price,
      "await": time,
      "origin": origin,
      "destiny": destiny,
      "carrier_id": carrier_id,
      "cub_height": cub_height,
      "pessoa_id": this.loginService.pessoaID
    }

    console.log(build);
    this.quoteService.regPackage(build)

    console.log(id);



    setTimeout(() => {
      document.getElementById('load-screen')?.setAttribute('style', 'display: none')
    }, 600);


    this.http.delete('http://34.95.208.13:8080/quote/recent/'+id).subscribe();

    setTimeout(()=>{
      this.succeed = id
      setTimeout(() => {
        this.ngOnInit()
      }, 3000);
    }, 1500)

  }

}
