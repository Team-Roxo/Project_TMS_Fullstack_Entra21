import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { LoginserviceService } from '../loginservice.service';
import { VisitsService } from '../visits.service';

@Component({
  selector: 'app-visits',
  templateUrl: './visits.component.html',
  styleUrls: ['./visits.component.css']
})
export class VisitsComponent implements OnInit {

  visits!: Array<any>
  id!: number
  date!: string
  time!: number
  user!: string
  bounceRate!: boolean



  constructor(public visitsService: VisitsService, private router:Router, private http:HttpClient, private login:LoginserviceService) { }

  ngOnInit(): void {

    this.http.put('http://34.95.208.13:8080/user/disbounce/'+this.login.idBounce, null)
    .subscribe((response)=>{
      console.log(response);
    })

    this.visits = new Array()

    this.visitsService.listVisits().pipe(
      catchError((error)=>{
      return error
      })

    ).subscribe((response: any) => {

      console.log(response);



      var count = Object.keys(response).length;

      for (let i = 0; i < count; i++) {

        this.id = response[i].id;
        this.date = response[i].date;
        this.time = response[i].time;
        this.user = response[i].user;
        this.bounceRate = response[i].bounce_rate;

        console.log(this.id);
        console.log(this.date);
        console.log(this.time);
        console.log(this.user);
        console.log(this.bounceRate);

        this.visits.push({id: this.id, date: this.date, time: this.time, user: this.user, bounceRate: this.bounceRate })

      }

    })


  }

}
