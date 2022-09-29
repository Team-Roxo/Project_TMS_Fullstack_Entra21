import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarrierService } from '../carrier.service';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-rct-qt',
  templateUrl: './rct-qt.component.html',
  styleUrls: ['./rct-qt.component.css']
})
export class RctQtComponent implements OnInit {

 
  constructor(public quoteService: QuoteService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {

    this.quoteService.recQuote().pipe().subscribe((response: any) => {

      var count = Object.keys(response).length;

      for (let i = 0; i < count; i++) {

               

        

      }

    })
  }

}
