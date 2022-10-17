import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { stat } from 'fs';
import { catchError } from 'rxjs';
import { CarrierService } from '../carrier.service';
import { LoginserviceService } from '../loginservice.service';
import { PackService } from '../pack.service';

@Component({
  selector: 'app-packtrack',
  templateUrl: './packtrack.component.html',
  styleUrls: ['./packtrack.component.css']
})
export class PacktrackComponent implements OnInit {

  packs!: Array<any>
  id!: number
  price!: number
  await!: number
  post!: string
  origin!: string
  destiny!: string
  carrier_id!: number
  cub_height!: number
  carrierName!: string
  status!: string
  pack_sel!: any;

  constructor(public carrierService: CarrierService, public packService: PackService, private router: Router, private http: HttpClient, private login: LoginserviceService) { }

  ngOnInit(): void {
    this.packs = new Array()


    this.id = this.login.pessoaID;
    // console.log(this.id);

    this.packService.listPack(this.id).pipe(
      catchError((error) => {
        return error
      })

    ).subscribe((response: any) => {

      //  console.log(response);

      var count = Object.keys(response).length;

      for (let i = 0; i < count; i++) {

        this.price = response[i].price;
        this.await = response[i].await;
        this.post = response[i].post;
        this.origin = response[i].origin;
        this.destiny = response[i].destiny;
        this.carrier_id = response[i].carrier_id;
        this.cub_height = response[i].cub_height;

        this.status = "Em transito";

        // this.http.get('http://35.199.78.13:8080/carriers/' + this.carrier_id).subscribe((response: any) => {
        // this.carrierName = response.razao;
        // console.log(this.carrierName);

        // })

// console.log(this.carrierName);

        this.packs.push({ carrier_id: this.carrier_id, price: this.price, await: this.await, post: this.post, origin: this.origin, destiny: this.destiny, cub_height: this.cub_height, status: this.status });


      }






    })



  }

  detailCarrier(pack:any) {

    this.pack_sel = pack
    console.log(this.pack_sel.carrier_id);

    this.http.get('http://34.95.208.13:8080/carriers/' + pack.carrier_id).subscribe((response: any) => {

      this.pack_sel.carrierName = response.razao;

      console.log(this.pack_sel.carrierName);

      this.openModal()

    })




  }

  openModal() {

    var modal = document.getElementById('modal2')

    modal?.setAttribute('style', 'display:block;')
    modal?.setAttribute('class', 'portfolio-modal modal fade show')
    modal?.removeAttribute('aria-hidden')
    modal?.setAttribute('arial-modal', 'true')



  }

  closeModal() {
    var modal = document.getElementById('modal2')

    modal?.setAttribute('class', 'portfolio-modal modal fade')
    setTimeout(() => {
      modal?.setAttribute('style', 'display:none;')
    }, 500)

  }





}
