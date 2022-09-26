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

  readonly TMSLoginAPI: string = "http://localhost:8080/user/countClients"

  readonly apiURL:string = "http://localhost:8080/user/countVisitors"

  countClient!: number
  countVisitors!: number

  constructor(private router:Router, private http:HttpClient) { 
   
  }

  ngOnInit(): void {

     this.http.get(this.TMSLoginAPI)
     .subscribe((resultado:any) => {
      this.countClient=resultado
     });

     this.http.get(this.apiURL)
     .subscribe((resultado:any) => {
      this.countVisitors=resultado
     });


  }

  register(){
    this.router.navigateByUrl('pack-register')
  }

  clients(){
    this.router.navigateByUrl('users')
  }

  // countClients() {
  // this.http.get(`${this.TMSLoginAPI}/countClients`).subscribe(resultado => console.log(resultado));
  // return ;
  
  // }
  // countVisitors(){
  //   this.http.get(`${this.apiURL}/countVisitors`).subscribe(resultado => console.log(resultado));
  // }

}
