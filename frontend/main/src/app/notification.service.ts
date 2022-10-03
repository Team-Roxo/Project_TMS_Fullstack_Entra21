import { Injectable } from '@angular/core';
import { LoginserviceService } from './loginservice.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private login:LoginserviceService) { }

  

}
