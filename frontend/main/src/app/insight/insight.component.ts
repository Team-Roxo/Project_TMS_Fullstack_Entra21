import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RctQtComponent } from '../rct-qt/rct-qt.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-insight',
  templateUrl: './insight.component.html',
  styleUrls: ['./insight.component.css']
})
export class InsightComponent implements OnInit {

  readonly APICountUsers: string = "http://35.199.78.13:8080/user/countClients"

  readonly APICountVisits:string = "http://35.199.78.13:8080/user/countVisitors"

  readonly APICountPackages:string = "http://35.199.78.13:8080/quote/go"

  readonly APICountBounce:string = "http://35.199.78.13:8080/user/bounce"

  countClient!: number
  countVisitors!: number
  countPackages!:number
  countBounce!:number

  constructor(private router:Router, private http:HttpClient) { }

  ngOnInit(): void {

    console.log('NO INIT');

      this.http.get(this.APICountUsers)
     .subscribe((resultado:any) => {
      this.countClient=resultado
     });

     this.http.get(this.APICountVisits)
    .subscribe((resultado:any) => {
     var count = Object.keys(resultado).length
     this.countVisitors = count
    });

     this.http.get(this.APICountPackages)
     .subscribe((response:any)=>{
      this.countPackages=response
     })

     this.http.get(this.APICountBounce)
     .subscribe((response:any)=>{
      this.countBounce=response
     })

     setTimeout(() => {
      this.attData()
     }, 1500);

  }

  register(){
    this.router.navigateByUrl('pack-track')
  }

  clients(){
    this.router.navigateByUrl('users')
  }

  visits(){
    this.router.navigateByUrl('visits')
  }

  attData(){

    console.log('NO ATT DATA');


    setTimeout(() => {
      this.ngOnInit()
    }, 1500);
  }

}
