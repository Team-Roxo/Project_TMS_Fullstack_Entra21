import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
name!:string
user!:string
birth!:Date
document!:string
email!:string
password!:string
  edit: any;



  constructor(
    private router:Router
    
  ) { }

  ngOnInit(): void {
  }


  alterar(index:number){
    //this.edit.splice()
  }


}
