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

  readonly APICountUsers: string = "http://localhost:8080/user/countClients"

  readonly APICountVisits:string = "http://localhost:8080/user/countVisitors"

  readonly APICountPackages:string = "http://localhost:8080/quote/go"

  readonly APICountBounce:string = "http://localhost:8080/user/bounce"

  countClient!: number
  countVisitors!: number
  countPackages!:number
  countBounce!:number

  constructor(private router:Router, private http:HttpClient) {

  }

  ngOnInit(): void {
    
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

  }

  register(){
    this.router.navigateByUrl('pack-register')
  }

  clients(){
    this.router.navigateByUrl('users')
  }

  visits(){
    this.router.navigateByUrl('visits')
  }

 countVisits():number{
    return this.countVisitors
  }

  countClients():number{
    return this.countClient
  }

  countPacks():number {
    return this.countPackages
  }

  countBounces(): number{
    return this.countBounce
  }

}
