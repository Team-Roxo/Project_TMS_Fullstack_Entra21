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

  readonly packAPI: string = "http://34.95.208.13:8080/quote/packs/user/"

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

  cost1: number = 0
  cost2: number = 0
  cost3: number = 0
  cost4: number = 0
  cost5: number = 0
  cost6: number = 0
  cost7: number = 0

  constructor(private login: LoginserviceService, private http: HttpClient) { }

  ngOnInit(): void {

    var date = new Date

    console.log(date.getFullYear() + '-' + (date.getUTCMonth() + 1) + '-' + date.getDate());


    this.http.put('http://34.95.208.13:8080/user/disbounce/' + this.login.idBounce, null)
      .subscribe((response) => {
        console.log(response);
      })

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

        for (let i = 0; i < Object.keys(response).length; i++) {

          if (response[i].post.toString() == date.getFullYear() + '-' + this.addZeroes((date.getUTCMonth() + 1)) + '-' + this.addZeroes(date.getDate())) {
            this.poly_3_p7 -= 31.875
            this.cost7 += response[i].price
          }
          if (response[i].post.toString() == date.getFullYear() + '-' + this.addZeroes((date.getUTCMonth() + 1)) + '-' + this.addZeroes((date.getDate() - 1))) {
            this.poly_3_p6 -= 31.875
            this.cost6 += response[i].price
          }
          if (response[i].post.toString() == date.getFullYear() + '-' + this.addZeroes((date.getUTCMonth() + 1)) + '-' + this.addZeroes((date.getDate() - 2))) {
            this.poly_3_p5 -= 31.875
            this.cost5 += response[i].price
          }
          if (response[i].post.toString() == date.getFullYear() + '-' + this.addZeroes((date.getUTCMonth() + 1)) + '-' + this.addZeroes((date.getDate() - 3))) {
            this.poly_3_p4 -= 31.875
            this.cost4 += response[i].price
          }
          if (response[i].post.toString() == date.getFullYear() + '-' + this.addZeroes((date.getUTCMonth() + 1)) + '-' + this.addZeroes((date.getDate() - 4))) {
            this.poly_3_p3 -= 31.875
            this.cost3 += response[i].price
          }
          if (response[i].post.toString() == date.getFullYear() + '-' + this.addZeroes((date.getUTCMonth() + 1)) + '-' + this.addZeroes((date.getDate() - 5))) {
            this.poly_3_p2 -= 31.875
            this.cost2 += response[i].price
          }
          if (response[i].post.toString() == date.getFullYear() + '-' + this.addZeroes((date.getUTCMonth() + 1)) + '-' + this.addZeroes((date.getDate() - 6))) {
            this.poly_3_p1 -= 31.875
            this.cost1 += response[i].price
          }
        }

      })

    //SETTING GRAPH
    setTimeout(() => {

      if (this.cost7 >= 6000) {
        this.poly_5_p7 = -10
      } else if (this.cost7 >= 5500) {
        this.poly_5_p7 = 21.875
      } else if (this.cost7 >= 5000) {
        this.poly_5_p7 = 53.75
      } else if (this.cost7 >= 4500) {
        this.poly_5_p7 = 85.625
      } else if (this.cost7 >= 4000) {
        this.poly_5_p7 = 117.5
      } else if (this.cost7 >= 3500) {
        this.poly_5_p7 = 149.375
      } else if (this.cost7 >= 3000) {
        this.poly_5_p7 = 181.25
      } else if (this.cost7 >= 2000) {
        this.poly_5_p7 = 213.125
      } else if (this.cost7 <= 500) {
        this.poly_5_p7 = 245
      }

      if (this.cost6 >= 6000) {
        this.poly_5_p6 = -10
      } else if (this.cost6 >= 5500) {
        this.poly_5_p6 = 21.875
      } else if (this.cost6 >= 5000) {
        this.poly_5_p6 = 53.75
      } else if (this.cost6 >= 4500) {
        this.poly_5_p6 = 85.625
      } else if (this.cost6 >= 4000) {
        this.poly_5_p6 = 117.5
      } else if (this.cost6 >= 3500) {
        this.poly_5_p6 = 149.375
      } else if (this.cost6 >= 3000) {
        this.poly_5_p6 = 181.25
      } else if (this.cost6 >= 2000) {
        this.poly_5_p6 = 213.125
      } else if (this.cost6 <= 500) {
        this.poly_5_p6 = 245
      }

      if (this.cost5 >= 6000) {
        this.poly_5_p5 = -10
      } else if (this.cost5 >= 5500) {
        this.poly_5_p5 = 21.875
      } else if (this.cost5 >= 5000) {
        this.poly_5_p5 = 53.75
      } else if (this.cost5 >= 4500) {
        this.poly_5_p5 = 85.625
      } else if (this.cost5 >= 4000) {
        this.poly_5_p5 = 117.5
      } else if (this.cost5 >= 3500) {
        this.poly_5_p5 = 149.375
      } else if (this.cost5 >= 3000) {
        this.poly_5_p5 = 181.25
      } else if (this.cost5 >= 2000) {
        this.poly_5_p5 = 213.125
      } else if (this.cost5 <= 500) {
        this.poly_5_p5 = 245
      }

      if (this.cost4 >= 6000) {
        this.poly_5_p4 = -10
      } else if (this.cost4 >= 5500) {
        this.poly_5_p4 = 21.875
      } else if (this.cost4 >= 5000) {
        this.poly_5_p4 = 53.75
      } else if (this.cost4 >= 4500) {
        this.poly_5_p4 = 85.625
      } else if (this.cost4 >= 4000) {
        this.poly_5_p4 = 117.5
      } else if (this.cost4 >= 3500) {
        this.poly_5_p4 = 149.375
      } else if (this.cost4 >= 3000) {
        this.poly_5_p4 = 181.25
      } else if (this.cost4 >= 2000) {
        this.poly_5_p4 = 213.125
      } else if (this.cost4 <= 500) {
        this.poly_5_p4 = 245
      }

      if (this.cost3 >= 6000) {
        this.poly_5_p3 = -10
      } else if (this.cost3 >= 5500) {
        this.poly_5_p3 = 21.875
      } else if (this.cost3 >= 5000) {
        this.poly_5_p3 = 53.75
      } else if (this.cost3 >= 4500) {
        this.poly_5_p3 = 85.625
      } else if (this.cost3 >= 4000) {
        this.poly_5_p3 = 117.5
      } else if (this.cost3 >= 3500) {
        this.poly_5_p3 = 149.375
      } else if (this.cost3 >= 3000) {
        this.poly_5_p3 = 181.25
      } else if (this.cost3 >= 2000) {
        this.poly_5_p3 = 213.125
      } else if (this.cost3 <= 500) {
        this.poly_5_p3 = 245
      }

      if (this.cost2 >= 6000) {
        this.poly_5_p2 = -10
      } else if (this.cost2 >= 5500) {
        this.poly_5_p2 = 21.875
      } else if (this.cost2 >= 5000) {
        this.poly_5_p2 = 53.75
      } else if (this.cost2 >= 4500) {
        this.poly_5_p2 = 85.625
      } else if (this.cost2 >= 4000) {
        this.poly_5_p2 = 117.5
      } else if (this.cost2 >= 3500) {
        this.poly_5_p2 = 149.375
      } else if (this.cost2 >= 3000) {
        this.poly_5_p2 = 181.25
      } else if (this.cost2 >= 2000) {
        this.poly_5_p2 = 213.125
      } else if (this.cost2 <= 500) {
        this.poly_5_p2 = 245
      }

      if (this.cost1 >= 6000) {
        this.poly_5_p1 = -10
      } else if (this.cost1 >= 5500) {
        this.poly_5_p1 = 21.875
      } else if (this.cost1 >= 5000) {
        this.poly_5_p1 = 53.75
      } else if (this.cost1 >= 4500) {
        this.poly_5_p1 = 85.625
      } else if (this.cost1 >= 4000) {
        this.poly_5_p1 = 117.5
      } else if (this.cost1 >= 3500) {
        this.poly_5_p1 = 149.375
      } else if (this.cost1 >= 3000) {
        this.poly_5_p1 = 181.25
      } else if (this.cost1 >= 2000) {
        this.poly_5_p1 = 213.125
      } else if (this.cost1 <= 500) {
        this.poly_5_p1 = 245
      }

    }, 300);

    //SETTING GRAPH
    setTimeout(() => {
      document.getElementById('lucro3')?.setAttribute('points', '0.396183206 ' + this.poly_3_p1 + ' 73.40789833833333 ' + this.poly_3_p2 + ' 146.4196134706667 ' + this.poly_3_p3 + ' 219.431328603 ' + this.poly_3_p4 + ' 292.4430437353333 ' + this.poly_3_p5 + ' 365.4547588676667 ' + this.poly_3_p6 + ' 440 ' + this.poly_3_p7)

      document.getElementById('lucro2')?.setAttribute('points', '0.396183206 ' + this.poly_2_p1 + ' 73.40789833833333 ' + this.poly_2_p2 + ' 146.4196134706667 ' + this.poly_2_p3 + ' 219.431328603 ' + this.poly_2_p4 + ' 292.4430437353333 ' + this.poly_2_p5 + ' 365.4547588676667 ' + this.poly_2_p6 + ' 440 ' + this.poly_2_p7)

      document.getElementById('lucro1')?.setAttribute('points', '0.396183206 ' + this.poly_1_p1 + ' 73.40789833833333 ' + this.poly_1_p2 + ' 146.4196134706667 ' + this.poly_1_p3 + ' 219.431328603 ' + this.poly_1_p4 + ' 292.4430437353333 ' + this.poly_1_p5 + ' 365.4547588676667 ' + this.poly_1_p6 + ' 440 ' + this.poly_1_p7)

      document.getElementById('cost1')?.setAttribute('points', '0.396183206 ' + this.poly_4_p1 + ' 73.40789833833333 ' + this.poly_4_p2 + ' 146.4196134706667 ' + this.poly_4_p3 + ' 219.431328603 ' + this.poly_4_p4 + ' 292.4430437353333 ' + this.poly_4_p5 + ' 365.4547588676667 ' + this.poly_4_p6 + ' 440 ' + this.poly_4_p7)

      document.getElementById('cost2')?.setAttribute('points', '0.396183206 ' + this.poly_5_p1 + ' 73.40789833833333 ' + this.poly_5_p2 + ' 146.4196134706667 ' + this.poly_5_p3 + ' 219.431328603 ' + this.poly_5_p4 + ' 292.4430437353333 ' + this.poly_5_p5 + ' 365.4547588676667 ' + this.poly_5_p6 + ' 440 ' + this.poly_5_p7)
    }, 300);

  }

  addZeroes(num: number) {
    var numberWithZeroes = String(num);
    var counter = numberWithZeroes.length;

    while (counter < 2) {

      numberWithZeroes = "0" + numberWithZeroes;
      counter++;

    }
    return numberWithZeroes;
  }

}
