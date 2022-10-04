import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { arrayBuffer, json } from 'stream/consumers';
import { CarrierService } from '../carrier.service';
import { LoginComponent } from '../login/login.component';
import { LoginserviceService } from '../loginservice.service';
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
  end_address!: string
  start_adress!: string
  taxQuote!: number
  carrier!: string
  vol!: number
  cubagem!: number
  priceFix!: number
  fatorCub!: number
  distance!: number
  carrierData = [];

  APIBouncePut:string = "http://localhost:8080/user/disbounce/"
  newBounce!:any


  constructor(public loginService: LoginserviceService, public carrierService: CarrierService, public quoteService: QuoteService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.quotes = new Array()
    //this.quotes.push({ precoFrete: 45.50, tempo: 3, trackid: "BR23154546TR", cepOrigem: 88058086, cepDestino: 88058086, comprimento: 50, largura: 50, altura: 50, peso: 10 })
    //this.quotes.push({ precoFrete: 94.50, tempo: 6, trackid: "BR22315445TR", cepOrigem: 46513265, cepDestino: 65898454, comprimento: 100, largura: 200, altura: 10, peso: 25 })

  }

  quote() {

    //ATUALIZA BOUNCE
    new LoginserviceService(this.router, this.http)

    this.newBounce = {
      "id":this.loginService.idBounce,
      "user":this.loginService.userBounce,
      "date":this.loginService.dateBounce,
      "time":this.loginService.timeBounce,
      "bounce_rate":false
    }

    console.log(this.newBounce);

    this.http.post(this.APIBouncePut+this.loginService.idBounce, this.newBounce)
    //FIM DO BOUNCE

    if (this.cepOrigem != null && this.cepDestino != null && this.comprimento != null, this.altura != null, this.largura != null, this.peso != null) {
      this.quoteService.quote(this.cepOrigem, this.cepDestino)
        .pipe()
        .subscribe((response: any) => {

          console.log(response);

          //variaveis fixas
          this.fatorCub = 300; //fator cubado - rodoviário
          this.priceFix = 14.55;

          //variaveis google
          this.start_adress = response.routes[0].legs[0].start_address;
          this.end_address = response.routes[0].legs[0].end_address;
          this.distance = (response.routes[0].legs[0].distance.value);

          //cálculos
          this.vol = (this.comprimento * this.altura * this.largura) / 1000000; //conversão em m³
          this.cubagem = this.vol * this.fatorCub;
          this.tempo = Math.ceil((((this.distance) / 1000) / 80) / 7); //dividido por 1000 para converter, /80 velocidade med, /7 horas diárias

          //dados da transportadora
          this.carrierService.listCarrier().pipe().subscribe((response: any) => {

            var count = Object.keys(response).length;

            for (let i = 0; i < count; i++) {

              console.log(response[i].taxa);

              console.log(this.priceFix + this.distance * response[i].taxa * this.cubagem);

              this.precoFrete = (this.priceFix + this.distance * response[i].taxa * this.cubagem);


              this.quotes.push({ precoFrete: this.precoFrete, tempo: this.tempo, start_adress: this.start_adress, end_address: this.end_address, carrier: response[i].razao, vol: this.vol, cubagem: this.cubagem, carrierID: response[i].id, pessoaID: this.loginService.pessoaID  });



            }

          })

          this.cepDestino = ""
          this.cepOrigem = ""
          this.comprimento = 0
          this.largura = 0
          this.altura = 0
          this.peso = 0


        })
    } else {
      alert('DIGITE TODOS OS DADOS!')
    }

  }

  regRecentQuotes(priceQuote: number, prazo: number, origem: string, destino: string, carrierID: number, cubagem: number, pessoaID:number) {

    let build ={
      "price":priceQuote,
      "await":prazo,
      "origin":origem,
      "destiny":destino,
      "carrier_id":carrierID,
      "cub_height":cubagem,
      "pessoa_id":pessoaID
    }

    this.quoteService.regRecentQuotes(build)



  }

}
