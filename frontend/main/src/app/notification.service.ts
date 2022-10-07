import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginserviceService } from './loginservice.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  notificacoes!:Array<any>

  constructor(private login:LoginserviceService, private http:HttpClient) { }

  findNotification(){

    

  }

}
