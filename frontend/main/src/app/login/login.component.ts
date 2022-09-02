import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private login:LoginserviceService) { }

  ngOnInit(): void {
    this.login.succeed = false
  }

  submit():void{
    this.login.succeed = true
    this.router.navigateByUrl('home');
  }

}
