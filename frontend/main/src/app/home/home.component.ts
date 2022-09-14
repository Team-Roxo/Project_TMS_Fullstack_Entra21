import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RctQtComponent } from '../rct-qt/rct-qt.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  dashboard(){
    this.router.navigateByUrl('dashboard')
  }

  clients(){
    this.router.navigateByUrl('users')
  }

  carriers(){
    this.router.navigateByUrl('carriers')
  }

  register(){
    this.router.navigateByUrl('pack-register')
  }

  tracking(){
    this.router.navigateByUrl('pack-track')
  }

  finance(){
    this.router.navigateByUrl('finance')
  }

  receipt(){
    this.router.navigateByUrl('receipt')
  }

  cost(){
    this.router.navigateByUrl('cost')
  }

  balance(){
    this.router.navigateByUrl('balance')
  }

  shpQt(){
    this.router.navigateByUrl('ship-quote')
  }

  rctQt(){
    this.router.navigateByUrl('recent-quote')
  }

  about(){
    this.router.navigateByUrl('about')
  }

}
