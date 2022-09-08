import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ship-qt',
  templateUrl: './ship-qt.component.html',
  styleUrls: ['./ship-qt.component.css']
})
export class ShipQtComponent implements OnInit {
  quotes!: Array<any>
  cepOrigem!: number
  cepDestino!: number
  comprimento!: number
  largura!: number
  altura!: number
  peso!: number
  precoFrete!: number
  tempo!: number
  trackid!: string

  readonly apiURL! : string
  readonly apiURL2! : string
  readonly apiURL3! : string


  constructor(private http : HttpClient) { 
    this.apiURL=='https://maps.googleapis.com/maps/api/distancematrix/json?destinations=';
    this.apiURL2=='&origins';
    this.apiURL3=='&units=imperial&key=AIzaSyCKNjLUI0d01M0SfoDjIov4vZlR3DprotM';
  }

  ngOnInit(): void {
    
   // this.quotes.push({ precoFrete: 45.50, tempo: 3, trackid: "BR23154546TR", cepOrigem: 88058086, cepDestino: 88058086, comprimento: 50, largura: 50, altura: 50, peso: 10 })
   // this.quotes.push({ precoFrete: 94.50, tempo: 6, trackid: "BR22315445TR", cepOrigem: 46513265, cepDestino: 65898454, comprimento: 100, largura: 200, altura: 10, peso: 25 })


  }

  quote(cepOrigem:number, cepDestino:number) {
   // this.http.post(`${this.apiURL}`,cepOrigem,`${this.apiURL2}`,cepDestino, `${this.apiURL3}`)
    
    
   // https://maps.googleapis.com/maps/api/distancematrix/json?destinations=88352370&origins=88058086&units=imperial&key=

   // AIzaSyCKNjLUI0d01M0SfoDjIov4vZlR3DprotM

   
  }






}