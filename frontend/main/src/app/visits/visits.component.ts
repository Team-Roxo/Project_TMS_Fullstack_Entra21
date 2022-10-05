import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visits',
  templateUrl: './visits.component.html',
  styleUrls: ['./visits.component.css']
})
export class VisitsComponent implements OnInit {

  readonly APICountVisits:string = "http://localhost:8080/user/countVisitors"

  visits! : Array<any>

  constructor(private router:Router, private http:HttpClient) { }

  ngOnInit(): void {
    this.visits = new Array()
    this.http.get(this.APICountVisits)
    .subscribe((resultado:any)=>{
      var count = Object.keys(resultado).length
      for(let i = 0; i<count; i++){

        this.visits.push({id: resultado[i].id, date: resultado[i].date, time: resultado[i].time, user: resultado[i].user, bounceRate: resultado[i].bounce_rate })
        
      }

    })

  }

}
