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

  readonly packAPI:string = "http://localhost:8080/quote/packs/user/"

  totalCost!:number
  recentCost!:number
  mediumCostPerPack!:number
  totalPacks!:number
  mediumCostPerCubHeight!:number
  totalCubHeight!:number

  poly_1_p1:number = -10
  poly_1_p2:number = -10
  poly_1_p3:number = -10
  poly_1_p4:number = -10
  poly_1_p5:number = -10
  poly_1_p6:number = -10
  poly_1_p7:number = -10

  poly_2_p1:number = 115
  poly_2_p2:number = 115
  poly_2_p3:number = 115
  poly_2_p4:number = 115
  poly_2_p5:number = 115
  poly_2_p6:number = 115
  poly_2_p7:number = 115

  poly_3_p1:number = 245
  poly_3_p2:number = 245
  poly_3_p3:number = 245
  poly_3_p4:number = 245
  poly_3_p5:number = 245
  poly_3_p6:number = 245
  poly_3_p7:number = 245

  constructor(private login:LoginserviceService, private http:HttpClient) { }

  ngOnInit(): void {

    this.http.get(this.packAPI+this.login.pessoaID)
    .subscribe((response:any)=>{
      console.log(response);

      this.totalPacks = Object.keys(response).length

      for(let i=0;i<this.totalPacks;i++){
        this.totalCost =+ response[i].price
        this.totalCubHeight =+ response[i].cub_height
      }

      this.mediumCostPerPack = this.totalCost/this.totalPacks

      this.mediumCostPerCubHeight = this.totalCost/this.totalCubHeight

      console.log(this.totalCost);
      console.log(this.totalCubHeight);



    })

    this.http.get(this.packAPI+'recent/'+this.login.pessoaID)
    .subscribe((response:any)=>{
      console.log(response);



    })

    document.getElementById('lucro3')?.setAttribute('points','0.396183206 '+this.poly_3_p1 +' 73.40789833833333 '+ this.poly_3_p2 +' 146.4196134706667 '+ this.poly_3_p3 +' 219.431328603 '+ this.poly_3_p4 +' 292.4430437353333 '+ this.poly_3_p5 +' 365.4547588676667 '+ this.poly_3_p6 +' 440 '+ this.poly_3_p7)

    document.getElementById('lucro2')?.setAttribute('points','0.396183206 '+this.poly_2_p1 +' 73.40789833833333 '+ this.poly_2_p2 +' 146.4196134706667 '+ this.poly_2_p3 +' 219.431328603 '+ this.poly_2_p4 +' 292.4430437353333 '+ this.poly_2_p5 +' 365.4547588676667 '+ this.poly_2_p6 +' 440 '+ this.poly_2_p7)

    document.getElementById('lucro1')?.setAttribute('points', '0.396183206 '+this.poly_1_p1 +' 73.40789833833333 '+ this.poly_1_p2 +' 146.4196134706667 '+ this.poly_1_p3 +' 219.431328603 '+ this.poly_1_p4 +' 292.4430437353333 '+ this.poly_1_p5 +' 365.4547588676667 '+ this.poly_1_p6 +' 440 '+ this.poly_1_p7)

  }

}
