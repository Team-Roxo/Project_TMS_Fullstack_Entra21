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
  destinatario!: string;
  progress: number = -1
  succeed: number = -1
  id!: number

  APIBouncePut: string = "http://34.95.208.13:8080/user/disbounce/"
  newBounce!: any


  constructor(public loginService: LoginserviceService, public carrierService: CarrierService, public quoteService: QuoteService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {

    this.progress = -1
    this.succeed = -1

    //this.quotes.push({ precoFrete: 45.50, tempo: 3, trackid: "BR23154546TR", cepOrigem: 88058086, cepDestino: 88058086, comprimento: 50, largura: 50, altura: 50, peso: 10 })
    //this.quotes.push({ precoFrete: 94.50, tempo: 6, trackid: "BR22315445TR", cepOrigem: 46513265, cepDestino: 65898454, comprimento: 100, largura: 200, altura: 10, peso: 25 })

  }

  quote() {

    this.quotes = new Array()

    document.getElementById('load-screen')?.setAttribute('style', 'display: block')

    //ATUALIZA BOUNCE
    this.http.put(this.APIBouncePut + this.loginService.idBounce, null)
    //FIM DO BOUNCE

    if (this.cepOrigem != null && this.cepDestino != null && this.comprimento != null, this.altura != null, this.largura != null, this.peso != null) {
      this.quoteService.quote(this.cepOrigem, this.cepDestino)
        .pipe(
          catchError((error) => {


            return error
          })
        )

        .subscribe((response: any) => {

          console.log(response);

          //variaveis fixas
          this.fatorCub = 300; //fator cubado - rodoviário
          //  this.priceFix = 14.55;

          //variaveis google
          this.start_adress = response.routes[0].legs[0].start_address;
          this.end_address = response.routes[0].legs[0].end_address;
          this.distance = (response.routes[0].legs[0].distance.value);

          //cálculos
          this.vol = (this.comprimento * this.altura * this.largura) / 1000000; //conversão em m³
          this.cubagem = this.vol * this.fatorCub;
          //  this.tempo = Math.ceil((((this.distance) / 1000) / 80) / 3); //dividido por 1000 para converter, /80 velocidade med, /7 horas diárias

          console.log(this.vol);
          console.log(this.cubagem);


          //dados da transportadora
          this.carrierService.listCarrier().pipe().subscribe((response: any) => {

            var count = Object.keys(response).length;

            for (let i = 0; i < count; i++) {

              console.log(response[i].taxa);

              if (this.cubagem >= 30) {
                this.precoFrete = 35+((Math.random() * 30) + this.distance * response[i].taxa * this.cubagem) / 7000;
                this.tempo = Math.floor(Math.random() * 10 + 6);
                this.quotes.push({ precoFrete: this.precoFrete.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }), tempo: this.tempo, start_adress: this.start_adress, end_address: this.end_address, carrier: response[i].razao, vol: this.vol, cubagem: this.cubagem, carrierID: response[i].id, pessoaID: this.loginService.pessoaID });
                console.log("Foi no IF");

              } else if (this.cubagem >= 20 && this.cubagem <= 30) {
                this.precoFrete = 30+((Math.random() * 20) + this.distance * response[i].taxa * this.cubagem) / 6500;
                this.tempo = Math.floor(Math.random() * 10 + 3);
                this.quotes.push({ precoFrete: this.precoFrete.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }), tempo: this.tempo, start_adress: this.start_adress, end_address: this.end_address, carrier: response[i].razao, vol: this.vol, cubagem: this.cubagem, carrierID: response[i].id, pessoaID: this.loginService.pessoaID });
                console.log("Foi no ELSE IF 1");

              } else if (this.cubagem >= 15 && this.cubagem <= 20) {
                this.precoFrete = 25+((Math.random() * 20) + this.distance * response[i].taxa * this.cubagem) / 6000;
                this.tempo = Math.floor(Math.random() * 10 + 2);
                this.quotes.push({ precoFrete: this.precoFrete.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }), tempo: this.tempo, start_adress: this.start_adress, end_address: this.end_address, carrier: response[i].razao, vol: this.vol, cubagem: this.cubagem, carrierID: response[i].id, pessoaID: this.loginService.pessoaID });
                console.log("Foi no ELSE IF 2");

              } else if (this.cubagem >= 10 && this.cubagem <= 15) {
                this.precoFrete = 20+((Math.random() * 20) + this.distance * response[i].taxa * this.cubagem) / 5000;
                this.tempo = Math.floor(Math.random() * 10 + 2);
                this.quotes.push({ precoFrete: this.precoFrete.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }), tempo: this.tempo, start_adress: this.start_adress, end_address: this.end_address, carrier: response[i].razao, vol: this.vol, cubagem: this.cubagem, carrierID: response[i].id, pessoaID: this.loginService.pessoaID });
                console.log("Foi no ELSE IF 3");

              } else if (this.cubagem >= 7 && this.cubagem <= 10) {
                this.precoFrete = 12+((Math.random() * 20) + this.distance * response[i].taxa * this.cubagem) / 4000;
                this.tempo = Math.floor(Math.random() * 10 + 2);
                this.quotes.push({ precoFrete: this.precoFrete.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }), tempo: this.tempo, start_adress: this.start_adress, end_address: this.end_address, carrier: response[i].razao, vol: this.vol, cubagem: this.cubagem, carrierID: response[i].id, pessoaID: this.loginService.pessoaID });
                console.log("Foi no ELSE IF 4");

              } else if (this.cubagem >= 4 && this.cubagem <= 7) {
                this.precoFrete = 9+((Math.random() * 20) + this.distance * response[i].taxa * this.cubagem) / 3000;
                this.tempo = Math.floor(Math.random() * 10 + 2);
                this.quotes.push({ precoFrete: this.precoFrete.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }), tempo: this.tempo, start_adress: this.start_adress, end_address: this.end_address, carrier: response[i].razao, vol: this.vol, cubagem: this.cubagem, carrierID: response[i].id, pessoaID: this.loginService.pessoaID });
                console.log("Foi no ELSE IF 5");

              } else if (this.cubagem >= 2 && this.cubagem <= 4) {
                this.precoFrete = 7+((Math.random() * 20) + this.distance * response[i].taxa * this.cubagem) / 2000;
                this.tempo = Math.floor(Math.random() * 10 + 1);
                this.quotes.push({ precoFrete: this.precoFrete.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }), tempo: this.tempo, start_adress: this.start_adress, end_address: this.end_address, carrier: response[i].razao, vol: this.vol, cubagem: this.cubagem, carrierID: response[i].id, pessoaID: this.loginService.pessoaID });
                console.log("Foi no ELSE IF 6");

              } else if (this.cubagem <= 2) {
                this.precoFrete = 5+((Math.random() * 20) + this.distance * response[i].taxa * this.cubagem) / 1000;
                this.tempo = Math.floor(Math.random() * 10 + 1);
                this.quotes.push({ precoFrete: this.precoFrete.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }), tempo: this.tempo, start_adress: this.start_adress, end_address: this.end_address, carrier: response[i].razao, vol: this.vol, cubagem: this.cubagem, carrierID: response[i].id, pessoaID: this.loginService.pessoaID });
                console.log("Foi no ELSE IF 7");
              }

            }

          })

          this.cepDestino = ""
          this.cepOrigem = ""
          this.comprimento = 0
          this.largura = 0
          this.altura = 0
          this.peso = 0
          this.destinatario = ""



          setTimeout(() => {
            document.getElementById('load-screen')?.setAttribute('style', 'display: none')
          }, 1000);

        })
    } else {
      alert('DIGITE TODOS OS DADOS!')
    }

  }

  regRecentQuotes(id: number, priceQuote: number, prazo: number, origem: string, destino: string, carrierID: number, cubagem: number, pessoaID: number) {

    this.progress = id

    console.log(priceQuote);

    let build = {
      "price": priceQuote.toLocaleString('en-US').replace('.', '').replace(',', '.'),
      "await": prazo,
      "origin": origem,
      "destiny": destino,
      "carrier_id": carrierID,
      "cub_height": cubagem,
      "pessoa_id": pessoaID
    }

    this.quoteService.regRecentQuotes(build)

    // document.getElementById('load-screen')?.setAttribute('style', 'display: block')

    // setTimeout(() => {
    //   document.getElementById('load-screen')?.setAttribute('style', 'display: none')
    // }, 600);

    console.log(id);

    setTimeout(() => {
      this.succeed = id
      setTimeout(() => {
        this.quotes.splice(id, 1)
        this.progress = -1
        this.succeed = -1
      }, 3000);
    }, 1500)



  }

  openModal() {

    var modal = document.getElementById('modal2')

    modal?.setAttribute('style', 'display:block;')

    modal?.setAttribute('class', 'portfolio-modal modal fade show')
    modal?.removeAttribute('aria-hidden')

    modal?.setAttribute('arial-modal', 'true')

  }

  closeModal() {
    var modal = document.getElementById('modal2')

    modal?.setAttribute('class', 'portfolio-modal modal fade')
    setTimeout(() => {
      modal?.setAttribute('style', 'display:none;')
    }, 500)

  }
}
