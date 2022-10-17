import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { CarrierService } from '../carrier.service';
import { LoginserviceService } from '../loginservice.service';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-carriers',
  templateUrl: './carriers.component.html',
  styleUrls: ['./carriers.component.css']
})
export class CarriersComponent implements OnInit {

  carriers!: Array<any>
  cnpj!: string
  email!: string
  razao!: string
  taxa!: string
  id!: number

  constructor(public carrierService: CarrierService, public quoteService: QuoteService, private router: Router, private http: HttpClient, private login: LoginserviceService) { }

  ngOnInit(): void {
    this.carriers = new Array()
    // this.carriers.push({name:"Total Express", email:"total@express.com", cnpj:"4564564566454655", taxValorFrete:0.081})
    // this.carriers.push({name:"Jadlog", email:"jadlog@jadlog.com", cnpj:"4564664656565456", taxValorFrete:0.084})
    // this.carriers.push({name:"Braspress", email:"braspress@braspress.com", cnpj:"1231323132312", taxValorFrete:0.089})
    // this.carriers.push({name:"Correios", email:"correios@correios.com", cnpj:"7897987899789", taxValorFrete:0.078})


    this.carrierService.listCarrier().pipe(
      catchError((error) => {
        return error
      })

    ).subscribe((response: any) => {

      console.log(response);

      var count = Object.keys(response).length;

      for (let i = 0; i < count; i++) {
        this.id = response[i].id;
        this.razao = response[i].razao;
        this.taxa = response[i].taxa;
        this.email = response[i].email;
        this.cnpj = response[i].cnpj;

        this.carriers.push({ id: this.id, razao: this.razao, taxa: this.taxa, email: this.email, cnpj: this.cnpj });
      }

      this.razao = "";
      this.taxa = "";
      this.email = "";
      this.cnpj = "";

    })

  }

  adicionar(razao: string, taxa: string, email: string, cnpj: string) {

    let build = {
      "razao": razao,
      "taxa": taxa,
      "email": email,
      "cnpj": cnpj
    }

    this.carrierService.adicionar(build)

    document.getElementById('load-screen')?.setAttribute('style', 'display: block')

    setTimeout(() => {
      document.getElementById('load-screen')?.setAttribute('style', 'display: none')
    }, 600);

    setTimeout(() => {
      this.ngOnInit();
    }, 500);

    // this.carriers.push({razao:this.razao, taxa:this.taxa, email:this.email, cnpj:this.cnpj});
  }

  deletar(id: number) {

    console.log(id);

    this.http.delete('http://34.95.208.13:8080/carriers/' + id).subscribe();

    document.getElementById('load-screen')?.setAttribute('style', 'display: block')

    setTimeout(() => {
      document.getElementById('load-screen')?.setAttribute('style', 'display: none')
    }, 600);

    setTimeout(() => {
      this.ngOnInit();
    }, 500);

  }

  alterar(id: number, razao: string, taxa: string, email: string, cnpj: string) {
    console.log("É TETRA");
    let build = {
      "id": id,
      "razao": razao,
      "taxa": taxa,
      "email": email,
      "cnpj": cnpj
    }

    this.http.put('http://34.95.208.13:8080/user/disbounce/' + this.login.idBounce, null)
      .subscribe((response) => {
        console.log(response);
      })

    this.http.put('http://34.95.208.13:8080/carriers', build)
      .subscribe((response) => {


        console.log(response);

      })
      
      document.getElementById('load-screen')?.setAttribute('style', 'display: block')

      setTimeout(() => {
        document.getElementById('load-screen')?.setAttribute('style', 'display: none')
      }, 600);

    setTimeout(() => {
      this.ngOnInit();
    }, 500);

  }

  openModal() {

    this.razao = "";
    this.taxa = "";
    this.email = "";
    this.cnpj = "";

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


  openModalEdit(id: number, razao: string, taxa: string, email: string, cnpj: string) {

    this.id = id
    this.razao = razao
    this.taxa = taxa
    this.email = email
    this.cnpj = cnpj

    var modal = document.getElementById('modal3')

    modal?.setAttribute('style', 'display:block;')

    modal?.setAttribute('class', 'portfolio-modal modal fade show')
    modal?.removeAttribute('aria-hidden')

    modal?.setAttribute('arial-modal', 'true')

  }

  closeModalEdit() {
    var modal = document.getElementById('modal3')


    modal?.setAttribute('class', 'portfolio-modal modal fade')
    setTimeout(() => {
      modal?.setAttribute('style', 'display:none;')
    }, 500)

  }


}
