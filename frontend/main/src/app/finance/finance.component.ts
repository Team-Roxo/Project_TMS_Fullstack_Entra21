import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { count } from 'console';
import { Observable } from 'rxjs';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent implements OnInit {

  readonly packAPI: string = "http://35.199.78.13:8080/quote/packs/user/"

  totalCost: number = 0
  recentCost: number = 0
  mediumCostPerPack: number = 0
  mediumCostPack!: string
  totalPacks: number = 0
  mediumCostPerCubHeight: number = 0
  mediumCostCubHeight!: string
  totalCubHeight: number = 0

  poly_1_p1: number = -10
  poly_1_p2: number = -10
  poly_1_p3: number = -10
  poly_1_p4: number = -10
  poly_1_p5: number = -10
  poly_1_p6: number = -10
  poly_1_p7: number = -10

  poly_2_p1: number = 115
  poly_2_p2: number = 115
  poly_2_p3: number = 115
  poly_2_p4: number = 115
  poly_2_p5: number = 115
  poly_2_p6: number = 115
  poly_2_p7: number = 115

  poly_3_p1: number = 245
  poly_3_p2: number = 245
  poly_3_p3: number = 245
  poly_3_p4: number = 245
  poly_3_p5: number = 245
  poly_3_p6: number = 245
  poly_3_p7: number = 245

  poly_4_p1: number = -10
  poly_4_p2: number = -10
  poly_4_p3: number = -10
  poly_4_p4: number = -10
  poly_4_p5: number = -10
  poly_4_p6: number = -10
  poly_4_p7: number = -10

  poly_5_p1: number = 115
  poly_5_p2: number = 115
  poly_5_p3: number = 115
  poly_5_p4: number = 115
  poly_5_p5: number = 115
  poly_5_p6: number = 115
  poly_5_p7: number = 115

  constructor(private login: LoginserviceService, private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get(this.packAPI + this.login.pessoaID)
      .subscribe((response: any) => {
        console.log(response);

        this.totalPacks = Object.keys(response).length

        if (this.totalPacks > 0) {

          for (let i = 0; i < this.totalPacks; i++) {
            this.totalCost = + response[i].price
            this.totalCubHeight = + response[i].cub_height
          }

          this.mediumCostPerPack = (this.totalCost / this.totalPacks)
          this.mediumCostPerCubHeight = (this.totalCost / this.totalCubHeight)

        }

        this.mediumCostPack = this.mediumCostPerPack
          .toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          })
        this.mediumCostCubHeight = this.mediumCostPerCubHeight
          .toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          })

      })

    this.http.get(this.packAPI + 'recent/' + this.login.pessoaID)
      .subscribe((response: any) => {
        console.log(response);



      })

    document.getElementById('lucro3')?.setAttribute('points', '0.396183206 ' + this.poly_3_p1 + ' 73.40789833833333 ' + this.poly_3_p2 + ' 146.4196134706667 ' + this.poly_3_p3 + ' 219.431328603 ' + this.poly_3_p4 + ' 292.4430437353333 ' + this.poly_3_p5 + ' 365.4547588676667 ' + this.poly_3_p6 + ' 440 ' + this.poly_3_p7)

    document.getElementById('lucro2')?.setAttribute('points', '0.396183206 ' + this.poly_2_p1 + ' 73.40789833833333 ' + this.poly_2_p2 + ' 146.4196134706667 ' + this.poly_2_p3 + ' 219.431328603 ' + this.poly_2_p4 + ' 292.4430437353333 ' + this.poly_2_p5 + ' 365.4547588676667 ' + this.poly_2_p6 + ' 440 ' + this.poly_2_p7)

    document.getElementById('lucro1')?.setAttribute('points', '0.396183206 ' + this.poly_1_p1 + ' 73.40789833833333 ' + this.poly_1_p2 + ' 146.4196134706667 ' + this.poly_1_p3 + ' 219.431328603 ' + this.poly_1_p4 + ' 292.4430437353333 ' + this.poly_1_p5 + ' 365.4547588676667 ' + this.poly_1_p6 + ' 440 ' + this.poly_1_p7)

    document.getElementById('cost1')?.setAttribute('points', '0.396183206 ' + this.poly_4_p1 + ' 73.40789833833333 ' + this.poly_4_p2 + ' 146.4196134706667 ' + this.poly_4_p3 + ' 219.431328603 ' + this.poly_4_p4 + ' 292.4430437353333 ' + this.poly_4_p5 + ' 365.4547588676667 ' + this.poly_4_p6 + ' 440 ' + this.poly_4_p7)

    document.getElementById('cost2')?.setAttribute('points', '0.396183206 ' + this.poly_5_p1 + ' 73.40789833833333 ' + this.poly_5_p2 + ' 146.4196134706667 ' + this.poly_5_p3 + ' 219.431328603 ' + this.poly_5_p4 + ' 292.4430437353333 ' + this.poly_5_p5 + ' 365.4547588676667 ' + this.poly_5_p6 + ' 440 ' + this.poly_5_p7)

  }

}
