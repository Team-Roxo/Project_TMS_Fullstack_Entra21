import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-packtrack',
  templateUrl: './packtrack.component.html',
  styleUrls: ['./packtrack.component.css']
})
export class PacktrackComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openModal(){

    var modal = document.getElementById('modal2')

    modal?.setAttribute('style', 'display:block;')

    modal?.setAttribute('class', 'portfolio-modal modal fade show')
    modal?.removeAttribute('aria-hidden')

    modal?.setAttribute('arial-modal', 'true')

  }

  closeModal(){
    var modal = document.getElementById('modal2')

    modal?.setAttribute('class', 'portfolio-modal modal fade')
    setTimeout(()=>{
      modal?.setAttribute('style', 'display:none;')
    },500)

  }

}
