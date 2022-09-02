import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  name:string = "Admin"

  constructor(private login:LoginserviceService) { }

  ngOnInit(): void {
  }

  sair(){

    this.login.succeed = false;

  }

}
