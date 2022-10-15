import { ChangeDetectorRef } from '@angular/core';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { CalendarEvent, CalendarEventTitleFormatter } from 'angular-calendar';
import { WeekViewHourSegment } from 'calendar-utils';
import { addDays, addMinutes, endOfWeek } from 'date-fns';
import { fromEvent } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: CalendarEventTitleFormatter,
    },
  ],
 
})

export class CalendarComponent implements OnInit {
 

    dateActually: Date = new Date();
    daysCalendar: Date[] = [];

  constructor() { }

  ngOnInit(): void {
    
    this.buildCalendar();
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
