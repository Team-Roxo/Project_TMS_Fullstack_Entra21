import {
  Component,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { RctQtComponent } from '../rct-qt/rct-qt.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChangeDetectorRef } from '@angular/core';
import { CalendarEvent, CalendarEventTitleFormatter } from 'angular-calendar';
import { WeekViewHourSegment } from 'calendar-utils';
import { addDays, addMinutes, endOfWeek } from 'date-fns';
import { fromEvent } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-insight',
  templateUrl: './insight.component.html',
  styleUrls: ['./insight.component.css'],
  
  providers: [
    {
      provide: CalendarEventTitleFormatter,
    },
  ],
})
export class InsightComponent implements OnInit {

  readonly APICountUsers: string = "http://34.95.208.13:8080/user/countClients"

  readonly APICountVisits:string = "http://34.95.208.13:8080/user/countVisitors"

  readonly APICountPackages:string = "http://34.95.208.13:8080/quote/go"

  readonly APICountBounce:string = "http://34.95.208.13:8080/user/bounce"

  countClient!: number
  countVisitors!: number
  countPackages!:number
  countBounce!:number
  
  dateActually: Date = new Date();
  daysCalendar: Date[] = [];


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

     this.buildCalendar();

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

  buildCalendar(){
    const year = this.dateActually.getFullYear();
    const month = this.dateActually.getMonth();

    const firstDayOfWeek = 0; // Sunday
    const lastDayOfWeek = 6; // Saturday

    const initialDate = new Date (year, month, 1);
    while (initialDate.getDay() !== firstDayOfWeek){
        initialDate.setDate(initialDate.getDate()-1);
    }

    const finalDate = new Date(year, month +1, 0);
    while (finalDate.getDay() !== lastDayOfWeek){
        finalDate.setDate(finalDate.getDate()+1);
    }

    this.daysCalendar = [];
    for (
        let date = new Date(initialDate.getTime());
        date <= finalDate;
        date.setDate(date.getDate()+1)
    ){
        this.daysCalendar.push(new Date(date.getTime()))
    }
  }

  changeMonth(offsetMonth: number){
    this.dateActually.setMonth(this.dateActually.getMonth() + offsetMonth);
    this.dateActually = new Date(this.dateActually.getTime());
    this.buildCalendar();

  }
}



