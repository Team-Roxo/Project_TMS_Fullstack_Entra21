import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(public loginService:LoginserviceService) { }

  ngOnInit(): void {
  }

  sair(){

    this.loginService.succeed = false;

  }

}
