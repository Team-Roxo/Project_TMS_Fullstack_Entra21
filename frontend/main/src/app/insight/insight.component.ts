import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RctQtComponent } from '../rct-qt/rct-qt.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-insight',
  templateUrl: './insight.component.html',
  styleUrls: ['./insight.component.css']
})
export class InsightComponent implements OnInit {
  count: any;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  register(){
    this.router.navigateByUrl('pack-register')
  }

  clients(){
    this.router.navigateByUrl('users')
  }

  
  // public get countVisitors() : any {
  //   return this.countVisitors
  // }

  // contador(){
  //   this.countVisitors
  //   console.log(this.countVisitors);
    
  // }
  
  





}
